export const ZhHansMsg = {
    // Help文本
    SENTRY_HELP_INIT_TOOLTIP: '初始化视觉传感器，并选择相关的地址',
    SENTRY_HELP_SET_DEFAULT: '传感器算法状态恢复默认',
    SENTRY_HELP_LED:
        '黑色为关闭LED显示，两种颜色相同时,LED状态为手动，不随着检测结果改变',
    SENTRY_HELP_GET_VISION_VALUE: '获取算法对应结果',
    SENTRY_HELP_DETECTED_VISION_VALUE:
        '是否检测到算法目标值，检测到返回Ture，否则False',

    // Warning文本
    SENTRY_WARNING_ON_INIT:
        '请勿同时使用Serial连接Sentry与电脑打印字符，此操作会导致电脑端打印字符错乱或通信异常',

    SENTRY_VISION_ENTERPRISE: '',

    // 设置模块文本
    SENTRY2_NAME: '  Sentry2  ',
    SENTRY1_NAME: '  Sentry1  ',
    SENTRY_BEGIN: '初始化',
    SENTRY_PORT: '端口',
    SENTRY_ADDR: '地址',
    SENTRY_SET_DEFAULT: '恢复默认参数',
    SENTRY_VISION_CN: '算法',
    SENTRY_VISION_EN: '',
    SENTRY_STATUS: '状态',
    SENTRY_SET: '设置 ',
    SENTRY_SET_PARAMNUM: '组参数',
    SENTRY_SET_PARAM: '参数',
    SENTRY_SET_PARAM_GROUP: '参数组',
    SENTRY_INDEX: '索引',
    SENTRY_CENTER: '中心',
    SENTRY_X: '横坐标',
    SENTRY_Y: '纵坐标',
    SENTRY_WEIGHT: '最小宽度',
    SENTRY_HEIGHT: '最小高度',
    SENTRY_COLOR: '颜色',
    SENTRY_LABLE: '标签',
    SENTRY_LED_SET_COLOR: '检测到目标时LED显示',
    SENTRY_LED_SET_COLOR_NOT: '否则',
    SENTRY_LED_SET_LEVEL: '亮度(1~15)',
    SENTRY_CAMERA_SET_AWB: '白平衡模式',
    SENTRY_VISION_DETECTED: '  检测到',
    SENTRY_VISION_DETECTED_1: '  识别到',
    SENTRY_VISION_RETURN: '  返回值',
    SENTRY_VISION_RESULT: '结果',
    SENTRY_VISION_RESULT_1: '结果',
    SENTRY_VISION_RESULT_2: '的',
    SENTRY_VISION_BLOCK: '块',
    SENTRY_VISION_DATA: '数据',
    SENTRY_DETECTED_NUMBER: '  返回的结果数量',
    SENTRY_GET_QRCODEVALUE: '  返回的结果字符串',

    // Sentry Vision type
    SENTRY_VISION_VISIONCOLOR: '颜色识别',
    SENTRY_VISION_VISIONBLOB: '色块检测',
    SENTRY_VISION_VISIONBALL: '球体识别',
    SENTRY_VISION_VISIONAPRILTAG: '标签识别',
    SENTRY_VISION_VISIONLINE: '线条检测',
    SENTRY_VISION_VISIONLEARNING: '深度学习',
    SENTRY_VISION_VISIONCARD: '卡片识别',
    SENTRY_VISION_VISIONFACE: '人脸识别',
    SENTRY_VISION_VISIONBODY: '人体检测',
    SENTRY_VISION_VISION20CLASSES: '20类物体',
    SENTRY_VISION_VISIONQRCODE: '二维码',
    SENTRY_VISION_VISIONMOTIONDETECT: '运动物体',
    SENTRY_VISION_VISIONCUSTOM: '自定义',

    // Sentry Enable Disable
    SENTRY_ENABLE: '开启',
    SENTRY_DISABLE: '关闭',

    // LED color type
    SENTRY_LED_CLOSE: '关闭',
    SENTRY_LED_RED: '红色',
    SENTRY_LED_GREEN: '绿色',
    SENTRY_LED_YELLOW: '黄色',
    SENTRY_LED_BLUE: '蓝色',
    SENTRY_LED_PURPLE: '紫色',
    SENTRY_LED_CYAN: '青色',
    SENTRY_LED_WHITE: '白色',

    // Sentry White Balance Type
    SENTRY_AUTO: '自动',
    SENTRY_LOCK_AWB: '锁定',
    SENTRY_WHITE_LIGHT: '白光',
    SENTRY_YELLOW_LIGHT: '黄光',

    // Sentry State Value Type
    SENTRY_STATE_VALUE_X: '横坐标',
    SENTRY_STATE_VALUE_Y: '纵坐标',
    SENTRY_STATE_VALUE_WIDTH: '宽度',
    SENTRY_STATE_VALUE_HEIGHT: '高度',
    SENTRY_STATE_VALUE_LABEL: '标签',

    SENTRY_STATE_LINE_EX: '终点横坐标',
    SENTRY_STATE_LINE_EY: '终点纵坐标',
    SENTRY_STATE_LINE_SX: '起点横坐标',
    SENTRY_STATE_LINE_SY: '起点纵坐标',
    SENTRY_STATE_LINE_A: '倾斜角度',

    SENTRY_STATE_VALUE_R: '红色分量值',
    SENTRY_STATE_VALUE_G: '绿色分量值',
    SENTRY_STATE_VALUE_B: '蓝色分量值',

    SENTRY_BALLTABLETENNIS: '乒乓球',
    SENTRY_BALLTENNIS: '网球',

    // Sentry Color Type
    SENTRY_COLOR_BLACK: '黑色',
    SENTRY_COLOR_WHITE: '白色',
    SENTRY_COLOR_RED: '红色',
    SENTRY_COLOR_GREEN: '绿色',
    SENTRY_COLOR_BLUE: '蓝色',
    SENTRY_COLOR_YELLOW: '黄色',

    SENTRY_CLASS20_AIRPLANE: '飞机',
    SENTRY_CLASS20_BICYCLE: '自行车',
    SENTRY_CLASS20_BIRD: '鸟',
    SENTRY_CLASS20_BOAT: '船',
    SENTRY_CLASS20_BOTTLE: '瓶子',
    SENTRY_CLASS20_BUS: '公交车',
    SENTRY_CLASS20_CAR: '汽车',
    SENTRY_CLASS20_CAT: '猫',
    SENTRY_CLASS20_CHAIR: '椅子',
    SENTRY_CLASS20_COW: '牛',
    SENTRY_CLASS20_TABLE: '餐桌',
    SENTRY_CLASS20_DOG: '狗',
    SENTRY_CLASS20_HORSE: '马',
    SENTRY_CLASS20_MOTORBIKE: '摩托车',
    SENTRY_CLASS20_PERSON: '人',
    SENTRY_CLASS20_PLANT: '盆栽植物',
    SENTRY_CLASS20_SHEEP: '羊',
    SENTRY_CLASS20_SOFA: '沙发',
    SENTRY_CLASS20_TRAIN: '火车',
    SENTRY_CLASS20_MONITOR: '监视器',

    // Sentry Card Type
    SENTRY_CARD_TRAFFIC: '交通卡片',
    SENTRY_CARD_FORWARD: '前进',
    SENTRY_CARD_LEFT: '左转',
    SENTRY_CARD_RIGHT: '右转',
    SENTRY_CARD_TURN_AROUND: '掉头',
    SENTRY_CARD_PARK: '停车',
    SENTRY_CARD_GREEN_LIGHT: '绿灯',
    SENTRY_CARD_RED_LIGHT: '红灯',
    SENTRY_CARD_SPEED_40: '限速40',
    SENTRY_CARD_SPEED_60: '限速60',
    SENTRY_CARD_SPEED_80: '限速80',
    SENTRY_CARD_SYMBOL: '符号卡片',
    SENTRY_CARD_CHECK: '✔',
    SENTRY_CARD_CROSS: '☓',
    SENTRY_CARD_CIRCLE: '◯',
    SENTRY_CARD_SQUARE: '☐',
    SENTRY_CARD_TRIANGLE: '△',
    SENTRY_CARD_PLUS: '+',
    SENTRY_CARD_MINUS: '-',
    SENTRY_CARD_DIVIDE: '÷',
    SENTRY_CARD_EQUAL: '=',
    SENTRY_CARD_NUMBER: '数字卡片',
    SENTRY_CARD_1: '1',
    SENTRY_CARD_2: '2',
    SENTRY_CARD_3: '3',
    SENTRY_CARD_4: '4',
    SENTRY_CARD_5: '5',
    SENTRY_CARD_6: '6',
    SENTRY_CARD_7: '7',
    SENTRY_CARD_8: '8',
    SENTRY_CARD_9: '9',
    SENTRY_CARD_0: '0',

    mixly_Sentry: 'Sentry 视觉传感器',
    Sentry1_Setup: '设置模块',
    Sentry1_Run: '运行模块',
    Sentry1_example: '算法示例',
}

