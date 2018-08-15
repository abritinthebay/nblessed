/*
 * Taken from terminfo(5) man page.
 */

/* jshint maxlen: 300 */
// jscs:disable maximumLineLength
// jscs:disable

var alias = exports;

// These are the boolean capabilities:
alias.bools = {
	/*
	 *         Variable                                      Cap-                               TCap                                  Description
	 *         Booleans                                      name                               Code
	 */
	"auto_left_margin": ["bw", "bw"], //                                Cub1 wraps from col‐ umn 0 to last column
	"auto_right_margin": ["am", "am"], //                                Terminal has auto‐ matic margins
	"back_color_erase": ["bce", "ut"], //                                Screen erased with background color
	"can_change": ["ccc", "cc"], //                                Terminal can re- define existing col‐ ors
	"ceol_standout_glitch": ["xhp", "xs"], //                                Standout not erased by overwriting (hp)
	"col_addr_glitch": ["xhpa", "YA"], //                                Only positive motion for hpa/mhpa caps
	"cpi_changes_res": ["cpix", "YF"], //                                Changing character pitch changes reso‐ lution
	"cr_cancels_micro_mode": ["crxm", "YB"], //                                Using cr turns off micro mode
	"dest_tabs_magic_smso": ["xt", "xt"], //                                Tabs destructive, magic so char (t1061)
	"eat_newline_glitch": ["xenl", "xn"], //                                Newline ignored after 80 cols (con‐ cept)
	"erase_overstrike": ["eo", "eo"], //                                Can erase over‐ strikes with a blank
	"generic_type": ["gn", "gn"], //                                Generic line type
	"hard_copy": ["hc", "hc"], //                                Hardcopy terminal
	"hard_cursor": ["chts", "HC"], //                                Cursor is hard to see
	"has_meta_key": ["km", "km"], //                                Has a meta key (i.e., sets 8th-bit)
	"has_print_wheel": ["daisy", "YC"], //                                Printer needs opera‐ tor to change char‐ acter set
	"has_status_line": ["hs", "hs"], //                                Has extra status line
	"hue_lightness_saturation": ["hls", "hl"], //                                Terminal uses only HLS color notation (Tektronix)
	"insert_null_glitch": ["in", "in"], //                                Insert mode distin‐ guishes nulls
	"lpi_changes_res": ["lpix", "YG"], //                                Changing line pitch changes resolution
	"memory_above": ["da", "da"], //                                Display may be retained above the screen
	"memory_below": ["db", "db"], //                                Display may be retained below the screen
	"move_insert_mode": ["mir", "mi"], //                                Safe to move while in insert mode
	"move_standout_mode": ["msgr", "ms"], //                                Safe to move while in standout mode
	"needs_xon_xoff": ["nxon", "nx"], //                                Padding will not work, xon/xoff required
	"no_esc_ctlc": ["xsb", "xb"], //                                Beehive (f1=escape, f2=ctrl C)
	"no_pad_char": ["npc", "NP"], //                                Pad character does not exist
	"non_dest_scroll_region": ["ndscr", "ND"], //                                Scrolling region is non-destructive
	"non_rev_rmcup": ["nrrmc", "NR"], //                                Smcup does not reverse rmcup
	"over_strike": ["os", "os"], //                                Terminal can over‐ strike
	"prtr_silent": ["mc5i", "5i"], //                                Printer will not echo on screen
	"row_addr_glitch": ["xvpa", "YD"], //                                Only positive motion for vpa/mvpa caps
	"semi_auto_right_margin": ["sam", "YE"], //                                Printing in last column causes cr
	"status_line_esc_ok": ["eslok", "es"], //                                Escape can be used on the status line
	"tilde_glitch": ["hz", "hz"], //                                Cannot print ~'s (hazeltine)
	"transparent_underline": ["ul", "ul"], //                                Underline character overstrikes
	"xon_xoff": ["xon", "xo"] //                                Terminal uses xon/xoff handshaking
};

