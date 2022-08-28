'use strict';
goog. provide('Blockly.Msg.zh.hans');
goog. require('Blockly.Msg');

Blockly.Msg.CATEGORY_SENTRY_Setup = 'setting module';
Blockly.Msg.CATEGORY_SENTRY_RUN = 'running module';

//Help text
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = 'initialize the vision sensor and select the relevant address';
Blockly.Msg.SENTRY_HELP_SET_DEFAULT = 'sensor algorithm state returns to default';
Blockly.Msg.SENTRY_HELP_SET_COORDINATE = 'sensor output coordinate system setting';
Blockly.Msg.SENTRY_HELP_ZOOM = 'set the image zoom level. The higher the level, the farther the recognition distance, the smaller the recognition angle';
Blockly.Msg.SENTRY_HELP_LED = 'black is the off LED display. When the two colors are the same, the LED status is manual and does not change with the test results';
Blockly.Msg.SENTRY_HELP_GET_VISION_VALUE = 'get corresponding result of algorithm'
Blockly.Msg.SENTRY_HELP_DETECTED_VISION_VALUE = 'whether the target value of the algorithm is detected, return true if detected, otherwise false'

//Warning text
Blockly.Msg.SENTRY_WARNING_SETUP_BASE = 'this module can only be placed in initialization module!';
Blockly.Msg.SENTRY_WARNING_SETUP_ONLY = 'this module can only be placed in the setting module!';
Blockly.Msg.SENTRY_WARNING_ON_INIT = 'do not use serial to connect sentry and the computer to print characters at the same time. This operation will cause confusion of printed characters or abnormal communication at the computer end'

