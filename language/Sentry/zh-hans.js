'use strict';
goog.provide('Blockly.Msg.zh.hans');
goog.require('Blockly.Msg');

Blockly.Msg.CATEGORY_MORPX_SENTRY_SETUP = '设置模块';
Blockly.Msg.CATEGORY_MORPX_SENTRY_RUN = '运行模块';

// Help文本
Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP = '初始化视觉传感器，并选择相关的地址';
Blockly.Msg.SENTRY_HELP_SET_DEFAULT = '传感器算法状态恢复默认';
Blockly.Msg.SENTRY_HELP_SET_COORDINATE = '传感器输出坐标系设置';
Blockly.Msg.SENTRY_HELP_ZOOM = '设置图像缩放等级，等级升高，识别距离越远，识别角度越小';
Blockly.Msg.SENTRY_HELP_LED = '黑色为关闭LED显示，两种颜色相同时,LED状态为手动，不随着检测结果改变';
Blockly.Msg.SENTRY_HELP_GET_VISION_VALUE = '获取算法对应结果'
Blockly.Msg.SENTRY_HELP_DETECTED_VISION_VALUE = '是否检测到算法目标值，检测到返回Ture，否则False'

// Warning文本
Blockly.Msg.SENTRY_WARNING_SETUP_BASE = '该模块只能置于初始化模块中！';
Blockly.Msg.SENTRY_WARNING_SETUP_ONLY = '该模块只能置于设置模块中！';
Blockly.Msg.SENTRY_WARNING_ON_INIT = '请勿同时使用Serial连接Sentry与电脑打印字符，此操作会导致电脑端打印字符错乱或通信异常'
// 设置模块文本
Blockly.Msg.SENTRY_SET_UP = 'Sentry设置';
Blockly.Msg.SENTRY_BEGIN = '初始化';
Blockly.Msg.SENTRY_PORT = '端口';
Blockly.Msg.SENTRY_SET_DEFAULT = ' 恢复默认参数';
Blockly.Msg.SENTRY_VISION = '算法';
Blockly.Msg.SENTRY_STATUS = '状态';
Blockly.Msg.SENTRY_SET = '设置';
Blockly.Msg.SENTRY_SET_COORDINATE = '坐标输出';
Blockly.Msg.SENTRY_SET_PARAMNUM = '参数个数';
Blockly.Msg.SENTRY_SET_PARAM = '参数';
Blockly.Msg.SENTRY_INDEX = '索引';
Blockly.Msg.SENTRY_CENTER = '区域中心';
Blockly.Msg.SENTRY_X = '横坐标';
Blockly.Msg.SENTRY_Y = '纵坐标';
Blockly.Msg.SENTRY_LEAST = '最小检测';
Blockly.Msg.SENTRY_WEIGHT = '宽度';
Blockly.Msg.SENTRY_HIGH = '高度'
Blockly.Msg.SENTRY_LABLE = '标签';  
Blockly.Msg.SENTRY_LED_SET_COLOR = 'LED检测到结果颜色为';
Blockly.Msg.SENTRY_LED_SET_COLOR_NOT = '否则'
Blockly.Msg.SENTRY_LED_SET_LEVEL = '亮度(0~15)';
Blockly.Msg.SENTRY_CAMERA_SET_ZOOM = '数码变焦';
Blockly.Msg.SENTRY_CAMERA_SET_ROTATE = '摄像头旋转180°';
Blockly.Msg.SENTRY_CAMERA_SET_AWB = '摄像头白平衡';
Blockly.Msg.SENTRY_CAMERA_SET_FPS = '摄像头高帧率模式';
Blockly.Msg.SENTRY_CAMERA_SET_BRIGHTNESS = '图像亮度';
Blockly.Msg.SENTRY_CAMERA_SET_CONTRAST = '图像对比度';
Blockly.Msg.SENTRY_CAMERA_SET_SATURATION = '图像饱和度';
Blockly.Msg.SENTRY_CAMERA_SET_SHAPRNESS = '图像锐化';
Blockly.Msg.SENTRY_UART_SET_BAUDRATE = '串口波特率';
Blockly.Msg.SENTRY_VISION_DETECTED = '检测到';
Blockly.Msg.SENTRY_VISION_RESULT = '结果';
Blockly.Msg.SENTRY_DETECTED_NUMBER = '数量';
Blockly.Msg.SENTRY_GET_QRCODEVALUE = '二维码识别结果字符串';
Blockly.Msg.SENTRY_DETECTED = '算法检测到';
Blockly.Msg.SENTRY_ROWS = '图像宽度';
Blockly.Msg.SENTRY_COLS = '图像高度';

