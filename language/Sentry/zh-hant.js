'use strict';
goog. provide('Blockly.Msg.zh.hans');
goog. require('Blockly.Msg');
Blockly.Msg.CATEGORY_SENTRY_SETUP = '設定模塊';
Blockly.Msg.CATEGORY_SENTRY_RUN = '運行模塊';
// Help文字
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = '初始化視覺感測器，並選擇相關的地址';
Blockly.Msg.SENTRY_HELP_SET_DEFAULT = '感測器算灋狀態恢復默認';
Blockly.Msg.SENTRY_HELP_SET_COORDINATE = '感測器輸出坐標系設定';
Blockly.Msg.SENTRY_HELP_ZOOM = '設定影像縮放等級，等級升高，識別距離越遠，識別角度越小';
Blockly.Msg.SENTRY_HELP_LED = '黑色為關閉LED顯示，兩種顏色相同時，LED狀態為手動，不隨著檢測結果改變';
Blockly.Msg.SENTRY_HELP_GET_VISION_VALUE = '獲取算灋對應結果'
Blockly.Msg.SENTRY_HELP_DETECTED_VISION_VALUE = '是否檢測到算灋目標值，檢測到返回Ture，否則False'
// Warning文字
Blockly.Msg.SENTRY_WARNING_SETUP_BASE = '該模塊只能置於初始化模塊中！';
Blockly.Msg.SENTRY_WARNING_SETUP_ONLY = '該模塊只能置於設定模塊中！';
Blockly.Msg.SENTRY_WARNING_ON_INIT = '請勿同時使用Serial連接Sentry與電腦列印字元，此操作會導致電腦端列印字元錯亂或通信异常'
//設定模塊文字
Blockly.Msg.SENTRY_NAME = 'Sentry2'
Blockly.Msg.SENTRY_SET_UP = 'Sentry設定';
Blockly.Msg.SENTRY_BEGIN = '初始化';
Blockly.Msg.SENTRY_PORT = '埠';
Blockly.Msg.SENTRY_ADDR = '地址';
Blockly.Msg.SENTRY_SET_DEFAULT = '恢復默認參數';
Blockly.Msg.SENTRY_VISION = '算灋';
Blockly.Msg.SENTRY_STATUS = '狀態';
Blockly.Msg.SENTRY_SET = '設定';
Blockly.Msg.SENTRY_SET_COORDINATE = '座標輸出';
Blockly.Msg.SENTRY_SET_PARAMNUM = '參數個數';
Blockly.Msg.SENTRY_SET_PARAM = '參數';
Blockly.Msg.SENTRY_INDEX = '索引';
Blockly.Msg.SENTRY_CENTER = '區域中心';
Blockly.Msg.SENTRY_X = '橫坐標';
Blockly.Msg.SENTRY_Y = '縱坐標';
Blockly.Msg.SENTRY_LEAST = '最小檢測';
Blockly.Msg.SENTRY_WEIGHT = '寬度';
Blockly.Msg.SENTRY_HIGH = '高度'
Blockly.Msg.SENTRY_LABLE = '標籤';
Blockly.Msg.SENTRY_LED_SET_COLOR = 'LED檢測到結果顏色為';
Blockly.Msg.SENTRY_LED_SET_COLOR_NOT = '否則'
Blockly.Msg.SENTRY_LED_SET_LEVEL = '亮度(0~15)';
Blockly.Msg.SENTRY_CAMERA_SET_ZOOM = '数位變焦';
Blockly.Msg.SENTRY_CAMERA_SET_ROTATE = '監視器旋轉180°';
Blockly.Msg.SENTRY_CAMERA_SET_AWB = '監視器白平衡';
Blockly.Msg.SENTRY_CAMERA_SET_FPS = '監視器高幀率模式';
Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS = '影像亮度';
Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST = '影像對比度';
Blockly.Msg.SENTRY_CAMERA_SET_SATURATION = '影像飽和度';
Blockly.Msg.SENTRY_CAMERA_SET_SHAPRNESS = '影像銳化';
Blockly.Msg.SENTRY_UART_SET_BAUDRATE = '串口串列傳輸速率';
Blockly.Msg.SENTRY_VISION_DETECTED = '檢測到';
Blockly.Msg.SENTRY_VISION_RESULT = '結果';
Blockly.Msg.SENTRY_DETECTED_NUMBER = '數量';
Blockly.Msg.SENTRY_GET_QRCODEVALUE = '二維碼識別結果字串';
Blockly.Msg.SENTRY_DETECTED = '算灋檢測到';
Blockly.Msg.SENTRY_ROWS = '影像寬度';
Blockly.Msg.SENTRY_COLS = '影像高度';
// Sentry Coordinate
Blockly.Msg.SENTRY_ABSOLUTECOORDINATE = '絕對座標';
Blockly.Msg.SENTRY_PERCENTAGECOORDINATE = '相對座標';
// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = '顏色識別';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = '色塊檢測';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = '線段檢測';
Blockly.Msg.SENTRY_VISION_VISIONLEARNING = '深度學習';
Blockly.Msg.SENTRY_VISION_VISIONCARD = '卡片識別';
Blockly.Msg.SENTRY_VISION_VISIONFACE = '人臉識別';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20分類識別';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = '二維碼識別';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = '運動物體檢測';
// Sentry Enable Disable
Blockly.Msg.SENTRY_ENABLE = '啟用';
Blockly.Msg.SENTRY_DISABLE = '關閉';
// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = '關閉';
Blockly.Msg.SENTRY_LED_RED = '紅色';
Blockly.Msg.SENTRY_LED_GREEN = '綠色';
Blockly.Msg.SENTRY_LED_YELLOW = '黃色';
Blockly.Msg.SENTRY_LED_BLUE = '藍色';
Blockly.Msg.SENTRY_LED_PURPLE = '紫色';
Blockly.Msg.SENTRY_LED_CYAN = '青色';
Blockly.Msg.SENTRY_LED_WHITE = '白色';
// Sentry Config Level
Blockly.Msg.SENTRY_LEVEL_DEFAULT = '自動';
Blockly.Msg.SENTRY_LEVEL1 = '等級1';
Blockly.Msg.SENTRY_LEVEL2 = '等級2';
Blockly.Msg.SENTRY_LEVEL3 = '等級3';
Blockly.Msg.SENTRY_LEVEL4 = '等級4';
Blockly.Msg.SENTRY_LEVEL5 = '等級5';
Blockly.Msg.SENTRY_LEVEL6 = '等級6';
Blockly.Msg.SENTRY_LEVEL7 = '等級7';
Blockly.Msg.SENTRY_LEVEL8 = '等級8';
Blockly.Msg.SENTRY_LEVEL9 = '等級9';
Blockly.Msg.SENTRY_LEVEL10 = '等級10';
// Sentry Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = '默認';
Blockly.Msg.SENTRY_ZOOM_LEVEL1 = '等級1';
Blockly.Msg.SENTRY_ZOOM_LEVEL2 = '等級2';
Blockly.Msg.SENTRY_ZOOM_LEVEL3 = '等級3';
Blockly.Msg.SENTRY_ZOOM_LEVEL4 = '等級4';
Blockly.Msg.SENTRY_ZOOM_LEVEL5 = '等級5';
// Sentry White Balance Type
Blockly.Msg.SENTRY_AUTO = '自動';
Blockly.Msg.SENTRY_LOCK_AWB = '鎖定白平衡';
Blockly.Msg.SENTRY_WHITE_LIGHT = '白光模式';
Blockly.Msg.SENTRY_YELLOW_LIGHT = '黃光模式';
// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = '橫向座標';
Blockly.Msg.SENTRY_STATE_VALUE_Y = '縱向座標';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = '寬度';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = '標籤';
Blockly.Msg.SENTRY_STATE_VALUE_R = '紅色通道';
Blockly.Msg.SENTRY_STATE_VALUE_G = '綠色通道';
Blockly.Msg.SENTRY_STATE_VALUE_B = '藍色通道';
// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = '黑色';
Blockly.Msg.SENTRY_COLOR_WHITE = '白色';
Blockly.Msg.SENTRY_COLOR_RED = '紅色';
Blockly.Msg.SENTRY_COLOR_GREEN = '綠色';
Blockly.Msg.SENTRY_COLOR_BLUE = '藍色';
Blockly.Msg.SENTRY_COLOR_YELLOW = '黃色';
// Sentry 20 Class Type
// Sentry 20 Class Type
Blockly.Msg.SENTRY_CLASS20_AIRPLANE = ' ✈️  飛機';
Blockly.Msg.SENTRY_CLASS20_BICYCLE = ' 🚲  自行車';
Blockly.Msg.SENTRY_CLASS20_BIRD = ' 🐦  鳥';
Blockly.Msg.SENTRY_CLASS20_BOAT = ' 🚤  船';
Blockly.Msg.SENTRY_CLASS20_BOTTLE = ' 🍾  瓶子';
Blockly.Msg.SENTRY_CLASS20_BUS = ' 🚌  公交車';
Blockly.Msg.SENTRY_CLASS20_CAR = ' 🚗  小汽車';
Blockly.Msg.SENTRY_CLASS20_CAT = ' 🐱  猫';
Blockly.Msg.SENTRY_CLASS20_CHAIR = ' 🪑  椅子';
Blockly.Msg.SENTRY_CLASS20_COW = ' 🐄  奶牛';
Blockly.Msg.SENTRY_CLASS20_TABLE = ' 🔲  桌子';
Blockly.Msg.SENTRY_CLASS20_DOG = ' 🐕  狗';
Blockly.Msg.SENTRY_CLASS20_HORSE = ' 🐎  馬';
Blockly.Msg.SENTRY_CLASS20_MOTORBIKE = ' 🏍️  機車';
Blockly.Msg.SENTRY_CLASS20_PERSON = ' 🤵  人';
Blockly.Msg.SENTRY_CLASS20_PLANT = ' 🪴  植物';
Blockly.Msg.SENTRY_CLASS20_SHEEP = ' 🐏  羊';
Blockly.Msg.SENTRY_CLASS20_SOFA = ' 🛋  沙發';
Blockly.Msg.SENTRY_CLASS20_TRAIN = ' 🚆  火車';
Blockly.Msg.SENTRY_CLASS20_MONITOR = ' 🖥️  顯示器';
// Sentry Card Type
Blockly.Msg.SENTRY_CARD_TRAFFIC ='交通卡片'
Blockly.Msg.SENTRY_CARD_FORWARD = '前進';
Blockly.Msg.SENTRY_CARD_LEFT = '左';
Blockly.Msg.SENTRY_CARD_RIGHT = '右';
Blockly.Msg.SENTRY_CARD_TURN_AROUND = '掉頭';
Blockly.Msg.SENTRY_CARD_PARK = '暫停';
Blockly.Msg.SENTRY_CARD_GREEN_LIGHT = '綠燈';
Blockly.Msg.SENTRY_CARD_RED_LIGHT = '紅燈';
Blockly.Msg.SENTRY_CARD_SPEED_40 = '速度40';
Blockly.Msg.SENTRY_CARD_SPEED_60 = '速度60';
Blockly.Msg.SENTRY_CARD_SPEED_80 = '速度80';
Blockly.Msg.SENTRY_CARD_SYMBOL ='符號卡片'
Blockly.Msg.SENTRY_CARD_CHECK = '叉號';
Blockly.Msg.SENTRY_CARD_CROSS = '十字';
Blockly.Msg.SENTRY_CARD_CIRCLE = '圓圈';
Blockly.Msg.SENTRY_CARD_SQUARE = '正方形';
Blockly.Msg.SENTRY_CARD_TRIANGLE = '三角形';
Blockly.Msg.SENTRY_CARD_PLUS = '+';
Blockly.Msg.SENTRY_CARD_MINUS = '-';
Blockly.Msg.SENTRY_CARD_DIVIDE = '~';
Blockly.Msg.SENTRY_CARD_EQUAL = '=';
Blockly.Msg.SENTRY_CARD_NUMBER ='數位卡片'
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
Blockly.Msg.SENTRY_CARD_CHAR ='字母卡片'
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
