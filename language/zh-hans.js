(() => {

    // This file was automatically generated.  Do not modify.
    'use strict';

    goog.require('Blockly.Lang');

    const { ZhHans } = Blockly.Lang;

    ZhHans.CATEGORY_SENTRY_SETUP = '设置模块';
    ZhHans.CATEGORY_SENTRY_RUN = '运行模块';

    // Help文本
    ZhHans.SENTRY_HELP_INIT_TOOLTIP = '初始化视觉传感器，并选择相关的地址';
    ZhHans.SENTRY_HELP_SET_DEFAULT = '传感器算法状态恢复默认';

    ZhHans.SENTRY_HELP_ZOOM = '设置图像缩放等级，等级升高，识别距离越远，识别角度越小';
    ZhHans.SENTRY_HELP_LED = '黑色为关闭LED显示，两种颜色相同时,LED状态为手动，不随着检测结果改变';
    ZhHans.SENTRY_HELP_GET_VISION_VALUE = '获取算法对应结果'
    ZhHans.SENTRY_HELP_DETECTED_VISION_VALUE = '是否检测到算法目标值，检测到返回Ture，否则False'

    // Warning文本
    ZhHans.SENTRY_WARNING_SETUP_BASE = '该模块只能置于初始化模块中！';
    ZhHans.SENTRY_WARNING_SETUP_ONLY = '该模块只能置于设置模块中！';
    ZhHans.SENTRY_WARNING_ON_INIT = '请勿同时使用Serial连接Sentry与电脑打印字符，此操作会导致电脑端打印字符错乱或通信异常'

    ZhHans.SENTRY_VISION_ENTERPRISE = '(仅企业版)'

    // 设置模块文本
    ZhHans.SENTRY2_NAME = 'Sentry2'
    ZhHans.SENTRY1_NAME = 'Sentry1'
    ZhHans.SENTRY_BEGIN = '初始化';
    ZhHans.SENTRY_PORT = '端口';
    ZhHans.SENTRY_ADDR = '地址';
    ZhHans.SENTRY_SET_DEFAULT = ' 恢复默认参数';
    ZhHans.SENTRY_VISION = '算法';
    ZhHans.SENTRY_STATUS = '状态';
    ZhHans.SENTRY_SET = '设置 ';
    ZhHans.SENTRY_SET_COORDINATE = '坐标输出';
    ZhHans.SENTRY_SET_PARAMNUM = '参数个数';
    ZhHans.SENTRY_SET_PARAM = '参数';
    ZhHans.SENTRY_INDEX = '索引';
    ZhHans.SENTRY_CENTER = '区域中心';
    ZhHans.SENTRY_X = '横坐标';
    ZhHans.SENTRY_Y = '纵坐标';
    ZhHans.SENTRY_LEAST = '最小检测';
    ZhHans.SENTRY_WEIGHT = '宽度';
    ZhHans.SENTRY_HIGH = '高度'
    ZhHans.SENTRY_LABLE = '标签';
    ZhHans.SENTRY_LED_SET_COLOR = 'LED检测到结果颜色为';
    ZhHans.SENTRY_LED_SET_COLOR_NOT = '否则'
    ZhHans.SENTRY_LED_SET_LEVEL = '亮度(0~15)';
    ZhHans.SENTRY_CAMERA_SET_ZOOM = '数码变焦';
    ZhHans.SENTRY_CAMERA_SET_ROTATE = '摄像头旋转180°';
    ZhHans.SENTRY_CAMERA_SET_AWB = '摄像头白平衡';
    ZhHans.SENTRY_CAMERA_SET_FPS = '摄像头高帧率模式';
    ZhHans.SENTRY_CAMERA_SET_BRIGHTNESS = '图像亮度';
    ZhHans.SENTRY_CAMERA_SET_CONTRAST = '图像对比度';
    ZhHans.SENTRY_CAMERA_SET_SATURATION = '图像饱和度';
    ZhHans.SENTRY_CAMERA_SET_SHAPRNESS = '图像锐化';
    ZhHans.SENTRY_UART_SET_BAUDRATE = '串口波特率';
    ZhHans.SENTRY_VISION_DETECTED = '检测到';
    ZhHans.SENTRY_VISION_RESULT = '结果';
    ZhHans.SENTRY_DETECTED_NUMBER = '数量';
    ZhHans.SENTRY_GET_QRCODEVALUE = '二维码识别结果字符串';
    ZhHans.SENTRY_DETECTED = '算法检测到';
    ZhHans.SENTRY_ROWS = '图像宽度';
    ZhHans.SENTRY_COLS = '图像高度';

    // Sentry Coordinate
    ZhHans.SENTRY_ABSOLUTECOORDINATE = '绝对坐标';
    ZhHans.SENTRY_PERCENTAGECOORDINATE = '相对坐标';

    // Sentry Vision type
    ZhHans.SENTRY_VISION_VISIONCOLOR = '颜色识别';
    ZhHans.SENTRY_VISION_VISIONBLOB = '色块检测';
    ZhHans.SENTRY_VISION_VISIONBALL = '球体检测';
    ZhHans.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
    ZhHans.SENTRY_VISION_VISIONLINE = '线段检测';
    ZhHans.SENTRY_VISION_VISIONLEARNING = '深度学习';
    ZhHans.SENTRY_VISION_VISIONCARD = '卡片识别';
    ZhHans.SENTRY_VISION_VISIONFACE = '人脸识别';
    ZhHans.SENTRY_VISION_VISIONBODY = '人体检测';
    ZhHans.SENTRY_VISION_VISION20CLASSES = '20分类识别';
    ZhHans.SENTRY_VISION_VISIONQRCODE = '二维码识别';
    ZhHans.SENTRY_VISION_VISIONMOTIONDETECT = '运动物体检测';
    ZhHans.SENTRY_VISION_VISIONCUSTOM = "自定义"

    // Sentry Enable Disable
    ZhHans.SENTRY_ENABLE = '启用';
    ZhHans.SENTRY_DISABLE = '关闭';

    // LED color type
    ZhHans.SENTRY_LED_CLOSE = '关闭';
    ZhHans.SENTRY_LED_RED = '红色';
    ZhHans.SENTRY_LED_GREEN = '绿色';
    ZhHans.SENTRY_LED_YELLOW = '黄色';
    ZhHans.SENTRY_LED_BLUE = '蓝色';
    ZhHans.SENTRY_LED_PURPLE = '紫色';
    ZhHans.SENTRY_LED_CYAN = '青色';
    ZhHans.SENTRY_LED_WHITE = '白色';

    // Sentry Config Level
    ZhHans.SENTRY_LEVEL_DEFAULT = '自动';
    ZhHans.SENTRY_LEVEL1 = '等级1';
    ZhHans.SENTRY_LEVEL2 = '等级2';
    ZhHans.SENTRY_LEVEL3 = '等级3';
    ZhHans.SENTRY_LEVEL4 = '等级4';
    ZhHans.SENTRY_LEVEL5 = '等级5';
    ZhHans.SENTRY_LEVEL6 = '等级6';
    ZhHans.SENTRY_LEVEL7 = '等级7';
    ZhHans.SENTRY_LEVEL8 = '等级8';
    ZhHans.SENTRY_LEVEL9 = '等级9';
    ZhHans.SENTRY_LEVEL10 = '等级10';

    // Sentry Zoom Type
    ZhHans.SENTRY_ZOOM_DEFAULT = '默认';
    ZhHans.SENTRY_ZOOM_LEVEL1 = '等级1';
    ZhHans.SENTRY_ZOOM_LEVEL2 = '等级2';
    ZhHans.SENTRY_ZOOM_LEVEL3 = '等级3';
    ZhHans.SENTRY_ZOOM_LEVEL4 = '等级4';
    ZhHans.SENTRY_ZOOM_LEVEL5 = '等级5';

    // Sentry White Balance Type
    ZhHans.SENTRY_AUTO = '自动';
    ZhHans.SENTRY_LOCK_AWB = '锁定白平衡';
    ZhHans.SENTRY_WHITE_LIGHT = '白光模式';
    ZhHans.SENTRY_YELLOW_LIGHT = '黄光模式';

    // Sentry State Value Type
    ZhHans.SENTRY_STATE_VALUE_X = '横向坐标';
    ZhHans.SENTRY_STATE_VALUE_Y = '纵向坐标';
    ZhHans.SENTRY_STATE_VALUE_WIDTH = '宽度';
    ZhHans.SENTRY_STATE_VALUE_HEIGHT = '高度';
    ZhHans.SENTRY_STATE_VALUE_LABEL = '标签';

    ZhHans.SENTRY_STATE_LINE_EX = '线段终点X坐标';
    ZhHans.SENTRY_STATE_LINE_EY = '线段终点Y坐标';
    ZhHans.SENTRY_STATE_LINE_SX = '线段起点X坐标';
    ZhHans.SENTRY_STATE_LINE_SY = '线段起点Y坐标';
    ZhHans.SENTRY_STATE_LINE_A = '线段的倾斜角度';

    ZhHans.SENTRY_STATE_VALUE_R = '红色通道';
    ZhHans.SENTRY_STATE_VALUE_G = '绿色通道';
    ZhHans.SENTRY_STATE_VALUE_B = '蓝色通道';

    // Sentry Color Type
    ZhHans.SENTRY_COLOR_BLACK = '黑色';
    ZhHans.SENTRY_COLOR_WHITE = '白色';
    ZhHans.SENTRY_COLOR_RED = '红色';
    ZhHans.SENTRY_COLOR_GREEN = '绿色';
    ZhHans.SENTRY_COLOR_BLUE = '蓝色';
    ZhHans.SENTRY_COLOR_YELLOW = '黄色';

    ZhHans.SENTRY_BALLTABLETENNIS = '乒乓球';
    ZhHans.SENTRY_BALLTENNIS = '网球';

    // Sentry 20 Class Type
    // ZhHans.SENTRY_CLASS20_AIRPLANE = '✈️ 飞机';
    // ZhHans.SENTRY_CLASS20_BICYCLE = '🚲 自行车';
    // ZhHans.SENTRY_CLASS20_BIRD = '🐦 鸟';
    // ZhHans.SENTRY_CLASS20_BOAT = '🚤 船';
    // ZhHans.SENTRY_CLASS20_BOTTLE = '🍾 瓶子';
    // ZhHans.SENTRY_CLASS20_BUS = ' 🚌 公交车';
    // ZhHans.SENTRY_CLASS20_CAR = '🚗 小汽车';
    // ZhHans.SENTRY_CLASS20_CAT = ' 🐱 猫';
    // ZhHans.SENTRY_CLASS20_CHAIR = '🪑 椅子';
    // ZhHans.SENTRY_CLASS20_COW = '🐄 奶牛';
    // ZhHans.SENTRY_CLASS20_TABLE = '🔲 桌子';
    // ZhHans.SENTRY_CLASS20_DOG = '🐕 狗';
    // ZhHans.SENTRY_CLASS20_HORSE = '🐎 马';
    // ZhHans.SENTRY_CLASS20_MOTORBIKE = '🏍️ 摩托车';
    // ZhHans.SENTRY_CLASS20_PERSON = '🤵 人';
    // ZhHans.SENTRY_CLASS20_PLANT = '🪴 植物';
    // ZhHans.SENTRY_CLASS20_SHEEP = '🐏 羊';
    // ZhHans.SENTRY_CLASS20_SOFA = '🛋 沙发';
    // ZhHans.SENTRY_CLASS20_TRAIN = '🚆 火车';
    // ZhHans.SENTRY_CLASS20_MONITOR = '🖥️ 显示器';

    ZhHans.SENTRY_CLASS20_AIRPLANE = '飞机';
    ZhHans.SENTRY_CLASS20_BICYCLE = '自行车';
    ZhHans.SENTRY_CLASS20_BIRD = '鸟';
    ZhHans.SENTRY_CLASS20_BOAT = '船';
    ZhHans.SENTRY_CLASS20_BOTTLE = '瓶子';
    ZhHans.SENTRY_CLASS20_BUS = '公交车';
    ZhHans.SENTRY_CLASS20_CAR = '小汽车';
    ZhHans.SENTRY_CLASS20_CAT = '猫';
    ZhHans.SENTRY_CLASS20_CHAIR = '椅子';
    ZhHans.SENTRY_CLASS20_COW = '奶牛';
    ZhHans.SENTRY_CLASS20_TABLE = '桌子';
    ZhHans.SENTRY_CLASS20_DOG = '狗';
    ZhHans.SENTRY_CLASS20_HORSE = '马';
    ZhHans.SENTRY_CLASS20_MOTORBIKE = '摩托车';
    ZhHans.SENTRY_CLASS20_PERSON = '人';
    ZhHans.SENTRY_CLASS20_PLANT = '植物';
    ZhHans.SENTRY_CLASS20_SHEEP = '羊';
    ZhHans.SENTRY_CLASS20_SOFA = '沙发';
    ZhHans.SENTRY_CLASS20_TRAIN = '火车';
    ZhHans.SENTRY_CLASS20_MONITOR = '显示器';

    // Sentry Card Type
    ZhHans.SENTRY_CARD_TRAFFIC = "交通卡片"
    ZhHans.SENTRY_CARD_FORWARD = '前进';
    ZhHans.SENTRY_CARD_LEFT = '左';
    ZhHans.SENTRY_CARD_RIGHT = '右';
    ZhHans.SENTRY_CARD_TURN_AROUND = '掉头';
    ZhHans.SENTRY_CARD_PARK = '暂停';
    ZhHans.SENTRY_CARD_GREEN_LIGHT = '绿灯';
    ZhHans.SENTRY_CARD_RED_LIGHT = '红灯';
    ZhHans.SENTRY_CARD_SPEED_40 = '速度40';
    ZhHans.SENTRY_CARD_SPEED_60 = '速度60';
    ZhHans.SENTRY_CARD_SPEED_80 = '速度80';
    ZhHans.SENTRY_CARD_SYMBOL = "符号卡片"
    ZhHans.SENTRY_CARD_CHECK = '叉号';
    ZhHans.SENTRY_CARD_CROSS = '十字';
    ZhHans.SENTRY_CARD_CIRCLE = '圆圈';
    ZhHans.SENTRY_CARD_SQUARE = '正方形';
    ZhHans.SENTRY_CARD_TRIANGLE = '三角形';
    ZhHans.SENTRY_CARD_PLUS = '+';
    ZhHans.SENTRY_CARD_MINUS = '-';
    ZhHans.SENTRY_CARD_DIVIDE = '~';
    ZhHans.SENTRY_CARD_EQUAL = '=';
    ZhHans.SENTRY_CARD_NUMBER = "数字卡片"
    ZhHans.SENTRY_CARD_1 = '1';
    ZhHans.SENTRY_CARD_2 = '2';
    ZhHans.SENTRY_CARD_3 = '3';
    ZhHans.SENTRY_CARD_4 = '4';
    ZhHans.SENTRY_CARD_5 = '5';
    ZhHans.SENTRY_CARD_6 = '6';
    ZhHans.SENTRY_CARD_7 = '7';
    ZhHans.SENTRY_CARD_8 = '8';
    ZhHans.SENTRY_CARD_9 = '9';
    ZhHans.SENTRY_CARD_0 = '0';
    ZhHans.SENTRY_CARD_CHAR = "字母卡片"
    ZhHans.SENTRY_CARD_A = 'A';
    ZhHans.SENTRY_CARD_B = 'B';
    ZhHans.SENTRY_CARD_C = 'C';
    ZhHans.SENTRY_CARD_D = 'D';
    ZhHans.SENTRY_CARD_E = 'E';
    ZhHans.SENTRY_CARD_F = 'F';
    ZhHans.SENTRY_CARD_G = 'G';
    ZhHans.SENTRY_CARD_H = 'H';
    ZhHans.SENTRY_CARD_I = 'I';
    ZhHans.SENTRY_CARD_J = 'J';
    ZhHans.SENTRY_CARD_K = 'K';
    ZhHans.SENTRY_CARD_L = 'L';
    ZhHans.SENTRY_CARD_M = 'M';
    ZhHans.SENTRY_CARD_N = 'N';
    ZhHans.SENTRY_CARD_O = 'O';
    ZhHans.SENTRY_CARD_P = 'P';
    ZhHans.SENTRY_CARD_Q = 'Q';
    ZhHans.SENTRY_CARD_R = 'R';
    ZhHans.SENTRY_CARD_S = 'S';
    ZhHans.SENTRY_CARD_T = 'T';
    ZhHans.SENTRY_CARD_U = 'U';
    ZhHans.SENTRY_CARD_V = 'V';
    ZhHans.SENTRY_CARD_W = 'W';
    ZhHans.SENTRY_CARD_X = 'X';
    ZhHans.SENTRY_CARD_Y = 'Y';
    ZhHans.SENTRY_CARD_Z = 'Z';

})();