// These are the numeric capabilities:
alias.numbers = {
	/*
	 *         Variable                                      Cap-                               TCap                                  Description
	 *          Numeric                                      name                               Code
	 */
	"columns": ["cols", "co"], //                                Number of columns in a line
	"init_tabs": ["it", "it"], //                                Tabs initially every # spaces
	"label_height": ["lh", "lh"], //                                Rows in each label
	"label_width": ["lw", "lw"], //                                Columns in each label
	"lines": ["lines", "li"], //                                Number of lines on screen or page
	"lines_of_memory": ["lm", "lm"], //                                Lines of memory if > line. 0 means varies
	"magic_cookie_glitch": ["xmc", "sg"], //                                Number of blank characters left by smso or rmso
	"max_attributes": ["ma", "ma"], //                                Maximum combined attributes terminal can handle
	"max_colors": ["colors", "Co"], //                                Maximum number of colors on screen
	"max_pairs": ["pairs", "pa"], //                                Maximum number of color-pairs on the screen
	"maximum_windows": ["wnum", "MW"], //                                Maximum number of defineable windows
	"no_color_video": ["ncv", "NC"], //                                Video attributes that cannot be used with colors
	"num_labels": ["nlab", "Nl"], //                                Number of labels on screen
	"padding_baud_rate": ["pb", "pb"], //                                Lowest baud rate where padding needed
	"virtual_terminal": ["vt", "vt"], //                                Virtual terminal number (CB/unix)
	"width_status_line": ["wsl", "ws"], //                                Number of columns in status line

	/*
	 * The  following  numeric  capabilities  are present in the SVr4.0 term structure, but are not yet documented in the man page.  They came in with
	 * SVr4's printer support.
	 */


	/*
	 *         Variable                                      Cap-                               TCap                                  Description
	 *          Numeric                                      name                               Code
	 */
	"bit_image_entwining": ["bitwin", "Yo"], //                                Number of passes for each bit-image row
	"bit_image_type": ["bitype", "Yp"], //                                Type of bit-image device
	"buffer_capacity": ["bufsz", "Ya"], //                                Numbers of bytes buffered before printing
	"buttons": ["btns", "BT"], //                                Number of buttons on mouse
	"dot_horz_spacing": ["spinh", "Yc"], //                                Spacing of dots hor‐ izontally in dots per inch
	"dot_vert_spacing": ["spinv", "Yb"], //                                Spacing of pins ver‐ tically in pins per inch
	"max_micro_address": ["maddr", "Yd"], //                                Maximum value in micro_..._address
	"max_micro_jump": ["mjump", "Ye"], //                                Maximum value in parm_..._micro
	"micro_col_size": ["mcs", "Yf"], //                                Character step size when in micro mode
	"micro_line_size": ["mls", "Yg"], //                                Line step size when in micro mode
	"number_of_pins": ["npins", "Yh"], //                                Numbers of pins in print-head
	"output_res_char": ["orc", "Yi"], //                                Horizontal resolu‐ tion in units per line
	"output_res_horz_inch": ["orhi", "Yk"], //                                Horizontal resolu‐ tion in units per inch
	"output_res_line": ["orl", "Yj"], //                                Vertical resolution in units per line
	"output_res_vert_inch": ["orvi", "Yl"], //                                Vertical resolution in units per inch
	"print_rate": ["cps", "Ym"], //                                Print rate in char‐ acters per second
	"wide_char_size": ["widcs", "Yn"] //                                Character step size when in double wide mode
};