//Set module text
Blockly.Msg.SENTRY2_NAME  = 'Sentry2'
Blockly.Msg.SENTRY1_NAME  = 'Sentry1'
Blockly.Msg.SENTRY_BEGIN = 'initialize';
Blockly.Msg.SENTRY_PORT = 'port';
Blockly.Msg.SENTRY_ADDR = 'address';
Blockly.Msg.SENTRY_SET_DEFAULT = 'restore default parameters';
Blockly.Msg.SENTRY_VISION = 'algorithm';
Blockly.Msg.SENTRY_STATUS = 'status';
Blockly.Msg.SENTRY_SET = 'Set ';
Blockly.Msg.SENTRY_SET_COORDINATE = 'coordinate output';
Blockly.Msg.SENTRY_SET_PARAMNUM = 'number of parameters';
Blockly.Msg.SENTRY_SET_PARAM = 'parameter';
Blockly.Msg.SENTRY_INDEX = 'index';
Blockly.Msg.SENTRY_CENTER = 'regional center';
Blockly.Msg.SENTRY_X = 'abscissa';
Blockly.Msg.SENTRY_Y = 'ordinate';
Blockly.Msg.SENTRY_LEAST = 'minimum detection';
Blockly.Msg.SENTRY_WEIGHT = 'width';
Blockly.Msg.SENTRY_HIGH = 'height'
Blockly.Msg.SENTRY_LABLE = 'label';
Blockly.Msg.SENTRY_LED_SET_COLOR = 'led detects that the result color is';
Blockly.Msg.SENTRY_LED_SET_COLOR_NOT = 'otherwise'
Blockly.Msg.SENTRY_LED_SET_LEVEL = 'brightness (0 ~ 15)';
Blockly.Msg.SENTRY_CAMERA_SET_ZOOM = 'digital zoom';
Blockly.Msg.SENTRY_CAMERA_SET_ROTATE = 'camera rotates 180 °';
Blockly.Msg.SENTRY_CAMERA_SET_AWB = 'camera white balance';
Blockly.Msg.SENTRY_CAMERA_SET_FPS = 'camera high frame rate mode';
Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS = 'image brightness';
Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST = 'image contrast';
Blockly.Msg.SENTRY_CAMERA_SET_SATURATION = 'image saturation';
Blockly.Msg.SENTRY_CAMERA_SET_SHARPNESS = 'image sharpening';
Blockly.Msg.SENTRY_UART_SET_BAUDRATE = 'serial baud rate';
Blockly.Msg.SENTRY_VISION_DETECTED = 'detected';
Blockly.Msg.SENTRY_VISION_RESULT = 'result';
Blockly.Msg.SENTRY_DETECTED_NUMBER = 'quantity';
Blockly.Msg.SENTRY_GET_QRCODEVALUE = 'QR code recognition result string';
Blockly.Msg.SENTRY_DETECTED = 'algorithm detected';
Blockly.Msg.SENTRY_ROWS = 'image width';
Blockly.Msg.SENTRY_COLS = 'image height';
// Sentry Coordinate
Blockly.Msg.SENTRY_ABSOLUTECOORDINATE = 'absolute coordinates';
Blockly.Msg.SENTRY_PERCENTAGECOORDINATE = 'relative coordinates';
// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = 'color recognition';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = 'color block detection';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = 'line segment detection';
Blockly.Msg.SENTRY_VISION_VISIONLEARNING = 'deep learning';
Blockly.Msg.SENTRY_VISION_VISIONCARD = 'card identification';
Blockly.Msg.SENTRY_VISION_VISIONFACE = 'face recognition';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20 classification and identification';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = 'QR code identification';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = 'moving object detection';
// Sentry Enable Disable
Blockly.Msg.SENTRY_ENABLE = 'enable';
Blockly.Msg.SENTRY_DISABLE = 'off';
// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = 'close';
Blockly.Msg.SENTRY_LED_RED = 'Red';
Blockly.Msg.SENTRY_LED_GREEN = 'green';
Blockly.Msg.SENTRY_LED_YELLOW = 'yellow';
Blockly.Msg.SENTRY_LED_BLUE = 'Blue';
Blockly.Msg.SENTRY_LED_PURPLE = 'Purple';
Blockly.Msg.SENTRY_LED_CYAN = 'cyan';
Blockly.Msg.SENTRY_LED_WHITE = 'white';
// Sentry Config Level
Blockly.Msg.SENTRY_LEVEL_DEFAULT = 'automatic';
Blockly.Msg.SENTRY_LEVEL1 = 'level 1';
Blockly.Msg.SENTRY_LEVEL2 = 'level 2';
Blockly.Msg.SENTRY_LEVEL3 = 'Level 3';
Blockly.Msg.SENTRY_LEVEL4 = 'level 4';
Blockly.Msg.SENTRY_LEVEL5 = 'level 5';
Blockly.Msg.SENTRY_LEVEL6 = 'level 6';
Blockly.Msg.SENTRY_LEVEL7 = 'level 7';
Blockly.Msg.SENTRY_LEVEL8 = 'level 8';
Blockly.Msg.SENTRY_LEVEL9 = 'level 9';
Blockly.Msg.SENTRY_LEVEL10 = 'level 10';
// Sentry Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = 'default';
Blockly.Msg.SENTRY_ZOOM_LEVEL1 = 'level 1';
Blockly.Msg.SENTRY_ZOOM_LEVEL2 = 'level 2';
Blockly.Msg.SENTRY_ZOOM_LEVEL3 = 'Level 3';
Blockly.Msg.SENTRY_ZOOM_LEVEL4 = 'level 4';
Blockly.Msg.SENTRY_ZOOM_LEVEL5 = 'level 5';
// Sentry White Balance Type
Blockly.Msg.SENTRY_AUTO = 'auto';
Blockly.Msg.SENTRY_LOCK_AWB = 'lock white balance';
Blockly.Msg.SENTRY_WHITE_LIGHT = 'white light mode';
Blockly.Msg.SENTRY_YELLOW_LIGHT = 'yellow light mode';
// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = 'horizontal coordinate';
Blockly.Msg.SENTRY_STATE_VALUE_Y = 'longitudinal coordinate';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = 'width';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = 'height';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = 'label';
Blockly.Msg.SENTRY_STATE_VALUE_R = 'red channel';
Blockly.Msg.SENTRY_STATE_VALUE_G = 'green channel';
Blockly.Msg.SENTRY_STATE_VALUE_B = 'blue channel';
// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = 'Black';
Blockly.Msg.SENTRY_COLOR_WHITE = 'white';
Blockly.Msg.SENTRY_COLOR_RED = 'Red';
Blockly.Msg.SENTRY_COLOR_GREEN = 'green';
Blockly.Msg.SENTRY_COLOR_BLUE = 'Blue';
Blockly.Msg.SENTRY_COLOR_YELLOW = 'yellow';
// Sentry 20 Class Type