export const ZhHansCatgories = {
    mixly_Sentry: ZhHansMsg.mixly_Sentry,

    Sentry1_Setup: ZhHansMsg.Sentry1_Setup,
    Sentry1_Run: ZhHansMsg.Sentry1_Run,
    Sentry1_example: ZhHansMsg.Sentry1_example,

    Sentry1_example_Blod: ZhHansMsg.SENTRY_VISION_VISIONBLOB,
    Sentry1_example_Color: ZhHansMsg.SENTRY_VISION_VISIONCOLOR,
    Sentry1_example_ball: ZhHansMsg.SENTRY_VISION_VISIONBALL,
    Sentry1_example_Line: ZhHansMsg.SENTRY_VISION_VISIONLINE,
    Sentry1_example_Card: ZhHansMsg.SENTRY_VISION_VISIONCARD,
    Sentry1_example_body: ZhHansMsg.SENTRY_VISION_VISIONBODY,

    Sentry2_Setup: ZhHansMsg.Sentry1_Setup,
    Sentry2_Run: ZhHansMsg.Sentry1_Run,
    Sentry2_example: ZhHansMsg.Sentry1_example,

    Sentry_example_Blod: ZhHansMsg.SENTRY_VISION_VISIONBLOB,
    Sentry_example_Color: ZhHansMsg.SENTRY_VISION_VISIONCOLOR,
    Sentry_example_AprilTag: ZhHansMsg.SENTRY_VISION_VISIONAPRILTAG,
    Sentry_example_Line: ZhHansMsg.SENTRY_VISION_VISIONLINE,
    Sentry_example_Learning: ZhHansMsg.SENTRY_VISION_VISIONLEARNING,
    Sentry_example_Card: ZhHansMsg.SENTRY_VISION_VISIONCARD,
    Sentry_example_Face: ZhHansMsg.SENTRY_VISION_VISIONFACE,
    Sentry_example_20Class: ZhHansMsg.SENTRY_VISION_VISION20CLASSES,
    Sentry_example_Qr: ZhHansMsg.SENTRY_VISION_VISIONQRCODE,
    Sentry_example_MotionDetect: ZhHansMsg.SENTRY_VISION_VISIONMOTIONDETECT,
}
