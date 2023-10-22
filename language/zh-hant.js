(() => {

    // This file was automatically generated. Do not modify. 
    'use strict';

    goog.require('Blockly.Lang');

    const { ZhHant } = Blockly.Lang;

    ZhHant.CATEGORY_SENTRY_SETUP = '設置模塊';
    ZhHant.CATEGORY_SENTRY_RUN = '運行模塊';

    // Help文本
    ZhHant.SENTRY_HELP_INIT_TOOLTIP = '初始化視覺傳感器，並選擇相關的地址';
    ZhHant.SENTRY_HELP_SET_DEFAULT = '傳感器算法狀態恢復默認';

    ZhHant.SENTRY_HELP_ZOOM = '設置圖像縮放等級，等級升高，識別距離越遠，識別角度越小';
    ZhHant.SENTRY_HELP_LED = '黑色為關閉LED顯示，兩種顏色相同時,LED狀態為手動，不隨著檢測結果改變';
    ZhHant.SENTRY_HELP_GET_VISION_VALUE = '獲取算法對應結果'
    ZhHant.SENTRY_HELP_DETECTED_VISION_VALUE = '是否檢測到算法目標值，檢測到返回Ture，否則False'

    // Warning文本
    ZhHant.SENTRY_WARNING_SETUP_BASE = '該模塊只能置於初始化模塊中！';
    ZhHant.SENTRY_WARNING_SETUP_ONLY = '該模塊只能置於設置模塊中！';
    ZhHant.SENTRY_WARNING_ON_INIT = '請勿同時使用Serial連接Sentry與電腦打印字符，此操作會導致電腦端打印字符錯亂或通信異常'

    ZhHant.SENTRY_VISION_ENTERPRISE = '(僅企業版)'

    // 設置模塊文本
    ZhHant.SENTRY2_NAME = 'Sentry2'
    ZhHant.SENTRY1_NAME = 'Sentry1'
    ZhHant.SENTRY_BEGIN = '初始化';
    ZhHant.SENTRY_PORT = '端口';
    ZhHant.SENTRY_ADDR = '地址';
    ZhHant.SENTRY_SET_DEFAULT = ' 恢復默認參數';
    ZhHant.SENTRY_VISION = '算法';
    ZhHant.SENTRY_STATUS = '狀態';
    ZhHant.SENTRY_SET = '設置 ';
    ZhHant.SENTRY_SET_COORDINATE = '坐標輸出';
    ZhHant.SENTRY_SET_PARAMNUM = '參數個數';
    ZhHant.SENTRY_SET_PARAM = '參數';
    ZhHant.SENTRY_INDEX = '索引';
    ZhHant.SENTRY_CENTER = '區域中心';
    ZhHant.SENTRY_X = '橫坐標';
    ZhHant.SENTRY_Y = '縱坐標';
    ZhHant.SENTRY_LEAST = '最小檢測';
    ZhHant.SENTRY_WEIGHT = '寬度';
    ZhHant.SENTRY_HIGH = '高度'
    ZhHant.SENTRY_LABLE = '標簽';
    ZhHant.SENTRY_LED_SET_COLOR = 'LED檢測到結果顏色為';
    ZhHant.SENTRY_LED_SET_COLOR_NOT = '否則'
    ZhHant.SENTRY_LED_SET_LEVEL = '亮度(0~15)';
    ZhHant.SENTRY_CAMERA_SET_ZOOM = '數碼變焦';
    ZhHant.SENTRY_CAMERA_SET_ROTATE = '攝像頭旋轉180°';
    ZhHant.SENTRY_CAMERA_SET_AWB = '攝像頭白平衡';
    ZhHant.SENTRY_CAMERA_SET_FPS = '攝像頭高幀率模式';
    ZhHant.SENTRY_CAMERA_SET_BRIGHTNESS = '圖像亮度';
    ZhHant.SENTRY_CAMERA_SET_CONTRAST = '圖像對比度';
    ZhHant.SENTRY_CAMERA_SET_SATURATION = '圖像飽和度';
    ZhHant.SENTRY_CAMERA_SET_SHAPRNESS = '圖像銳化';
    ZhHant.SENTRY_UART_SET_BAUDRATE = '串口波特率';
    ZhHant.SENTRY_VISION_DETECTED = '檢測到';
    ZhHant.SENTRY_VISION_RESULT = '結果';
    ZhHant.SENTRY_DETECTED_NUMBER = '數量';
    ZhHant.SENTRY_GET_QRCODEVALUE = '二維碼識別結果字符串';
    ZhHant.SENTRY_DETECTED = '算法檢測到';
    ZhHant.SENTRY_ROWS = '圖像寬度';
    ZhHant.SENTRY_COLS = '圖像高度';

    // Sentry Coordinate
    ZhHant.SENTRY_ABSOLUTECOORDINATE = '絕對坐標';
    ZhHant.SENTRY_PERCENTAGECOORDINATE = '相對坐標';

    // Sentry Vision type
    ZhHant.SENTRY_VISION_VISIONCOLOR = '顏色識別';
    ZhHant.SENTRY_VISION_VISIONBLOB = '色塊檢測';
    ZhHant.SENTRY_VISION_VISIONBALL = '球體檢測';
    ZhHant.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
    ZhHant.SENTRY_VISION_VISIONLINE = '線段檢測';
    ZhHant.SENTRY_VISION_VISIONLEARNING = '深度學習';
    ZhHant.SENTRY_VISION_VISIONCARD = '卡片識別';
    ZhHant.SENTRY_VISION_VISIONFACE = '人臉識別';
    ZhHant.SENTRY_VISION_VISIONBODY = '人體檢測';
    ZhHant.SENTRY_VISION_VISION20CLASSES = '20分類識別';
    ZhHant.SENTRY_VISION_VISIONQRCODE = '二維碼識別';
    ZhHant.SENTRY_VISION_VISIONMOTIONDETECT = '運動物體檢測';

    // Sentry Enable Disable
    ZhHant.SENTRY_ENABLE = '啟用';
    ZhHant.SENTRY_DISABLE = '關閉';

    // LED color type
    ZhHant.SENTRY_LED_CLOSE = '關閉';
    ZhHant.SENTRY_LED_RED = '紅色';
    ZhHant.SENTRY_LED_GREEN = '綠色';
    ZhHant.SENTRY_LED_YELLOW = '黃色';
    ZhHant.SENTRY_LED_BLUE = '藍色';
    ZhHant.SENTRY_LED_PURPLE = '紫色';
    ZhHant.SENTRY_LED_CYAN = '青色';
    ZhHant.SENTRY_LED_WHITE = '白色';

    // Sentry Config Level
    ZhHant.SENTRY_LEVEL_DEFAULT = '自動';
    ZhHant.SENTRY_LEVEL1 = '等級1';
    ZhHant.SENTRY_LEVEL2 = '等級2';
    ZhHant.SENTRY_LEVEL3 = '等級3';
    ZhHant.SENTRY_LEVEL4 = '等級4';
    ZhHant.SENTRY_LEVEL5 = '等級5';
    ZhHant.SENTRY_LEVEL6 = '等級6';
    ZhHant.SENTRY_LEVEL7 = '等級7';
    ZhHant.SENTRY_LEVEL8 = '等級8';
    ZhHant.SENTRY_LEVEL9 = '等級9';
    ZhHant.SENTRY_LEVEL10 = '等級10';

    // Sentry Zoom Type
    ZhHant.SENTRY_ZOOM_DEFAULT = '默認';
    ZhHant.SENTRY_ZOOM_LEVEL1 = '等級1';
    ZhHant.SENTRY_ZOOM_LEVEL2 = '等級2';
    ZhHant.SENTRY_ZOOM_LEVEL3 = '等級3';
    ZhHant.SENTRY_ZOOM_LEVEL4 = '等級4';
    ZhHant.SENTRY_ZOOM_LEVEL5 = '等級5';

    // Sentry White Balance Type
    ZhHant.SENTRY_AUTO = '自動';
    ZhHant.SENTRY_LOCK_AWB = '鎖定白平衡';
    ZhHant.SENTRY_WHITE_LIGHT = '白光模式';
    ZhHant.SENTRY_YELLOW_LIGHT = '黃光模式';

    // Sentry State Value Type
    ZhHant.SENTRY_STATE_VALUE_X = '橫向坐標';
    ZhHant.SENTRY_STATE_VALUE_Y = '縱向坐標';
    ZhHant.SENTRY_STATE_VALUE_WIDTH = '寬度';
    ZhHant.SENTRY_STATE_VALUE_HEIGHT = '高度';
    ZhHant.SENTRY_STATE_VALUE_LABEL = '標簽';

    ZhHant.SENTRY_STATE_LINE_EX = '線段終點X坐標';
    ZhHant.SENTRY_STATE_LINE_EY = '線段終點Y坐標';
    ZhHant.SENTRY_STATE_LINE_SX = '線段起點X坐標';
    ZhHant.SENTRY_STATE_LINE_SY = '線段起點Y坐標';
    ZhHant.SENTRY_STATE_LINE_A = '線段的傾斜角度';

    ZhHant.SENTRY_STATE_VALUE_R = '紅色通道';
    ZhHant.SENTRY_STATE_VALUE_G = '綠色通道';
    ZhHant.SENTRY_STATE_VALUE_B = '藍色通道';

    ZhHant.SENTRY_BALLTABLETENNIS = '乒乓球';
    ZhHant.SENTRY_BALLTENNIS = '網球';

    // Sentry Color Type
    ZhHant.SENTRY_COLOR_BLACK = '黑色';
    ZhHant.SENTRY_COLOR_WHITE = '白色';
    ZhHant.SENTRY_COLOR_RED = '紅色';
    ZhHant.SENTRY_COLOR_GREEN = '綠色';
    ZhHant.SENTRY_COLOR_BLUE = '藍色';
    ZhHant.SENTRY_COLOR_YELLOW = '黃色';

    // Sentry 20 Class Type
    ZhHant.SENTRY_CLASS20_AIRPLANE = '飛機';
    ZhHant.SENTRY_CLASS20_BICYCLE = '自行車';
    ZhHant.SENTRY_CLASS20_BIRD = '鳥';
    ZhHant.SENTRY_CLASS20_BOAT = '船';
    ZhHant.SENTRY_CLASS20_BOTTLE = '瓶子';
    ZhHant.SENTRY_CLASS20_BUS = ' 公交車';
    ZhHant.SENTRY_CLASS20_CAR = '小汽車';
    ZhHant.SENTRY_CLASS20_CAT = ' 貓';
    ZhHant.SENTRY_CLASS20_CHAIR = '椅子';
    ZhHant.SENTRY_CLASS20_COW = '奶牛';
    ZhHant.SENTRY_CLASS20_TABLE = '桌子';
    ZhHant.SENTRY_CLASS20_DOG = '狗';
    ZhHant.SENTRY_CLASS20_HORSE = '馬';
    ZhHant.SENTRY_CLASS20_MOTORBIKE = '摩托車';
    ZhHant.SENTRY_CLASS20_PERSON = '人';
    ZhHant.SENTRY_CLASS20_PLANT = '植物';
    ZhHant.SENTRY_CLASS20_SHEEP = '羊';
    ZhHant.SENTRY_CLASS20_SOFA = '沙發';
    ZhHant.SENTRY_CLASS20_TRAIN = '火車';
    ZhHant.SENTRY_CLASS20_MONITOR = '顯示器';

    // Sentry Card Type
    ZhHant.SENTRY_CARD_TRAFFIC = "交通卡片"
    ZhHant.SENTRY_CARD_FORWARD = '前進';
    ZhHant.SENTRY_CARD_LEFT = '左';
    ZhHant.SENTRY_CARD_RIGHT = '右';
    ZhHant.SENTRY_CARD_TURN_AROUND = '掉頭';
    ZhHant.SENTRY_CARD_PARK = '暫停';
    ZhHant.SENTRY_CARD_GREEN_LIGHT = '綠燈';
    ZhHant.SENTRY_CARD_RED_LIGHT = '紅燈';
    ZhHant.SENTRY_CARD_SPEED_40 = '速度40';
    ZhHant.SENTRY_CARD_SPEED_60 = '速度60';
    ZhHant.SENTRY_CARD_SPEED_80 = '速度80';
    ZhHant.SENTRY_CARD_SYMBOL = "符號卡片"
    ZhHant.SENTRY_CARD_CHECK = '叉號';
    ZhHant.SENTRY_CARD_CROSS = '十字';
    ZhHant.SENTRY_CARD_CIRCLE = '圓圈';
    ZhHant.SENTRY_CARD_SQUARE = '正方形';
    ZhHant.SENTRY_CARD_TRIANGLE = '三角形';
    ZhHant.SENTRY_CARD_PLUS = '+';
    ZhHant.SENTRY_CARD_MINUS = '-';
    ZhHant.SENTRY_CARD_DIVIDE = '~';
    ZhHant.SENTRY_CARD_EQUAL = '=';
    ZhHant.SENTRY_CARD_NUMBER = "數字卡片"
    ZhHant.SENTRY_CARD_1 = '1';
    ZhHant.SENTRY_CARD_2 = '2';
    ZhHant.SENTRY_CARD_3 = '3';
    ZhHant.SENTRY_CARD_4 = '4';
    ZhHant.SENTRY_CARD_5 = '5';
    ZhHant.SENTRY_CARD_6 = '6';
    ZhHant.SENTRY_CARD_7 = '7';
    ZhHant.SENTRY_CARD_8 = '8';
    ZhHant.SENTRY_CARD_9 = '9';
    ZhHant.SENTRY_CARD_0 = '0';
    ZhHant.SENTRY_CARD_CHAR = "字母卡片"
    ZhHant.SENTRY_CARD_A = 'A';
    ZhHant.SENTRY_CARD_B = 'B';
    ZhHant.SENTRY_CARD_C = 'C';
    ZhHant.SENTRY_CARD_D = 'D';
    ZhHant.SENTRY_CARD_E = 'E';
    ZhHant.SENTRY_CARD_F = 'F';
    ZhHant.SENTRY_CARD_G = 'G';
    ZhHant.SENTRY_CARD_H = 'H';
    ZhHant.SENTRY_CARD_I = 'I';
    ZhHant.SENTRY_CARD_J = 'J';
    ZhHant.SENTRY_CARD_K = 'K';
    ZhHant.SENTRY_CARD_L = 'L';
    ZhHant.SENTRY_CARD_M = 'M';
    ZhHant.SENTRY_CARD_N = 'N';
    ZhHant.SENTRY_CARD_O = 'O';
    ZhHant.SENTRY_CARD_P = 'P';
    ZhHant.SENTRY_CARD_Q = 'Q';
    ZhHant.SENTRY_CARD_R = 'R';
    ZhHant.SENTRY_CARD_S = 'S';
    ZhHant.SENTRY_CARD_T = 'T';
    ZhHant.SENTRY_CARD_U = 'U';
    ZhHant.SENTRY_CARD_V = 'V';
    ZhHant.SENTRY_CARD_W = 'W';
    ZhHant.SENTRY_CARD_X = 'X';
    ZhHant.SENTRY_CARD_Y = 'Y';
    ZhHant.SENTRY_CARD_Z = 'Z';

    En.MSG.Sentry1_Setup = '設置模塊';
    En.MSG.Sentry1_Run = '運行模塊';
    En.MSG.Sentry1_example = '算法示例'; 

    En.MSG.Sentry1_example_Blod = '色塊檢測';
    En.MSG.Sentry1_example_Color = '顏色識別';
    En.MSG.Sentry1_example_ball = '球體檢測'; 
    En.MSG.Sentry1_example_Line = '線段檢測';
    En.MSG.Sentry1_example_Card = '卡片識別';
    En.MSG.Sentry1_example_body = '人體檢測'; 

    En.MSG.Sentry2_Setup = '設置模塊';
    En.MSG.Sentry2_Run = '運行模塊';
    En.MSG.Sentry2_example = '算法示例'; 
    
    En.MSG.Sentry_example_Blod = '色塊檢測';
    En.MSG.Sentry_example_Color = '顏色識別';
    En.MSG.Sentry_example_AprilTag = 'AprilTag'; 
    En.MSG.Sentry_example_Line = '線段檢測';
    En.MSG.Sentry_example_Learning = '深度學習';
    En.MSG.Sentry_example_Card = '卡片識別'; 
    En.MSG.Sentry_example_Face = '人臉識別';
    En.MSG.Sentry_example_20Class = '20分類識別';
    En.MSG.Sentry_example_Qr = '二維碼識別'; 
    En.MSG.Sentry_example_MotionDetect = '運動物體檢測';
})();
