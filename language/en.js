
(() => {

    // This file was automatically generated.  Do not modify.
    'use strict';

    goog.require('Blockly.Lang');

    const { En } = Blockly.Lang;

    //Help text
    En.SENTRY_HELP_INIT_TOOLTIP = 'initialize the vision sensor and select the relevant address';
    En.SENTRY_HELP_SET_DEFAULT = 'sensor algorithm state returns to default';
    En.SENTRY_HELP_ZOOM = 'set the image zoom level. The higher the level, the farther the recognition distance, the smaller the recognition angle';
    En.SENTRY_HELP_LED = 'black is the off LED display. When the two colors are the same, the LED status is manual and does not change with the test results';
    En.SENTRY_HELP_GET_VISION_VALUE = 'get corresponding result of algorithm'
    En.SENTRY_HELP_DETECTED_VISION_VALUE = 'whether the target value of the algorithm is detected, return true if detected, otherwise false'

    //Warning text
    En.SENTRY_WARNING_SETUP_BASE = 'this module can only be placed in initialization module!';
    En.SENTRY_WARNING_SETUP_ONLY = 'this module can only be placed in the setting module!';
    En.SENTRY_WARNING_ON_INIT = 'do not use serial to connect sentry and the computer to print characters at the same time. This operation will cause confusion of printed characters or abnormal communication at the computer end'

    En.SENTRY_VISION_ENTERPRISE = '(Enterprise only)'
    //Set module text
    En.SENTRY2_NAME = 'Sentry2'
    En.SENTRY1_NAME = 'Sentry1'
    En.SENTRY_BEGIN = 'initialize';
    En.SENTRY_PORT = 'port';
    En.SENTRY_ADDR = 'address';
    En.SENTRY_SET_DEFAULT = 'restore default parameters';
    En.SENTRY_VISION = 'algorithm';
    En.SENTRY_STATUS = 'status';
    En.SENTRY_SET = 'Set ';
    En.SENTRY_SET_COORDINATE = 'coordinate output';
    En.SENTRY_SET_PARAMNUM = 'number of parameters';
    En.SENTRY_SET_PARAM = 'parameter';
    En.SENTRY_INDEX = 'index';
    En.SENTRY_CENTER = 'regional center';
    En.SENTRY_X = 'abscissa';
    En.SENTRY_Y = 'ordinate';
    En.SENTRY_LEAST = 'minimum detection';
    En.SENTRY_WEIGHT = 'width';
    En.SENTRY_HIGH = 'height'
    En.SENTRY_LABLE = 'label';
    En.SENTRY_LED_SET_COLOR = 'led detects that the result color is';
    En.SENTRY_LED_SET_COLOR_NOT = 'otherwise'
    En.SENTRY_LED_SET_LEVEL = 'brightness (0 ~ 15)';
    En.SENTRY_CAMERA_SET_ZOOM = 'digital zoom';
    En.SENTRY_CAMERA_SET_ROTATE = 'camera rotates 180 °';
    En.SENTRY_CAMERA_SET_AWB = 'camera white balance';
    En.SENTRY_CAMERA_SET_FPS = 'camera high frame rate mode';
    En.SENTRY_CAMERA_SET_BRIGHTNESS = 'image brightness';
    En.SENTRY_CAMERA_SET_CONTRAST = 'image contrast';
    En.SENTRY_CAMERA_SET_SATURATION = 'image saturation';
    En.SENTRY_CAMERA_SET_SHARPNESS = 'image sharpening';
    En.SENTRY_UART_SET_BAUDRATE = 'serial baud rate';
    En.SENTRY_VISION_DETECTED = 'detected';
    En.SENTRY_VISION_RESULT = 'result';
    En.SENTRY_DETECTED_NUMBER = 'quantity';
    En.SENTRY_GET_QRCODEVALUE = 'QR code recognition result string';
    En.SENTRY_DETECTED = 'algorithm detected';
    En.SENTRY_ROWS = 'image width';
    En.SENTRY_COLS = 'image height';

    // Sentry Coordinate
    En.SENTRY_ABSOLUTECOORDINATE = 'absolute coordinates';
    En.SENTRY_PERCENTAGECOORDINATE = 'relative coordinates';

    // Sentry Vision type
    En.SENTRY_VISION_VISIONCOLOR = 'color recognition';
    En.SENTRY_VISION_VISIONBLOB = 'color block detection';
    En.SENTRY_VISION_VISIONBALL = 'ball detection';
    En.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
    En.SENTRY_VISION_VISIONLINE = 'line segment detection';
    En.SENTRY_VISION_VISIONLEARNING = 'deep learning';
    En.SENTRY_VISION_VISIONCARD = 'card identification';
    En.SENTRY_VISION_VISIONFACE = 'face recognition';
    En.SENTRY_VISION_VISIONBODY = 'body detection';
    En.SENTRY_VISION_VISION20CLASSES = '20 classification and identification';
    En.SENTRY_VISION_VISIONQRCODE = 'QR code identification';
    En.SENTRY_VISION_VISIONMOTIONDETECT = 'moving object detection';
    En.SENTRY_VISION_VISIONCUSTOM = 'Custom';

    // Sentry Enable Disable
    En.SENTRY_ENABLE = 'enable';
    En.SENTRY_DISABLE = 'disable';

    // LED color type
    En.SENTRY_LED_CLOSE = 'close';
    En.SENTRY_LED_RED = 'Red';
    En.SENTRY_LED_GREEN = 'green';
    En.SENTRY_LED_YELLOW = 'yellow';
    En.SENTRY_LED_BLUE = 'Blue';
    En.SENTRY_LED_PURPLE = 'Purple';
    En.SENTRY_LED_CYAN = 'cyan';
    En.SENTRY_LED_WHITE = 'white';

    // Sentry Config Level
    En.SENTRY_LEVEL_DEFAULT = 'automatic';
    En.SENTRY_LEVEL1 = 'level 1';
    En.SENTRY_LEVEL2 = 'level 2';
    En.SENTRY_LEVEL3 = 'Level 3';
    En.SENTRY_LEVEL4 = 'level 4';
    En.SENTRY_LEVEL5 = 'level 5';
    En.SENTRY_LEVEL6 = 'level 6';
    En.SENTRY_LEVEL7 = 'level 7';
    En.SENTRY_LEVEL8 = 'level 8';
    En.SENTRY_LEVEL9 = 'level 9';
    En.SENTRY_LEVEL10 = 'level 10';

    // Sentry Zoom Type
    En.SENTRY_ZOOM_DEFAULT = 'default';
    En.SENTRY_ZOOM_LEVEL1 = 'level 1';
    En.SENTRY_ZOOM_LEVEL2 = 'level 2';
    En.SENTRY_ZOOM_LEVEL3 = 'Level 3';
    En.SENTRY_ZOOM_LEVEL4 = 'level 4';
    En.SENTRY_ZOOM_LEVEL5 = 'level 5';

    // Sentry White Balance Type
    En.SENTRY_AUTO = 'auto';
    En.SENTRY_LOCK_AWB = 'lock white balance';
    En.SENTRY_WHITE_LIGHT = 'white light mode';
    En.SENTRY_YELLOW_LIGHT = 'yellow light mode';

    // Sentry State Value Type
    En.SENTRY_STATE_VALUE_X = 'horizontal coordinate';
    En.SENTRY_STATE_VALUE_Y = 'longitudinal coordinate';
    En.SENTRY_STATE_VALUE_WIDTH = 'width';
    En.SENTRY_STATE_VALUE_HEIGHT = 'height';
    En.SENTRY_STATE_VALUE_LABEL = 'label';

    En.SENTRY_STATE_LINE_EX = 'X coordinate of end point';
    En.SENTRY_STATE_LINE_EY = 'Y coordinate of end point';
    En.SENTRY_STATE_LINE_SX = 'X coordinate of starting point';
    En.SENTRY_STATE_LINE_SY = 'Y coordinate of starting point';
    En.SENTRY_STATE_LINE_A = 'inclination angle';

    En.SENTRY_STATE_VALUE_R = 'red channel';
    En.SENTRY_STATE_VALUE_G = 'green channel';
    En.SENTRY_STATE_VALUE_B = 'blue channel';

    En.SENTRY_BALLTABLETENNIS = 'Table tennis';
    En.SENTRY_BALLTENNIS = 'Tennis';

    // Sentry Color Type
    En.SENTRY_COLOR_BLACK = 'Black';
    En.SENTRY_COLOR_WHITE = 'white';
    En.SENTRY_COLOR_RED = 'Red';
    En.SENTRY_COLOR_GREEN = 'green';
    En.SENTRY_COLOR_BLUE = 'Blue';
    En.SENTRY_COLOR_YELLOW = 'yellow';

    // Sentry 20 Class Type
    En.SENTRY_CLASS20_AIRPLANE = ' Aircraft ';
    En.SENTRY_CLASS20_BICYCLE = ' Bicycle ';
    En.SENTRY_CLASS20_BIRD = ' Bird ';
    En.SENTRY_CLASS20_BOAT = ' Ship ';
    En.SENTRY_CLASS20_BOTTLE = ' Bottle ';
    En.SENTRY_CLASS20_BUS = '  bus';
    En.SENTRY_CLASS20_CAR = ' Car ';
    En.SENTRY_CLASS20_CAT = '  Cat ';
    En.SENTRY_CLASS20_CHAIR = ' Chair ';
    En.SENTRY_CLASS20_COW = ' Cow ';
    En.SENTRY_CLASS20_TABLE = ' Table ';
    En.SENTRY_CLASS20_DOG = ' Dog ';
    En.SENTRY_CLASS20_HORSE = ' Horse ';
    En.SENTRY_CLASS20_MOTORBIKE = ' Motorcycle ';
    En.SENTRY_CLASS20_PERSON = ' Person ';
    En.SENTRY_CLASS20_PLANT = ' Plant ';
    En.SENTRY_CLASS20_SHEEP = ' Sheep ';
    En.SENTRY_CLASS20_SOFA = ' Sofa ';
    En.SENTRY_CLASS20_TRAIN = ' Train ';
    En.SENTRY_CLASS20_MONITOR = ' Display ';

    // Sentry Card Type
    En.SENTRY_CARD_TRAFFIC = "traffic card"
    En.SENTRY_CARD_FORWARD = 'forward';
    En.SENTRY_CARD_LEFT = 'left';
    En.SENTRY_CARD_RIGHT = 'right';
    En.SENTRY_CARD_TURN_AROUND = 'turn around';
    En.SENTRY_CARD_PARK = 'park';
    En.SENTRY_CARD_GREEN_LIGHT = 'green light';
    En.SENTRY_CARD_RED_LIGHT = 'red light';
    En.SENTRY_CARD_SPEED_40 = 'speed 40';
    En.SENTRY_CARD_SPEED_60 = 'speed 60';
    En.SENTRY_CARD_SPEED_80 = 'speed 80';
    En.SENTRY_CARD_SYMBOL = "symbol card"
    En.SENTRY_CARD_CHECK = 'check';
    En.SENTRY_CARD_CROSS = 'cross';
    En.SENTRY_CARD_CIRCLE = 'circle';
    En.SENTRY_CARD_SQUARE = 'Square';
    En.SENTRY_CARD_TRIANGLE = 'triangle';
    En.SENTRY_CARD_PLUS = '+';
    En.SENTRY_CARD_MINUS = '-';
    En.SENTRY_CARD_DIVIDE = '~';
    En.SENTRY_CARD_EQUAL = '=';
    En.SENTRY_CARD_NUMBER = "digital card"
    En.SENTRY_CARD_1 = '1';
    En.SENTRY_CARD_2 = '2';
    En.SENTRY_CARD_3 = '3';
    En.SENTRY_CARD_4 = '4';
    En.SENTRY_CARD_5 = '5';
    En.SENTRY_CARD_6 = '6';
    En.SENTRY_CARD_7 = '7';
    En.SENTRY_CARD_8 = '8';
    En.SENTRY_CARD_9 = '9';
    En.SENTRY_CARD_0 = '0';
    En.SENTRY_CARD_CHAR = "letter card"
    En.SENTRY_CARD_A = 'A';
    En.SENTRY_CARD_B = 'B';
    En.SENTRY_CARD_C = 'C';
    En.SENTRY_CARD_D = 'D';
    En.SENTRY_CARD_E = 'E';
    En.SENTRY_CARD_F = 'F';
    En.SENTRY_CARD_G = 'G';
    En.SENTRY_CARD_H = 'H';
    En.SENTRY_CARD_I = 'I';
    En.SENTRY_CARD_J = 'J';
    En.SENTRY_CARD_K = 'K';
    En.SENTRY_CARD_L = 'L';
    En.SENTRY_CARD_M = 'M';
    En.SENTRY_CARD_N = 'N';
    En.SENTRY_CARD_O = 'O';
    En.SENTRY_CARD_P = 'P';
    En.SENTRY_CARD_Q = 'Q';
    En.SENTRY_CARD_R = 'R';
    En.SENTRY_CARD_S = 'S';
    En.SENTRY_CARD_T = 'T';
    En.SENTRY_CARD_U = 'U';
    En.SENTRY_CARD_V = 'V';
    En.SENTRY_CARD_W = 'W';
    En.SENTRY_CARD_X = 'X';
    En.SENTRY_CARD_Y = 'Y';
    En.SENTRY_CARD_Z = 'Z';

})();
