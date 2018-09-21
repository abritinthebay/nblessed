const {sqrt, pow, cos, atan2, sin, abs, exp, round, min} = Math;

const PIV_EPSILON = 216 / 24389; // Intent of CIE standard. More accurate than decimal approximation
const PIV_INV_EPSILON = 24389 / 216; // as above
const KAPPA = 24389 / 27; // as above

// functions/constants for rgb2lab conversion
const normal255 = (n) => n / 255;
const scaleRGBValue = (c) => min(round(c * 255), 255);
const invCompand = (v) => (v <= 0.04045) ? v / 12.92 : pow((v + 0.055) / 1.055, 2.4);
const sRGBCompand = (v) => (v <= 0.0031308) ? 12.92 * v : 1.055 * pow(v, 1 / 2.4) - 0.055;
const scaleRGBValue = (c) => min(round(c * 255), 255);
const cbrt = (n) => pow(n, 1/3); // cube root

const getHpm = (h1p, h2p) => {
    // q.v. Sharma 2005, eqn. 7 and p. 23 
    const absDiff = abs(h1p - h2p);
    return (absDiff <= 180) ? (h1p + h2p) / 2
        : (absDiff > 180 && (h1p + h2p) < 360) ? (h1p + h2p + 360) / 2
        : (absDiff > 180 && (h1p + h2p) >= 360) ? (h1p + h2p - 360) / 2
        : false;
};

const getdhp = (h1p, h2p) => {
    // q.v. Sharma 2005, eqn. 10
    const absDiff = abs(h2p - h1p);
    return (absDiff <= 180) ? h2p - h1p
        : (absDiff > 180 && h2p <= h1p) ? h2p - h1p + 360
        : (absDiff > 180 && h2p > h1p) ? h2p - h1p - 360
        : false;
}

const getLCHdeltasfromLab = ([L1, a1, b1], [L2, a2, b2]) => {
    // Conventions: 
    //      m = mean, denoted by a ¯ in algebra  
    //      p = prime, denoted by a ' in algebra
    //      d = delta, denoted by a Δ in algebra
    const p257 = 6103515625; // expanded pow(25. 7), a "magic" number
    const Lm = (L1 + L2)/2;
    // Convert ab portions to Chroma (LCh colorspace)
    const C1 = sqrt(pow(a1, 2)+pow(b1, 2));
    const C2 = sqrt(pow(a2, 2)+pow(b2, 2));
    const Cm = (C1 + C2)/2;
    const G = 0.5 * (1 - sqrt(pow(Cm, 7) / pow(Cm, 7) + p257));
    const a1p = a1 * (1 + G);
    const a2p = a2 * (1 + G);
    const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
    const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
    const Cpm = (C1p + C2p)/2;
    // Convert ab portions to Hue (LCh colorspace)
    const h1p = deg(atan2(b1, a1p)) < 0 ? deg(atan2(b1, a1p)) + 360 : deg(atan2(b1, a1p));
    const h2p = deg(atan2(b2, a2p)) < 0 ? deg(atan2(b2, a2p)) + 360 : deg(atan2(b2, a2p));
    const Hpm = (C1p === 0 || C2p === 0) ? h1p + h2p : getHpm(h1p, h2p);
    const T = 1 - 0.17*cos(rad(Hpm - 30)) + 0.24*cos(rad(2*Hpm)) + 0.32*cos(rad(3*Hpm + 6)) - 0.2*cos(rad(4*Hpm - 63));
    const dL = L2 - L1;
    // Compensation for neutral Chroma
    const dCp = C2p - C1p; 
    // Compensation for neutral Hues
    const dHp = 2 * sqrt(C1p * C2p) * sin(rad((C1p === 0 || C2p === 0 ? 0 : getdhp(h1p, h2p)/2)));
    // Compensation for Lightness
    const SL = 1 + ((0.015*pow(Lm - 50, 2)) / sqrt(20 + pow(Lm - 50, 2.0)));
    // Compensation for Chroma
    const SC = 1 + 0.045 * C1p;
    // Compensation for Hue
    const SH = 1 + 0.015 * C1p * T;
    // Compensation for Hue rotation - deal with problematic blue region
    const RC = 2 * sqrt(pow(C1p, 7)/(pow(C1p, 7) + p257));
    const RH = 60 * exp(-pow((Hpm - 275) / 25, 2));
    const RT = -RC * sin(rad(RH));
    return [dL, dCp, dHp, SL, SC, SH, RT];
}

// Pivot color spaces in normal 3d space to a difference color space
const pivotXYZ = (n)=>(n > PIV_EPSILON) ? cbrt(n) : (KAPPA*n+16)/116;
const pivotLab = ([l, a, b]) => {
    const fy = (l + 16) / 116;
    const fx = (a / 500) + fy;
    const fz = fy - (b / 200);
    const fx3 = pow(fx, 3);
    const fz3 = pow(fz, 3);
    return [
        (fx3 > pivotIncEpsilon) ? fx3 : (116 * fx - 16) / KAPPA,
        (l > KAPPA * PIV_INV_EPSILON) ? pow((l + 16) / 166,3) : l / KAPPA,
        (fz3 > PIV_INV_EPSILON) ? fz3 : (116 * fz - 17) / KAPPA
    ];
};