// Sentry Coordinate
Blockly.Msg.SENTRY_ABSOLUTECOORDINATE = '绝对坐标';
Blockly.Msg.SENTRY_PERCENTAGECOORDINATE = '相对坐标';

// Sentry Vision type
Blockly.Msg.SENTRY_VISION_VISIONCOLOR = '颜色识别';
Blockly.Msg.SENTRY_VISION_VISIONBLOB = '色块检测';
Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG = 'AprilTag';
Blockly.Msg.SENTRY_VISION_VISIONLINE = '线段检测';
Blockly.Msg.SENTRY_VISION_VISIONLEARNING = '机器学习';
Blockly.Msg.SENTRY_VISION_VISIONCARD = '卡片识别';
Blockly.Msg.SENTRY_VISION_VISIONFACE = '人脸识别';
Blockly.Msg.SENTRY_VISION_VISION20CLASSES = '20分类识别';
Blockly.Msg.SENTRY_VISION_VISIONQRCODE = '二维码识别';
Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK = '深度学习';
Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT = '运动物体检测';

// Sentry Enable Disable
Blockly.Msg.SENTRY_ENABLE = '启用';
Blockly.Msg.SENTRY_DISABLE = '关闭';

// LED color type
Blockly.Msg.SENTRY_LED_CLOSE = '关闭';
Blockly.Msg.SENTRY_LED_RED = '红色';
Blockly.Msg.SENTRY_LED_GREEN = '绿色';
Blockly.Msg.SENTRY_LED_YELLOW = '黄色';
Blockly.Msg.SENTRY_LED_BLUE = '蓝色';
Blockly.Msg.SENTRY_LED_PURPLE = '紫色';
Blockly.Msg.SENTRY_LED_CYAN = '青色';
Blockly.Msg.SENTRY_LED_WHITE = '白色';

// Sentry Config Level
Blockly.Msg.SENTRY_LEVEL_DEFAULT = '自动';
Blockly.Msg.SENTRY_LEVEL1 = '等级1';
Blockly.Msg.SENTRY_LEVEL2 = '等级2';
Blockly.Msg.SENTRY_LEVEL3 = '等级3';
Blockly.Msg.SENTRY_LEVEL4 = '等级4';
Blockly.Msg.SENTRY_LEVEL5 = '等级5';
Blockly.Msg.SENTRY_LEVEL6 = '等级6';
Blockly.Msg.SENTRY_LEVEL7 = '等级7';
Blockly.Msg.SENTRY_LEVEL8 = '等级8';
Blockly.Msg.SENTRY_LEVEL9 = '等级9';
Blockly.Msg.SENTRY_LEVEL10 = '等级10';

// Sentry Zoom Type
Blockly.Msg.SENTRY_ZOOM_DEFAULT = '默认';
Blockly.Msg.SENTRY_ZOOM_LEVEL1 = '等级1';
Blockly.Msg.SENTRY_ZOOM_LEVEL2 = '等级2';
Blockly.Msg.SENTRY_ZOOM_LEVEL3 = '等级3';
Blockly.Msg.SENTRY_ZOOM_LEVEL4 = '等级4';
Blockly.Msg.SENTRY_ZOOM_LEVEL5 = '等级5';

// Sentry White Balance Type
Blockly.Msg.SENTRY_AUTO = '自动';
Blockly.Msg.SENTRY_LOCK_AWB = '锁定白平衡';
Blockly.Msg.SENTRY_WHITE_LIGHT = '白光模式';
Blockly.Msg.SENTRY_YELLOW_LIGHT = '黄光模式';

// Sentry State Value Type
Blockly.Msg.SENTRY_STATE_VALUE_X = '横向坐标';
Blockly.Msg.SENTRY_STATE_VALUE_Y = '纵向坐标';
Blockly.Msg.SENTRY_STATE_VALUE_WIDTH = '宽度';
Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT = '高度';
Blockly.Msg.SENTRY_STATE_VALUE_LABEL = '标签';