// These are the string capabilities:
alias.strings = {
	/*
	 *         Variable                                    Cap-                             TCap                                   Description
	 *          String                                     name                             Code
	 */
	"acs_chars": ["acsc", "ac"], //                              Graphics charset pairs, based on vt100
	"back_tab": ["cbt", "bt"], //                              Back tab (P)
	"bell": ["bel", "bl"], //                              Audible signal (bell) (P)
	"carriage_return": ["cr", "cr"], //                              Carriage return (P*) (P*)
	"change_char_pitch": ["cpi", "ZA"], //                              Change number of characters per inch to #1
	"change_line_pitch": ["lpi", "ZB"], //                              Change number of lines per inch to #1
	"change_res_horz": ["chr", "ZC"], //                              Change horizontal resolution to #1
	"change_res_vert": ["cvr", "ZD"], //                              Change vertical res‐ olution to #1
	"change_scroll_region": ["csr", "cs"], //                              Change region to line #1 to line #2 (P)
	"char_padding": ["rmp", "rP"], //                              Like ip but when in insert mode
	"clear_all_tabs": ["tbc", "ct"], //                              Clear all tab stops (P)
	"clear_margins": ["mgc", "MC"], //                              Clear right and left soft margins
	"clear_screen": ["clear", "cl"], //                              Clear screen and home cursor (P*)
	"clr_bol": ["el1", "cb"], //                              Clear to beginning of line
	"clr_eol": ["el", "ce"], //                              Clear to end of line (P)
	"clr_eos": ["ed", "cd"], //                              Clear to end of screen (P*)
	"column_address": ["hpa", "ch"], //                              Horizontal position #1, absolute (P)
	"command_character": ["cmdch", "CC"], //                              Terminal settable cmd character in prototype !?
	"create_window": ["cwin", "CW"], //                              Define a window #1 from #2,#3 to #4,#5
	"cursor_address": ["cup", "cm"], //                              Move to row #1 col‐ umns #2
	"cursor_down": ["cud1", "do"], //                              Down one line
	"cursor_home": ["home", "ho"], //                              Home cursor (if no cup)
	"cursor_invisible": ["civis", "vi"], //                              Make cursor invisi‐ ble
	"cursor_left": ["cub1", "le"], //                              Move left one space
	"cursor_mem_address": ["mrcup", "CM"], //                              Memory relative cur‐ sor addressing, move to row #1 columns #2
	"cursor_normal": ["cnorm", "ve"], //                              Make cursor appear normal (undo civis/cvvis)
	"cursor_right": ["cuf1", "nd"], //                              Non-destructive space (move right one space)
	"cursor_to_ll": ["ll", "ll"], //                              Last line, first column (if no cup)
	"cursor_up": ["cuu1", "up"], //                              Up one line
	"cursor_visible": ["cvvis", "vs"], //                              Make cursor very visible
	"define_char": ["defc", "ZE"], //                              Define a character #1, #2 dots wide, descender #3
	"delete_character": ["dch1", "dc"], //                              Delete character (P*)
	"delete_line": ["dl1", "dl"], //                              Delete line (P*)
	"dial_phone": ["dial", "DI"], //                              Dial number #1
	"dis_status_line": ["dsl", "ds"], //                              Disable status line
	"display_clock": ["dclk", "DK"], //                              Display clock
	"down_half_line": ["hd", "hd"], //                              Half a line down
	"ena_acs": ["enacs", "eA"], //                              Enable alternate char set
	"enter_alt_charset_mode": ["smacs", "as"], //                              Start alternate character set (P)
	"enter_am_mode": ["smam", "SA"], //                              Turn on automatic margins
	"enter_blink_mode": ["blink", "mb"], //                              Turn on blinking
	"enter_bold_mode": ["bold", "md"], //                              Turn on bold (extra bright) mode
	"enter_ca_mode": ["smcup", "ti"], //                              String to start pro‐ grams using cup
	"enter_delete_mode": ["smdc", "dm"], //                              Enter delete mode
	"enter_dim_mode": ["dim", "mh"], //                              Turn on half-bright mode
	"enter_doublewide_mode": ["swidm", "ZF"], //                              Enter double-wide mode
	"enter_draft_quality": ["sdrfq", "ZG"], //                              Enter draft-quality mode
	"enter_insert_mode": ["smir", "im"], //                              Enter insert mode
	"enter_italics_mode": ["sitm", "ZH"], //                              Enter italic mode
	"enter_leftward_mode": ["slm", "ZI"], //                              Start leftward car‐ riage motion
	"enter_micro_mode": ["smicm", "ZJ"], //                              Start micro-motion mode
	"enter_near_letter_quality": ["snlq", "ZK"], //                              Enter NLQ mode
	"enter_normal_quality": ["snrmq", "ZL"], //                              Enter normal-quality mode
	"enter_protected_mode": ["prot", "mp"], //                              Turn on protected mode
	"enter_reverse_mode": ["rev", "mr"], //                              Turn on reverse video mode
	"enter_secure_mode": ["invis", "mk"], //                              Turn on blank mode (characters invisi‐ ble)
	"enter_shadow_mode": ["sshm", "ZM"], //                              Enter shadow-print mode
	"enter_standout_mode": ["smso", "so"], //                              Begin standout mode
	"enter_subscript_mode": ["ssubm", "ZN"], //                              Enter subscript mode
	"enter_superscript_mode": ["ssupm", "ZO"], //                              Enter superscript mode
	"enter_underline_mode": ["smul", "us"], //                              Begin underline mode
	"enter_upward_mode": ["sum", "ZP"], //                              Start upward car‐ riage motion
	"enter_xon_mode": ["smxon", "SX"], //                              Turn on xon/xoff handshaking
	"erase_chars": ["ech", "ec"], //                              Erase #1 characters (P)
	"exit_alt_charset_mode": ["rmacs", "ae"], //                              End alternate char‐ acter set (P)
	"exit_am_mode": ["rmam", "RA"], //                              Turn off automatic margins
	"exit_attribute_mode": ["sgr0", "me"], //                              Turn off all attributes
	"exit_ca_mode": ["rmcup", "te"], //                              Strings to end pro‐ grams using cup
	"exit_delete_mode": ["rmdc", "ed"], //                              End delete mode
	"exit_doublewide_mode": ["rwidm", "ZQ"], //                              End double-wide mode
	"exit_insert_mode": ["rmir", "ei"], //                              Exit insert mode
	"exit_italics_mode": ["ritm", "ZR"], //                              End italic mode
	"exit_leftward_mode": ["rlm", "ZS"], //                              End left-motion mode


	"exit_micro_mode": ["rmicm", "ZT"], //                              End micro-motion mode
	"exit_shadow_mode": ["rshm", "ZU"], //                              End shadow-print mode
	"exit_standout_mode": ["rmso", "se"], //                              Exit standout mode
	"exit_subscript_mode": ["rsubm", "ZV"], //                              End subscript mode
	"exit_superscript_mode": ["rsupm", "ZW"], //                              End superscript mode
	"exit_underline_mode": ["rmul", "ue"], //                              Exit underline mode
	"exit_upward_mode": ["rum", "ZX"], //                              End reverse charac‐ ter motion
	"exit_xon_mode": ["rmxon", "RX"], //                              Turn off xon/xoff handshaking
	"fixed_pause": ["pause", "PA"], //                              Pause for 2-3 sec‐ onds
	"flash_hook": ["hook", "fh"], //                              Flash switch hook
	"flash_screen": ["flash", "vb"], //                              Visible bell (may not move cursor)
	"form_feed": ["ff", "ff"], //                              Hardcopy terminal page eject (P*)
	"from_status_line": ["fsl", "fs"], //                              Return from status line
	"goto_window": ["wingo", "WG"], //                              Go to window #1
	"hangup": ["hup", "HU"], //                              Hang-up phone
	"init_1string": ["is1", "i1"], //                              Initialization string
	"init_2string": ["is2", "is"], //                              Initialization string
	"init_3string": ["is3", "i3"], //                              Initialization string
	"init_file": ["if", "if"], //                              Name of initializa‐ tion file
	"init_prog": ["iprog", "iP"], //                              Path name of program for initialization
	"initialize_color": ["initc", "Ic"], //                              Initialize color #1 to (#2,#3,#4)
	"initialize_pair": ["initp", "Ip"], //                              Initialize color pair #1 to fg=(#2,#3,#4), bg=(#5,#6,#7)
	"insert_character": ["ich1", "ic"], //                              Insert character (P)
	"insert_line": ["il1", "al"], //                              Insert line (P*)
	"insert_padding": ["ip", "ip"], //                              Insert padding after inserted character
	"key_a1": ["ka1", "K1"], //                              Upper left of keypad
	"key_a3": ["ka3", "K3"], //                              Upper right of key‐ pad
	"key_b2": ["kb2", "K2"], //                              Center of keypad
	"key_backspace": ["kbs", "kb"], //                              Backspace key
	"key_beg": ["kbeg", "@1"], //                              Begin key
	"key_btab": ["kcbt", "kB"], //                              Back-tab key
	"key_c1": ["kc1", "K4"], //                              Lower left of keypad
	"key_c3": ["kc3", "K5"], //                              Lower right of key‐ pad
	"key_cancel": ["kcan", "@2"], //                              Cancel key
	"key_catab": ["ktbc", "ka"], //                              Clear-all-tabs key
	"key_clear": ["kclr", "kC"], //                              Clear-screen or erase key
	"key_close": ["kclo", "@3"], //                              Close key
	"key_command": ["kcmd", "@4"], //                              Command key
	"key_copy": ["kcpy", "@5"], //                              Copy key
	"key_create": ["kcrt", "@6"], //                              Create key
	"key_ctab": ["kctab", "kt"], //                              Clear-tab key
	"key_dc": ["kdch1", "kD"], //                              Delete-character key
	"key_dl": ["kdl1", "kL"], //                              Delete-line key
	"key_down": ["kcud1", "kd"], //                              Down-arrow key

	"key_eic": ["krmir", "kM"], //                              Sent by rmir or smir in insert mode
	"key_end": ["kend", "@7"], //                              End key
	"key_enter": ["kent", "@8"], //                              Enter/send key
	"key_eol": ["kel", "kE"], //                              Clear-to-end-of-line key
	"key_eos": ["ked", "kS"], //                              Clear-to-end-of- screen key
	"key_exit": ["kext", "@9"], //                              Exit key
	"key_f0": ["kf0", "k0"], //                              F0 function key
	"key_f1": ["kf1", "k1"], //                              F1 function key
	"key_f10": ["kf10", "k;"], //                              F10 function key
	"key_f11": ["kf11", "F1"], //                              F11 function key
	"key_f12": ["kf12", "F2"], //                              F12 function key
	"key_f13": ["kf13", "F3"], //                              F13 function key
	"key_f14": ["kf14", "F4"], //                              F14 function key
	"key_f15": ["kf15", "F5"], //                              F15 function key
	"key_f16": ["kf16", "F6"], //                              F16 function key
	"key_f17": ["kf17", "F7"], //                              F17 function key
	"key_f18": ["kf18", "F8"], //                              F18 function key
	"key_f19": ["kf19", "F9"], //                              F19 function key
	"key_f2": ["kf2", "k2"], //                              F2 function key
	"key_f20": ["kf20", "FA"], //                              F20 function key
	"key_f21": ["kf21", "FB"], //                              F21 function key
	"key_f22": ["kf22", "FC"], //                              F22 function key
	"key_f23": ["kf23", "FD"], //                              F23 function key
	"key_f24": ["kf24", "FE"], //                              F24 function key
	"key_f25": ["kf25", "FF"], //                              F25 function key
	"key_f26": ["kf26", "FG"], //                              F26 function key
	"key_f27": ["kf27", "FH"], //                              F27 function key
	"key_f28": ["kf28", "FI"], //                              F28 function key
	"key_f29": ["kf29", "FJ"], //                              F29 function key
	"key_f3": ["kf3", "k3"], //                              F3 function key
	"key_f30": ["kf30", "FK"], //                              F30 function key
	"key_f31": ["kf31", "FL"], //                              F31 function key
	"key_f32": ["kf32", "FM"], //                              F32 function key
	"key_f33": ["kf33", "FN"], //                              F33 function key
	"key_f34": ["kf34", "FO"], //                              F34 function key
	"key_f35": ["kf35", "FP"], //                              F35 function key
	"key_f36": ["kf36", "FQ"], //                              F36 function key
	"key_f37": ["kf37", "FR"], //                              F37 function key
	"key_f38": ["kf38", "FS"], //                              F38 function key
	"key_f39": ["kf39", "FT"], //                              F39 function key
	"key_f4": ["kf4", "k4"], //                              F4 function key
	"key_f40": ["kf40", "FU"], //                              F40 function key
	"key_f41": ["kf41", "FV"], //                              F41 function key
	"key_f42": ["kf42", "FW"], //                              F42 function key
	"key_f43": ["kf43", "FX"], //                              F43 function key
	"key_f44": ["kf44", "FY"], //                              F44 function key
	"key_f45": ["kf45", "FZ"], //                              F45 function key
	"key_f46": ["kf46", "Fa"], //                              F46 function key
	"key_f47": ["kf47", "Fb"], //                              F47 function key
	"key_f48": ["kf48", "Fc"], //                              F48 function key
	"key_f49": ["kf49", "Fd"], //                              F49 function key
	"key_f5": ["kf5", "k5"], //                              F5 function key
	"key_f50": ["kf50", "Fe"], //                              F50 function key
	"key_f51": ["kf51", "Ff"], //                              F51 function key
	"key_f52": ["kf52", "Fg"], //                              F52 function key
	"key_f53": ["kf53", "Fh"], //                              F53 function key
	"key_f54": ["kf54", "Fi"], //                              F54 function key
	"key_f55": ["kf55", "Fj"], //                              F55 function key
	"key_f56": ["kf56", "Fk"], //                              F56 function key
	"key_f57": ["kf57", "Fl"], //                              F57 function key
	"key_f58": ["kf58", "Fm"], //                              F58 function key
	"key_f59": ["kf59", "Fn"], //                              F59 function key

	"key_f6": ["kf6", "k6"], //                              F6 function key
	"key_f60": ["kf60", "Fo"], //                              F60 function key
	"key_f61": ["kf61", "Fp"], //                              F61 function key
	"key_f62": ["kf62", "Fq"], //                              F62 function key
	"key_f63": ["kf63", "Fr"], //                              F63 function key
	"key_f7": ["kf7", "k7"], //                              F7 function key
	"key_f8": ["kf8", "k8"], //                              F8 function key
	"key_f9": ["kf9", "k9"], //                              F9 function key
	"key_find": ["kfnd", "@0"], //                              Find key
	"key_help": ["khlp", "%1"], //                              Help key
	"key_home": ["khome", "kh"], //                              Home key
	"key_ic": ["kich1", "kI"], //                              Insert-character key
	"key_il": ["kil1", "kA"], //                              Insert-line key
	"key_left": ["kcub1", "kl"], //                              Left-arrow key
	"key_ll": ["kll", "kH"], //                              Lower-left key (home down)
	"key_mark": ["kmrk", "%2"], //                              Mark key
	"key_message": ["kmsg", "%3"], //                              Message key
	"key_move": ["kmov", "%4"], //                              Move key
	"key_next": ["knxt", "%5"], //                              Next key
	"key_npage": ["knp", "kN"], //                              Next-page key
	"key_open": ["kopn", "%6"], //                              Open key
	"key_options": ["kopt", "%7"], //                              Options key
	"key_ppage": ["kpp", "kP"], //                              Previous-page key
	"key_previous": ["kprv", "%8"], //                              Previous key
	"key_print": ["kprt", "%9"], //                              Print key
	"key_redo": ["krdo", "%0"], //                              Redo key
	"key_reference": ["kref", "&1"], //                              Reference key
	"key_refresh": ["krfr", "&2"], //                              Refresh key
	"key_replace": ["krpl", "&3"], //                              Replace key
	"key_restart": ["krst", "&4"], //                              Restart key
	"key_resume": ["kres", "&5"], //                              Resume key
	"key_right": ["kcuf1", "kr"], //                              Right-arrow key
	"key_save": ["ksav", "&6"], //                              Save key
	"key_sbeg": ["kBEG", "&9"], //                              Shifted begin key
	"key_scancel": ["kCAN", "&0"], //                              Shifted cancel key
	"key_scommand": ["kCMD", "*1"], //                              Shifted command key
	"key_scopy": ["kCPY", "*2"], //                              Shifted copy key
	"key_screate": ["kCRT", "*3"], //                              Shifted create key
	"key_sdc": ["kDC", "*4"], //                              Shifted delete-char‐ acter key
	"key_sdl": ["kDL", "*5"], //                              Shifted delete-line key
	"key_select": ["kslt", "*6"], //                              Select key
	"key_send": ["kEND", "*7"], //                              Shifted end key
	"key_seol": ["kEOL", "*8"], //                              Shifted clear-to- end-of-line key
	"key_sexit": ["kEXT", "*9"], //                              Shifted exit key
	"key_sf": ["kind", "kF"], //                              Scroll-forward key
	"key_sfind": ["kFND", "*0"], //                              Shifted find key
	"key_shelp": ["kHLP", "#1"], //                              Shifted help key
	"key_shome": ["kHOM", "#2"], //                              Shifted home key
	"key_sic": ["kIC", "#3"], //                              Shifted insert-char‐ acter key
	"key_sleft": ["kLFT", "#4"], //                              Shifted left-arrow key
	"key_smessage": ["kMSG", "%a"], //                              Shifted message key
	"key_smove": ["kMOV", "%b"], //                              Shifted move key
	"key_snext": ["kNXT", "%c"], //                              Shifted next key
	"key_soptions": ["kOPT", "%d"], //                              Shifted options key
	"key_sprevious": ["kPRV", "%e"], //                              Shifted previous key
	"key_sprint": ["kPRT", "%f"], //                              Shifted print key
	"key_sr": ["kri", "kR"], //                              Scroll-backward key
	"key_sredo": ["kRDO", "%g"], //                              Shifted redo key
	"key_sreplace": ["kRPL", "%h"], //                              Shifted replace key

	"key_sright": ["kRIT", "%i"], //                              Shifted right-arrow key
	"key_srsume": ["kRES", "%j"], //                              Shifted resume key
	"key_ssave": ["kSAV", "!1"], //                              Shifted save key
	"key_ssuspend": ["kSPD", "!2"], //                              Shifted suspend key
	"key_stab": ["khts", "kT"], //                              Set-tab key
	"key_sundo": ["kUND", "!3"], //                              Shifted undo key
	"key_suspend": ["kspd", "&7"], //                              Suspend key
	"key_undo": ["kund", "&8"], //                              Undo key
	"key_up": ["kcuu1", "ku"], //                              Up-arrow key
	"keypad_local": ["rmkx", "ke"], //                              Leave 'key‐ board_transmit' mode
	"keypad_xmit": ["smkx", "ks"], //                              Enter 'key‐ board_transmit' mode
	"lab_f0": ["lf0", "l0"], //                              Label on function key f0 if not f0
	"lab_f1": ["lf1", "l1"], //                              Label on function key f1 if not f1
	"lab_f10": ["lf10", "la"], //                              Label on function key f10 if not f10
	"lab_f2": ["lf2", "l2"], //                              Label on function key f2 if not f2
	"lab_f3": ["lf3", "l3"], //                              Label on function key f3 if not f3
	"lab_f4": ["lf4", "l4"], //                              Label on function key f4 if not f4
	"lab_f5": ["lf5", "l5"], //                              Label on function key f5 if not f5
	"lab_f6": ["lf6", "l6"], //                              Label on function key f6 if not f6
	"lab_f7": ["lf7", "l7"], //                              Label on function key f7 if not f7
	"lab_f8": ["lf8", "l8"], //                              Label on function key f8 if not f8
	"lab_f9": ["lf9", "l9"], //                              Label on function key f9 if not f9
	"label_format": ["fln", "Lf"], //                              Label format
	"label_off": ["rmln", "LF"], //                              Turn off soft labels
	"label_on": ["smln", "LO"], //                              Turn on soft labels
	"meta_off": ["rmm", "mo"], //                              Turn off meta mode
	"meta_on": ["smm", "mm"], //                              Turn on meta mode (8th-bit on)
	"micro_column_address": ["mhpa", "ZY"], //                              Like column_address in micro mode
	"micro_down": ["mcud1", "ZZ"], //                              Like cursor_down in micro mode
	"micro_left": ["mcub1", "Za"], //                              Like cursor_left in micro mode
	"micro_right": ["mcuf1", "Zb"], //                              Like cursor_right in micro mode
	"micro_row_address": ["mvpa", "Zc"], //                              Like row_address #1 in micro mode
	"micro_up": ["mcuu1", "Zd"], //                              Like cursor_up in micro mode
	"newline": ["nel", "nw"], //                              Newline (behave like cr followed by lf)
	"order_of_pins": ["porder", "Ze"], //                              Match software bits to print-head pins
	"orig_colors": ["oc", "oc"], //                              Set all color pairs to the original ones
	"orig_pair": ["op", "op"], //                              Set default pair to its original value
	"pad_char": ["pad", "pc"], //                              Padding char (instead of null)


	"parm_dch": ["dch", "DC"], //                              Delete #1 characters (P*)
	"parm_delete_line": ["dl", "DL"], //                              Delete #1 lines (P*)
	"parm_down_cursor": ["cud", "DO"], //                              Down #1 lines (P*)
	"parm_down_micro": ["mcud", "Zf"], //                              Like parm_down_cur‐ sor in micro mode
	"parm_ich": ["ich", "IC"], //                              Insert #1 characters (P*)
	"parm_index": ["indn", "SF"], //                              Scroll forward #1 lines (P)
	"parm_insert_line": ["il", "AL"], //                              Insert #1 lines (P*)
	"parm_left_cursor": ["cub", "LE"], //                              Move #1 characters to the left (P)
	"parm_left_micro": ["mcub", "Zg"], //                              Like parm_left_cur‐ sor in micro mode
	"parm_right_cursor": ["cuf", "RI"], //                              Move #1 characters to the right (P*)
	"parm_right_micro": ["mcuf", "Zh"], //                              Like parm_right_cur‐ sor in micro mode
	"parm_rindex": ["rin", "SR"], //                              Scroll back #1 lines (P)
	"parm_up_cursor": ["cuu", "UP"], //                              Up #1 lines (P*)
	"parm_up_micro": ["mcuu", "Zi"], //                              Like parm_up_cursor in micro mode
	"pkey_key": ["pfkey", "pk"], //                              Program function key #1 to type string #2
	"pkey_local": ["pfloc", "pl"], //                              Program function key #1 to execute string #2
	"pkey_xmit": ["pfx", "px"], //                              Program function key #1 to transmit string #2
	"plab_norm": ["pln", "pn"], //                              Program label #1 to show string #2
	"print_screen": ["mc0", "ps"], //                              Print contents of screen
	"prtr_non": ["mc5p", "pO"], //                              Turn on printer for #1 bytes
	"prtr_off": ["mc4", "pf"], //                              Turn off printer
	"prtr_on": ["mc5", "po"], //                              Turn on printer
	"pulse": ["pulse", "PU"], //                              Select pulse dialing
	"quick_dial": ["qdial", "QD"], //                              Dial number #1 with‐ out checking
	"remove_clock": ["rmclk", "RC"], //                              Remove clock
	"repeat_char": ["rep", "rp"], //                              Repeat char #1 #2 times (P*)
	"req_for_input": ["rfi", "RF"], //                              Send next input char (for ptys)
	"reset_1string": ["rs1", "r1"], //                              Reset string
	"reset_2string": ["rs2", "r2"], //                              Reset string
	"reset_3string": ["rs3", "r3"], //                              Reset string
	"reset_file": ["rf", "rf"], //                              Name of reset file
	"restore_cursor": ["rc", "rc"], //                              Restore cursor to position of last save_cursor
	"row_address": ["vpa", "cv"], //                              Vertical position #1 absolute (P)
	"save_cursor": ["sc", "sc"], //                              Save current cursor position (P)
	"scroll_forward": ["ind", "sf"], //                              Scroll text up (P)
	"scroll_reverse": ["ri", "sr"], //                              Scroll text down (P)
	"select_char_set": ["scs", "Zj"], //                              Select character set, #1


	"set_attributes": ["sgr", "sa"], //                              Define video attributes #1-#9 (PG9)
	"set_background": ["setb", "Sb"], //                              Set background color #1
	"set_bottom_margin": ["smgb", "Zk"], //                              Set bottom margin at current line
	"set_bottom_margin_parm": ["smgbp", "Zl"], //                              Set bottom margin at line #1 or (if smgtp is not given) #2 lines from bottom
	"set_clock": ["sclk", "SC"], //                              Set clock, #1 hrs #2 mins #3 secs
	"set_color_pair": ["scp", "sp"], //                              Set current color pair to #1
	"set_foreground": ["setf", "Sf"], //                              Set foreground color #1
	"set_left_margin": ["smgl", "ML"], //                              Set left soft margin at current col‐ umn.  See smgl. (ML is not in BSD termcap).
	"set_left_margin_parm": ["smglp", "Zm"], //                              Set left (right) margin at column #1
	"set_right_margin": ["smgr", "MR"], //                              Set right soft margin at current column
	"set_right_margin_parm": ["smgrp", "Zn"], //                              Set right margin at column #1
	"set_tab": ["hts", "st"], //                              Set a tab in every row, current columns
	"set_top_margin": ["smgt", "Zo"], //                              Set top margin at current line
	"set_top_margin_parm": ["smgtp", "Zp"], //                              Set top (bottom) margin at row #1
	"set_window": ["wind", "wi"], //                              Current window is lines #1-#2 cols #3-#4
	"start_bit_image": ["sbim", "Zq"], //                              Start printing bit image graphics
	"start_char_set_def": ["scsd", "Zr"], //                              Start character set defi‐ nition #1, with #2 charac‐ ters in the set
	"stop_bit_image": ["rbim", "Zs"], //                              Stop printing bit image graphics
	"stop_char_set_def": ["rcsd", "Zt"], //                              End definition of charac‐ ter set #1
	"subscript_characters": ["subcs", "Zu"], //                              List of subscriptable characters
	"superscript_characters": ["supcs", "Zv"], //                              List of superscriptable characters
	"tab": ["ht", "ta"], //                              Tab to next 8-space hard‐ ware tab stop
	"these_cause_cr": ["docr", "Zw"], //                              Printing any of these characters causes CR
	"to_status_line": ["tsl", "ts"], //                              Move to status line, col‐ umn #1
	"tone": ["tone", "TO"], //                              Select touch tone dialing
	"underline_char": ["uc", "uc"], //                              Underline char and move past it
	"up_half_line": ["hu", "hu"], //                              Half a line up
	"user0": ["u0", "u0"], //                              User string #0
	"user1": ["u1", "u1"], //                              User string #1
	"user2": ["u2", "u2"], //                              User string #2
	"user3": ["u3", "u3"], //                              User string #3
	"user4": ["u4", "u4"], //                              User string #4
	"user5": ["u5", "u5"], //                              User string #5

	"user6": ["u6", "u6"], //                              User string #6
	"user7": ["u7", "u7"], //                              User string #7
	"user8": ["u8", "u8"], //                              User string #8
	"user9": ["u9", "u9"], //                              User string #9
	"wait_tone": ["wait", "WA"], //                              Wait for dial-tone
	"xoff_character": ["xoffc", "XF"], //                              XOFF character
	"xon_character": ["xonc", "XN"], //                              XON character
	"zero_motion": ["zerom", "Zx"], //                              No motion for subsequent character

	// The following string capabilities are present in the SVr4.0 term structure, but were originally not documented in the man page.


	/*
	 *         Variable                                      Cap-                                 TCap                                 Description
	 *          String                                       name                                 Code
	 */
	"alt_scancode_esc": ["scesa", "S8"], //                                Alternate escape for scancode emu‐ lation
	"bit_image_carriage_return": ["bicr", "Yv"], //                                Move to beginning of same row
	"bit_image_newline": ["binel", "Zz"], //                                Move to next row of the bit image
	"bit_image_repeat": ["birep", "Xy"], //                                Repeat bit image cell #1 #2 times
	"char_set_names": ["csnm", "Zy"], //                                Produce #1'th item from list of char‐ acter set names
	"code_set_init": ["csin", "ci"], //                                Init sequence for multiple codesets
	"color_names": ["colornm", "Yw"], //                                Give name for color #1
	"define_bit_image_region": ["defbi", "Yx"], //                                Define rectan‐ gualar bit image region
	"device_type": ["devt", "dv"], //                                Indicate lan‐ guage/codeset sup‐ port
	"display_pc_char": ["dispc", "S1"], //                                Display PC charac‐ ter #1
	"end_bit_image_region": ["endbi", "Yy"], //                                End a bit-image region
	"enter_pc_charset_mode": ["smpch", "S2"], //                                Enter PC character display mode
	"enter_scancode_mode": ["smsc", "S4"], //                                Enter PC scancode mode
	"exit_pc_charset_mode": ["rmpch", "S3"], //                                Exit PC character display mode
	"exit_scancode_mode": ["rmsc", "S5"], //                                Exit PC scancode mode
	"get_mouse": ["getm", "Gm"], //                                Curses should get button events, parameter #1 not documented.
	"key_mouse": ["kmous", "Km"], //                                Mouse event has occurred
	"mouse_info": ["minfo", "Mi"], //                                Mouse status information
	"pc_term_options": ["pctrm", "S6"], //                                PC terminal options
	"pkey_plab": ["pfxl", "xl"], //                                Program function key #1 to type string #2 and show string #3
	"req_mouse_pos": ["reqmp", "RQ"], //                                Request mouse position

	"scancode_escape": ["scesc", "S7"], //                                Escape for scan‐ code emulation
	"set0_des_seq": ["s0ds", "s0"], //                                Shift to codeset 0 (EUC set 0, ASCII)
	"set1_des_seq": ["s1ds", "s1"], //                                Shift to codeset 1
	"set2_des_seq": ["s2ds", "s2"], //                                Shift to codeset 2
	"set3_des_seq": ["s3ds", "s3"], //                                Shift to codeset 3
	"set_a_background": ["setab", "AB"], //                                Set background color to #1, using ANSI escape
	"set_a_foreground": ["setaf", "AF"], //                                Set foreground color to #1, using ANSI escape
	"set_color_band": ["setcolor", "Yz"], //                                Change to ribbon color #1
	"set_lr_margin": ["smglr", "ML"], //                                Set both left and right margins to #1, #2.  (ML is not in BSD term‐ cap).
	"set_page_length": ["slines", "YZ"], //                                Set page length to #1 lines
	"set_tb_margin": ["smgtb", "MT"], //                                Sets both top and bottom margins to #1, #2

	/*
	 * The XSI Curses standard added these.  They are some post-4.1 versions of System V curses, e.g., Solaris 2.5 and IRIX 6.x.  The ncurses termcap
	 * Names for them are invented; according to the XSI Curses standard, they have no termcap names.  If your compiled terminfo entries  use  these,
	 * They may not be binary-compatible with System V terminfo entries after SVr4.1; beware!
	 */


	/*
	 *         Variable                                      Cap-                               TCap                                 Description
	 *          String                                       name                               Code
	 */
	"enter_horizontal_hl_mode": ["ehhlm", "Xh"], //                               Enter horizontal highlight mode
	"enter_left_hl_mode": ["elhlm", "Xl"], //                               Enter left highlight mode
	"enter_low_hl_mode": ["elohlm", "Xo"], //                               Enter low highlight mode
	"enter_right_hl_mode": ["erhlm", "Xr"], //                               Enter right high‐ light mode
	"enter_top_hl_mode": ["ethlm", "Xt"], //                               Enter top highlight mode
	"enter_vertical_hl_mode": ["evhlm", "Xv"], //                               Enter vertical high‐ light mode
	"set_a_attributes": ["sgr1", "sA"], //                               Define second set of video attributes #1-#6
	"set_pglen_inch": ["slength", "sL"] //                               YI Set page length to #1 hundredth of an inch
};