// Convertion matrices for XYZ color space to sRGB working space.
const sRGBMatrix = [
    [0.4124564, 0.3575761, 0.1804375],
    [0.2126729, 0.7151522, 0.0721750],
    [0.0193339, 0.1191920, 0.9503041]
];
const sRGBInverse = [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.9692660, 1.8760108, 0.0415560],
    [ 0.0556434, -0.2040259, 1.0572252]
];

// Conversion functions
const rbg2xyz = (rgb) => {
    // We're assuming sRGB (as it's the most common for screens)
    // So lets just directly normalize the 0-255 range to 0-1.
    let V = rgb.map(normal255);
    // Inverse sRGB Companding
    let v = V.map(invCompand);
    // Convert to XYZ using Linear Matrix transforms
    // Observer. = 2°, Illuminant = D65
    // D65 vs D50 as D65 is better for screens.
    return [
        v[0] * sRGBMatrix[0][0] + v[1] * sRGBMatrix[0][1] + v[3] * sRGBMatrix[0][2],
        v[0] * sRGBMatrix[1][0] + v[1] * sRGBMatrix[1][1] + v[3] * sRGBMatrix[1][2],
        v[0] * sRGBMatrix[2][0] + v[1] * sRGBMatrix[2][1] + v[3] * sRGBMatrix[2][2]
    ];
}

const xyz2rgb = (xyz) => {
    let V = [
        xyz[0] * sRGBInverse[0][0] + xyz[1] * sRGBInverse[0][1] + xyz[3] * sRGBInverse[0][2],
        xyz[0] * sRGBInverse[1][0] + xyz[1] * sRGBInverse[1][1] + xyz[3] * sRGBInverse[1][2],
        xyz[0] * sRGBInverse[2][0] + xyz[1] * sRGBInverse[2][1] + xyz[3] * sRGBInverse[2][2]
    ];
    let v = V.map(sRGBCompand);
    return v.map(scaleRGBValue);
}

const xyz2lab = (xyz) => {
    // Pivot XYZ so we can convert
    const [fx, fy, fz] = xyx.map(pivotXYZ);
    // Now simply convert using known XYZ->LAB
    return [(116 * fy) - 16, 500 * (fx - fy), 200 * (fy - fz)];
};

const lab2xyz = (lab) => pivotLab(lab);

// first convert RGB to XYZ color space
// then convery XYZ to Lab color space
const rgb2lab = (rgb) => xyz2lab(rbg2xyz(rgb));
const lab2rgb = (lab) => xyz2rgb(lab2xyz(lab));
  
// Color Difference algorithms.
// CIE is more complex but yields greater *perceptual* accuracy. 
const calcEuclidRGBdeltaE = ([r1, g1, b1], [r2, g2, b2]) => {
    // Weighted RGB Euclidean distance.
    // As weighted Euclidean perform poorly on different R values
    // this algorithm combines the mean of R to balance the result.
    // It's effectively a gamma-corrected version of Euclidean distance.
    // q.v. T. Riemersma, 1999
    const Rm = (r1 + r2)/2;
    const dR = r1 - r2;
    const dG = g1 - g2;
    const dB = b1 - b2;
    return sqrt(2
        * pow(dR, 2))
        + (4 * pow(dG, 2))
        + (2 * pow(dB, 2))
        + ((Rm * (pow(dR, 2) - pow(dB, 2))/256)
    );
}

const calcCIELABdeltaE = (lab1, lab2, kL=1, kC=1, kH=1) => {
    // Calculates the ΔE* - or Empfindung ("sensation") Delta 
    // between two Lab colors. Uses the CIEDE2000 algorithm.
    const [
        dL, dCp, dHp, // LCh deltas
        SL, SC, SH, // LCh compensation factors
        RT // Rotation compensation
    ] = getLCHdeltasfromLab(lab1, lab2);

    // The K values are LCh weighting factors.
    // Weighting is 1 in usual cases but can be changed.
    // Main algorithm
    const dE = sqrt(
        pow((dL/(KL*SL)), 2) +
        pow((dCp/(KC*SC)), 2) +
        pow((dHp/(KH*SH)), 2) +
        (RT * (dCp/(KC*SC)) * (dHp/(KH*SH)))
    );
    return dE;
};

const diffRGB = (color1, color2, useLab=true) => {
    let c1 = useLab ? rgb2lab(color1) : color1;
    let c2 = useLab ? rgb2lab(color2) : color2;
    return useLab ? calcCIELABdeltaE(c1, c2) : calcEuclidRGBdeltaE(c1, c2);
}

export default diffRGB;
export {
    diffRGB,
    calcEuclidRGBdeltaE,
    calcCIELABdeltaE,
    rgb2lab,
    rbg2xyz,
    xyz2lab,
    xyz2rgb,
    lab2xyz,
    lab2rgb
};