// Sentry 20 Class Type
Blockly.Msg.SENTRY_CLASS20_AIRPLANE = ' ✈️  Aircraft ';
Blockly.Msg.SENTRY_CLASS20_BICYCLE = ' 🚲  Bicycle ';
Blockly.Msg.SENTRY_CLASS20_BIRD = ' 🐦  Bird ';
Blockly.Msg.SENTRY_CLASS20_BOAT = ' 🚤  Ship ';
Blockly.Msg.SENTRY_CLASS20_BOTTLE = ' 🍾  Bottle ';
Blockly.Msg.SENTRY_CLASS20_BUS = '  🚌  bus';
Blockly.Msg.SENTRY_CLASS20_CAR = ' 🚗  Car ';
Blockly.Msg.SENTRY_CLASS20_CAT = '  🐱  Cat ';
Blockly.Msg.SENTRY_CLASS20_CHAIR = ' 🪑  Chair ';
Blockly.Msg.SENTRY_CLASS20_COW = ' 🐄  Cow ';
Blockly.Msg.SENTRY_CLASS20_TABLE = ' 🔲  Table ';
Blockly.Msg.SENTRY_CLASS20_DOG = ' 🐕  Dog ';
Blockly.Msg.SENTRY_CLASS20_HORSE = ' 🐎  Horse ';
Blockly.Msg.SENTRY_CLASS20_MOTORBIKE = ' 🏍️  Motorcycle ';
Blockly.Msg.SENTRY_CLASS20_PERSON = ' 🤵  Person ';
Blockly.Msg.SENTRY_CLASS20_PLANT = ' 🪴  Plant ';
Blockly.Msg.SENTRY_CLASS20_SHEEP = ' 🐏  Sheep ';
Blockly.Msg.SENTRY_CLASS20_SOFA = ' 🛋  Sofa ';
Blockly.Msg.SENTRY_CLASS20_TRAIN = ' 🚆  Train ';
Blockly.Msg.SENTRY_CLASS20_MONITOR = ' 🖥️  Display ';
// Sentry Card Type
Blockly.Msg.SENTRY_CARD_TRAFFIC = "traffic card"
Blockly.Msg.SENTRY_CARD_FORWARD = 'forward';
Blockly.Msg.SENTRY_CARD_LEFT = 'left';
Blockly.Msg.SENTRY_CARD_RIGHT = 'right';
Blockly.Msg.SENTRY_CARD_TURN_AROUND = 'turn around';
Blockly.Msg.SENTRY_CARD_PARK = 'park';
Blockly.Msg.SENTRY_CARD_GREEN_LIGHT = 'green light';
Blockly.Msg.SENTRY_CARD_RED_LIGHT = 'red light';
Blockly.Msg.SENTRY_CARD_SPEED_40 = 'speed 40';
Blockly.Msg.SENTRY_CARD_SPEED_60 = 'speed 60';
Blockly.Msg.SENTRY_CARD_SPEED_80 = 'speed 80';
Blockly.Msg.SENTRY_CARD_SYMBOL = "symbol card"
Blockly.Msg.SENTRY_CARD_CHECK = 'check';
Blockly.Msg.SENTRY_CARD_CROSS = 'cross';
Blockly.Msg.SENTRY_CARD_CIRCLE = 'circle';
Blockly.Msg.SENTRY_CARD_SQUARE = 'Square';
Blockly.Msg.SENTRY_CARD_TRIANGLE = 'triangle';
Blockly.Msg.SENTRY_CARD_PLUS = '+';
Blockly.Msg.SENTRY_CARD_MINUS = '-';
Blockly.Msg.SENTRY_CARD_DIVIDE = '~';
Blockly.Msg.SENTRY_CARD_EQUAL = '=';
Blockly.Msg.SENTRY_CARD_NUMBER = "digital card"
Blockly.Msg.SENTRY_CARD_1 = '1';
Blockly.Msg.SENTRY_CARD_2 = '2';
Blockly.Msg.SENTRY_CARD_3 = '3';
Blockly.Msg.SENTRY_CARD_4 = '4';
Blockly.Msg.SENTRY_CARD_5 = '5';
Blockly.Msg.SENTRY_CARD_6 = '6';
Blockly.Msg.SENTRY_CARD_7 = '7';
Blockly.Msg.SENTRY_CARD_8 = '8';
Blockly.Msg.SENTRY_CARD_9 = '9';
Blockly.Msg.SENTRY_CARD_0 = '0';
Blockly.Msg.SENTRY_CARD_CHAR = "letter card"
Blockly.Msg.SENTRY_CARD_A = 'A';
Blockly.Msg.SENTRY_CARD_B = 'B';
Blockly.Msg.SENTRY_CARD_C = 'C';
Blockly.Msg.SENTRY_CARD_D = 'D';
Blockly.Msg.SENTRY_CARD_E = 'E';
Blockly.Msg.SENTRY_CARD_F = 'F';
Blockly.Msg.SENTRY_CARD_G = 'G';
Blockly.Msg.SENTRY_CARD_H = 'H';
Blockly.Msg.SENTRY_CARD_I = 'I';
Blockly.Msg.SENTRY_CARD_J = 'J';
Blockly.Msg.SENTRY_CARD_K = 'K';
Blockly.Msg.SENTRY_CARD_L = 'L';
Blockly.Msg.SENTRY_CARD_M = 'M';
Blockly.Msg.SENTRY_CARD_N = 'N';
Blockly.Msg.SENTRY_CARD_O = 'O';
Blockly.Msg.SENTRY_CARD_P = 'P';
Blockly.Msg.SENTRY_CARD_Q = 'Q';
Blockly.Msg.SENTRY_CARD_R = 'R';
Blockly.Msg.SENTRY_CARD_S = 'S';
Blockly.Msg.SENTRY_CARD_T = 'T';
Blockly.Msg.SENTRY_CARD_U = 'U';
Blockly.Msg.SENTRY_CARD_V = 'V';
Blockly.Msg.SENTRY_CARD_W = 'W';
Blockly.Msg.SENTRY_CARD_X = 'X';
Blockly.Msg.SENTRY_CARD_Y = 'Y';
Blockly.Msg.SENTRY_CARD_Z = 'Z';
