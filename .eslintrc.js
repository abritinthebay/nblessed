module.exports = {
        "env": {
            "browser": true,
            "node": true,
            "es6": true
        },
        "parserOptions": {
            "ecmaVersion": 2018,
            "sourceType": "module",
            "ecmaFeatures": {
                "globalReturn": false,
                "impliedStrict": true,
                "jsx": true
            }
        },
        "rules": {
            "for-direction": 2,
            "getter-return": 2,
            "no-await-in-loop": 2,
            "no-compare-neg-zero": 2,
            "no-cond-assign": 2,
            "no-console": 1,
            "no-constant-condition": 1,
            "no-control-regex": 0,
            "no-debugger": 2,
            "no-dupe-args": 2,
            "no-dupe-keys": 2,
            "no-duplicate-case": 2,
            "no-empty": 1,
            "no-empty-character-class": 1,
            "no-ex-assign": 2,
            "no-extra-boolean-cast": 0,
            "no-extra-parens": 1,
            "no-extra-semi": 2,
            "no-func-assign": 2,
            "no-inner-declarations": [2, "both"],
            "no-invalid-regexp": 2,
            "no-irregular-whitespace": 1,
            "no-obj-calls": 2,
            "no-prototype-builtins": 2,
            "no-regex-spaces": 2,
            "no-sparse-arrays": 1,
            "no-template-curly-in-string": 1,
            "no-unexpected-multiline": 2,
            "no-unreachable": 2,
            "no-unsafe-finally": 2,
            "no-unsafe-negation": 2,
            "use-isnan": 1,
            "valid-jsdoc": 0,
            "valid-typeof": 2,
            "accessor-pairs": 2,
            "array-callback-return": 1,
            "block-scoped-var": 1,
            "class-methods-use-this": 1,
            "complexity": 1,
            "consistent-return": 2,
            "curly": 2,
            "default-case": 2,
            "dot-location": [1, "property"],
            "dot-notation": [1, {
                "allowPattern": "^[a-z]+(_[a-z]+)+$" 
            }],
            "eqeqeq": 2,
            "guard-for-in": 2,
            "max-classes-per-file": [2, 1],
            "no-alert": 2,
            "no-caller": 2,
            "no-case-declarations": 1,
            "no-div-regex": 1,
            "no-else-return": 2,
            "no-empty-function": [2, {
                "allow": ["arrowFunctions"]
            }],
            "no-empty-pattern": 2,
            "no-eq-null": 2,
            "no-eval": 2,
            "no-extend-native": 1,
            "no-extra-bind": 2,
            "no-extra-label": 2,
            "no-fallthrough": [2, {
                "commentPattern": "((break[\\s\\w]*omitted)|(falls?[\\s\\w]through))*"
            }],
            "no-floating-decimal": 2,
            "no-global-assign": 1,
            "no-implicit-coercion": [2, {
                "allow": ["!!"]
            }],
            "no-implicit-globals": 2,
            "no-implied-eval": 2,
            "no-invalid-this": 2,
            "no-iterator": 2,
            "no-labels": 0,
            "no-lone-blocks": 2,
            "no-loop-func": 2,
            "no-magic-numbers": [0, {
                "ignore": [0, 1],
                "ignoreArrayIndexes": true,
                "enforceConst": true
            }],
            "no-multi-spaces": 2,
            "no-multi-str": 2,
            "no-new": 2,
            "no-new-func": 2,
            "no-new-wrappers": 2,
            "no-octal": 2,
            "no-octal-escape": 2,
            "no-param-reassign": 2,
            "no-proto": 1,
            "no-redeclare": 2,
            "no-restricted-properties": 0,
            "no-return-assign": 2,
            "no-return-await": 0,
            "no-script-url": 2,
            "no-self-assign": 2,
            "no-self-compare": 2,
            "no-sequences": 1,
            "no-throw-literal": 2,
            "no-unmodified-loop-condition": 2,
            "no-unused-expressions": [2, {
                "allowShortCircuit": true,
                "allowTernary": true
            }],
            "no-unused-labels": 2,
            "no-useless-call": 2,
            "no-useless-concat": 2,
            "no-useless-escape": 2,
            "no-useless-return": 2,
            "no-void": 2,
            "no-warning-comments": 0,
            "no-with": 1,
            "prefer-promise-reject-errors": [1, {
                "allowEmptyReject": true
            }],
            "radix": 0,
            "require-await": 1,
            "vars-on-top": 1,
            "wrap-iife": 2,
            "yoda": 1,
            "strict": 0,
            "init-declarations": 0,
            "no-delete-var": 2,
            "no-label-var": 2,
            "no-restricted-globals": 0,
            "no-shadow": 2,
            "no-shadow-restricted-names": 2,
            "no-undef": 2,
            "no-undef-init": 2,
            "no-undefined": 1,
            "no-unused-vars": 2,
            "no-use-before-define": 2,
            "callback-return": 2,
            "global-require": 2,
            "handle-callback-err": [2, "^(err|error)"],
            "no-buffer-constructor": 2,
            "no-mixed-requires": 0,
            "no-new-require": 2,
            "no-path-concat": 2,
            "no-process-env": 0,
            "no-process-exit": 1,
            "no-restricted-modules": 0,
            "no-sync": 1,
            "array-bracket-newline": [1, "consistent"],
            "array-bracket-spacing": [2, "never"],
            "array-element-newline": [2, "consistent"],
            "block-spacing": 1,
            "brace-style": 2,
            "camelcase": 2,
            "capitalized-comments": 1,
            "comma-dangle": 2,
            "comma-spacing": 2,
            "comma-style": 2,
            "computed-property-spacing": 2,
            "consistent-this": 0,
            "eol-last": 2,
            "func-call-spacing": 2,
            "func-name-matching": 0,
            "func-names": [2, "as-needed"],
            "func-style": 0,
            "function-paren-newline": [2, "never"],
            "id-blacklist": 0,
            "id-length": 2,
            "id-match": 0,
            "implicit-arrow-linebreak": 2,
            "indent": [2, "tab", {
                "SwitchCase": 1 
            }],
            "jsx-quotes": 2,
            "key-spacing": 2,
            "keyword-spacing": 2,
            "line-comment-position": 0,
            "linebreak-style": 0,
            "lines-around-comment": 0,
            "lines-between-class-members": 1,
            "max-depth": 1,
            "max-len": 0,
            "max-lines": 0,
            "max-lines-per-function": [1, {
                "skipComments": true
            }],
            "max-nested-callbacks": 1,
            "max-params": 0,
            "max-statements": 0,
            "max-statements-per-line": 0,
            "multiline-comment-style": [1, "starred-block"],
            "multiline-ternary": 0,
            "new-cap": 1,
            "new-parens": 2,
            "newline-per-chained-call": [2, {
                "ignoreChainWithDepth": 3
            }],
            "no-array-constructor": 1,
            "no-bitwise": [2, {
                "int32Hint": true
            }],
            "no-continue": 0,
            "no-inline-comments": 0,
            "no-lonely-if": 2,
            "no-mixed-operators": 0,
            "no-mixed-spaces-and-tabs": 2,
            "no-multi-assign": 1,
            "no-multiple-empty-lines": 2,
            "no-negated-condition": 0,
            "no-nested-ternary": 0,
            "no-new-object": 2,
            "no-plusplus": 0,
            "no-restricted-syntax": 0,
            "no-tabs": 0,
            "no-ternary": 0,
            "no-trailing-spaces": 2,
            "no-underscore-dangle": [0, {
                "allowAfterThis": true,
                "allowAfterSuper": true
            }],
            "no-unneeded-ternary": 2,
            "no-whitespace-before-property": 2,
            "nonblock-statement-body-position": 2,
            "object-curly-newline": [2, {
                "multiline": true
            }],
            "object-curly-spacing": 2,
            "object-property-newline": 0,
            "one-var": 0,
            "one-var-declaration-per-line": 0,
            "operator-assignment": 1,
            "operator-linebreak": 0,
            "padded-blocks": [2, "never"],
            "padding-line-between-statements": 0,
            "prefer-object-spread": 2,
            "quote-props": 0,
            "quotes": [2, "double", {
                "avoidEscape": true
            }],
            "require-jsdoc": 0,
            "semi": 2,
            "semi-spacing": [2, {
                "before": false,
                "after": true
            }],
            "semi-style": 2,
            "sort-keys": [2, "asc", {
                "natural": true
            }],
            "sort-vars": 0,
            "space-before-blocks": [1, {
                "functions": "always",
                "keywords": "always",
                "classes": "always" 
            }],
            "space-before-function-paren": [2, "never"],
            "space-in-parens": 2,
            "space-infix-ops": [2, {
                "int32Hint": false
            }],
            "space-unary-ops": 2,
            "spaced-comment": [2, "always", {
                "exceptions": ["-", "=", "*"] 
            }],
            "switch-colon-spacing": 1,
            "template-tag-spacing": 2,
            "unicode-bom": 0,
            "wrap-regex": 0,
            "arrow-body-style": [2, "as-needed"],
            "arrow-parens": [2, "always"],
            "arrow-spacing": 2,
            "constructor-super": 2,
            "generator-star-spacing": [2, {"before": false, "after": true}],
            "no-class-assign": 2,
            "no-confusing-arrow": 2,
            "no-const-assign": 2,
            "no-dupe-class-members": 2,
            "no-duplicate-imports": 2,
            "no-new-symbol": 2,
            "no-restricted-imports": 0,
            "no-this-before-super": 2,
            "no-useless-computed-key": 2,
            "no-useless-constructor": 2,
            "no-useless-rename": 0,
            "no-var": 0,
            "object-shorthand": 0,
            "prefer-arrow-callback": 0,
            "prefer-const": 0,
            "prefer-destructuring": 0,
            "prefer-numeric-literals": 0,
            "prefer-rest-params": 0,
            "prefer-spread": 0,
            "prefer-template": 0,
            "require-yield": 0,
            "rest-spread-spacing": 0,
            "sort-imports": 0,
            "symbol-description": 0,
            "template-curly-spacing": 0,
            "yield-star-spacing": 0
        }    
};