Blockly.Msg.SENTRY_STATE_VALUE_R = '红色通道';
Blockly.Msg.SENTRY_STATE_VALUE_G = '绿色通道';
Blockly.Msg.SENTRY_STATE_VALUE_B = '蓝色通道';

// Sentry Color Type
Blockly.Msg.SENTRY_COLOR_BLACK = '黑色';
Blockly.Msg.SENTRY_COLOR_WHITE = '白色';
Blockly.Msg.SENTRY_COLOR_RED = '红色';
Blockly.Msg.SENTRY_COLOR_GREEN = '绿色';
Blockly.Msg.SENTRY_COLOR_BLUE = '蓝色';
Blockly.Msg.SENTRY_COLOR_YELLOW = '黄色';

// Sentry 20 Class Type
Blockly.Msg.SENTRY_CLASS20_AIRPLANE = '✈️ 飞机';
Blockly.Msg.SENTRY_CLASS20_BICYCLE = '🚲 自行车';
Blockly.Msg.SENTRY_CLASS20_BIRD = '🐦 鸟';
Blockly.Msg.SENTRY_CLASS20_BOAT = '🚤 船';
Blockly.Msg.SENTRY_CLASS20_BOTTLE = '🍾 瓶子';
Blockly.Msg.SENTRY_CLASS20_BUS = ' 🚌 公交车';
Blockly.Msg.SENTRY_CLASS20_CAR = '🚗 小汽车';
Blockly.Msg.SENTRY_CLASS20_CAT = ' 🐱 猫';
Blockly.Msg.SENTRY_CLASS20_CHAIR = '🪑 椅子';
Blockly.Msg.SENTRY_CLASS20_COW = '🐄 奶牛';
Blockly.Msg.SENTRY_CLASS20_TABLE = '🔲 桌子';
Blockly.Msg.SENTRY_CLASS20_DOG = '🐕 狗';
Blockly.Msg.SENTRY_CLASS20_HORSE = '🐎 马';
Blockly.Msg.SENTRY_CLASS20_MOTORBIKE = '🏍️ 摩托车';
Blockly.Msg.SENTRY_CLASS20_PERSON = '🤵 人';
Blockly.Msg.SENTRY_CLASS20_PLANT = '🪴 植物';
Blockly.Msg.SENTRY_CLASS20_SHEEP = '🐏 羊';
Blockly.Msg.SENTRY_CLASS20_SOFA = '🛋 沙发';
Blockly.Msg.SENTRY_CLASS20_TRAIN = '🚆 火车';
Blockly.Msg.SENTRY_CLASS20_MONITOR = '🖥️ 显示器';

// Sentry Card Type
Blockly.Msg.SENTRY_CARD_TRAFFIC = "交通卡片"
Blockly.Msg.SENTRY_CARD_FORWARD = '前进';
Blockly.Msg.SENTRY_CARD_LEFT = '左';
Blockly.Msg.SENTRY_CARD_RIGHT = '右';
Blockly.Msg.SENTRY_CARD_TURN_AROUND = '掉头';
Blockly.Msg.SENTRY_CARD_PARK = '暂停';
Blockly.Msg.SENTRY_CARD_GREEN_LIGHT = '绿灯';
Blockly.Msg.SENTRY_CARD_RED_LIGHT = '红灯';
Blockly.Msg.SENTRY_CARD_SPEED_40 = '速度40';
Blockly.Msg.SENTRY_CARD_SPEED_60 = '速度60';
Blockly.Msg.SENTRY_CARD_SPEED_80 = '速度80';
Blockly.Msg.SENTRY_CARD_SYMBOL = "符号卡片"
Blockly.Msg.SENTRY_CARD_CHECK = '叉号';
Blockly.Msg.SENTRY_CARD_CROSS = '十字';
Blockly.Msg.SENTRY_CARD_CIRCLE = '圆圈';
Blockly.Msg.SENTRY_CARD_SQUARE = '正方形';
Blockly.Msg.SENTRY_CARD_TRIANGLE = '三角形';
Blockly.Msg.SENTRY_CARD_PLUS = '+';
Blockly.Msg.SENTRY_CARD_MINUS = '-';
Blockly.Msg.SENTRY_CARD_DIVIDE = '~';
Blockly.Msg.SENTRY_CARD_EQUAL = '=';
Blockly.Msg.SENTRY_CARD_NUMBER = "数字卡片"
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
Blockly.Msg.SENTRY_CARD_CHAR = "字母卡片"
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
