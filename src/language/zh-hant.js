export const ZhHantMsg = {
    // Help文本
    SENTRY_HELP_INIT_TOOLTIP: '初始化視覺傳感器，並選擇相關的地址',
    SENTRY_HELP_SET_DEFAULT: '傳感器算法狀態恢復默認',
    SENTRY_HELP_LED:
        '黑色爲關閉LED顯示，兩種顏色相同時,LED狀態爲手動，不隨着檢測結果改變',
    SENTRY_HELP_GET_VISION_VALUE: '獲取算法對應結果',
    SENTRY_HELP_DETECTED_VISION_VALUE:
        '是否檢測到算法目標值，檢測到返回Ture，否則False',

    // Warning文本
    SENTRY_WARNING_ON_INIT:
        '請勿同時使用Serial連接Sentry與電腦打印字符，此操作會導致電腦端打印字符錯亂或通信異常',

    SENTRY_VISION_ENTERPRISE: '',

    // 設置模塊文本
    SENTRY2_NAME: '  Sentry2  ',
    SENTRY1_NAME: '  Sentry1  ',
    SENTRY_BEGIN: '初始化',
    SENTRY_PORT: '端口',
    SENTRY_ADDR: '地址',
    SENTRY_SET_DEFAULT: '恢復默認參數',
    SENTRY_VISION_CN: '算法',
    SENTRY_VISION_EN: '',
    SENTRY_STATUS: '狀態',
    SENTRY_SET: '設置 ',
    SENTRY_SET_PARAMNUM: '組參數',
    SENTRY_SET_PARAM: '參數',
    SENTRY_SET_PARAM_GROUP: '參數組',
    SENTRY_INDEX: '索引',
    SENTRY_CENTER: '中心',
    SENTRY_X: '橫座標',
    SENTRY_Y: '縱座標',
    SENTRY_WEIGHT: '最小寬度',
    SENTRY_HEIGHT: '最小高度',
    SENTRY_COLOR: '顏色',
    SENTRY_LABLE: '標籤',
    SENTRY_LED_SET_COLOR: '檢測到目標時LED顯示',
    SENTRY_LED_SET_COLOR_NOT: '否則',
    SENTRY_LED_SET_LEVEL: '亮度(1~15)',
    SENTRY_CAMERA_SET_AWB: '白平衡模式',
    SENTRY_VISION_DETECTED: '  檢測到',
    SENTRY_VISION_DETECTED_1: '  識別到',
    SENTRY_VISION_RETURN: '  返回值',
    SENTRY_VISION_RESULT: '結果',
    SENTRY_VISION_RESULT_1: '結果',
    SENTRY_VISION_RESULT_2: '的',
    SENTRY_VISION_BLOCK: '塊',
    SENTRY_VISION_DATA: '數據',
    SENTRY_DETECTED_NUMBER: '  返回的結果數量',
    SENTRY_GET_QRCODEVALUE: '  返回的結果字符串',

    // Sentry Vision type
    SENTRY_VISION_VISIONCOLOR: '顏色識別',
    SENTRY_VISION_VISIONBLOB: '色塊檢測',
    SENTRY_VISION_VISIONBALL: '球體識別',
    SENTRY_VISION_VISIONAPRILTAG: '標籤識別',
    SENTRY_VISION_VISIONLINE: '線條檢測',
    SENTRY_VISION_VISIONLEARNING: '深度學習',
    SENTRY_VISION_VISIONCARD: '卡片識別',
    SENTRY_VISION_VISIONFACE: '人臉識別',
    SENTRY_VISION_VISIONBODY: '人體檢測',
    SENTRY_VISION_VISION20CLASSES: '20類物體',
    SENTRY_VISION_VISIONQRCODE: '二維碼',
    SENTRY_VISION_VISIONMOTIONDETECT: '運動物體',
    SENTRY_VISION_VISIONCUSTOM: '自定義',

    // Sentry Enable Disable
    SENTRY_ENABLE: '開啓',
    SENTRY_DISABLE: '關閉',

    // LED color type
    SENTRY_LED_CLOSE: '關閉',
    SENTRY_LED_RED: '紅色',
    SENTRY_LED_GREEN: '綠色',
    SENTRY_LED_YELLOW: '黃色',
    SENTRY_LED_BLUE: '藍色',
    SENTRY_LED_PURPLE: '紫色',
    SENTRY_LED_CYAN: '青色',
    SENTRY_LED_WHITE: '白色',

    // Sentry White Balance Type
    SENTRY_AUTO: '自動',
    SENTRY_LOCK_AWB: '鎖定',
    SENTRY_WHITE_LIGHT: '白光',
    SENTRY_YELLOW_LIGHT: '黃光',

    // Sentry State Value Type
    SENTRY_STATE_VALUE_X: '橫座標',
    SENTRY_STATE_VALUE_Y: '縱座標',
    SENTRY_STATE_VALUE_WIDTH: '寬度',
    SENTRY_STATE_VALUE_HEIGHT: '高度',
    SENTRY_STATE_VALUE_LABEL: '標籤',

    SENTRY_STATE_LINE_EX: '終點橫座標',
    SENTRY_STATE_LINE_EY: '終點縱座標',
    SENTRY_STATE_LINE_SX: '起點橫座標',
    SENTRY_STATE_LINE_SY: '起點縱座標',
    SENTRY_STATE_LINE_A: '傾斜角度',

    SENTRY_STATE_VALUE_R: '紅色分量值',
    SENTRY_STATE_VALUE_G: '綠色分量值',
    SENTRY_STATE_VALUE_B: '藍色分量值',

    SENTRY_BALLTABLETENNIS: '乒乓球',
    SENTRY_BALLTENNIS: '網球',

    // Sentry Color Type
    SENTRY_COLOR_BLACK: '黑色',
    SENTRY_COLOR_WHITE: '白色',
    SENTRY_COLOR_RED: '紅色',
    SENTRY_COLOR_GREEN: '綠色',
    SENTRY_COLOR_BLUE: '藍色',
    SENTRY_COLOR_YELLOW: '黃色',

    SENTRY_CLASS20_AIRPLANE: '飛機',
    SENTRY_CLASS20_BICYCLE: '自行車',
    SENTRY_CLASS20_BIRD: '鳥',
    SENTRY_CLASS20_BOAT: '船',
    SENTRY_CLASS20_BOTTLE: '瓶子',
    SENTRY_CLASS20_BUS: '公交車',
    SENTRY_CLASS20_CAR: '汽車',
    SENTRY_CLASS20_CAT: '貓',
    SENTRY_CLASS20_CHAIR: '餐桌',
    SENTRY_CLASS20_COW: '牛',
    SENTRY_CLASS20_TABLE: '桌子',
    SENTRY_CLASS20_DOG: '狗',
    SENTRY_CLASS20_HORSE: '馬',
    SENTRY_CLASS20_MOTORBIKE: '摩托車',
    SENTRY_CLASS20_PERSON: '人',
    SENTRY_CLASS20_PLANT: '盆栽植物',
    SENTRY_CLASS20_SHEEP: '羊',
    SENTRY_CLASS20_SOFA: '沙發',
    SENTRY_CLASS20_TRAIN: '火車',
    SENTRY_CLASS20_MONITOR: '监視器',

    // Sentry Card Type
    SENTRY_CARD_TRAFFIC: '交通卡片',
    SENTRY_CARD_FORWARD: '前進',
    SENTRY_CARD_LEFT: '左轉',
    SENTRY_CARD_RIGHT: '右轉',
    SENTRY_CARD_TURN_AROUND: '掉頭',
    SENTRY_CARD_PARK: '停車',
    SENTRY_CARD_GREEN_LIGHT: '綠燈',
    SENTRY_CARD_RED_LIGHT: '紅燈',
    SENTRY_CARD_SPEED_40: '限速40',
    SENTRY_CARD_SPEED_60: '限速60',
    SENTRY_CARD_SPEED_80: '限速80',
    SENTRY_CARD_SYMBOL: '符號卡片',
    SENTRY_CARD_CHECK: '✔',
    SENTRY_CARD_CROSS: '☓',
    SENTRY_CARD_CIRCLE: '◯',
    SENTRY_CARD_SQUARE: '☐',
    SENTRY_CARD_TRIANGLE: '△',
    SENTRY_CARD_PLUS: '+',
    SENTRY_CARD_MINUS: '-',
    SENTRY_CARD_DIVIDE: '÷',
    SENTRY_CARD_EQUAL: '=',
    SENTRY_CARD_NUMBER: '數字卡片',
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

    mixly_Sentry: 'Sentry 視覺傳感器',
    Sentry1_Setup: '設置模塊',
    Sentry1_Run: '運行模塊',
    Sentry1_example: '算法示例',
}

export const ZhHantCatgories = {
    mixly_Sentry: ZhHantMsg.mixly_Sentry,

    Sentry1_Setup: ZhHantMsg.Sentry1_Setup,
    Sentry1_Run: ZhHantMsg.Sentry1_Run,
    Sentry1_example: ZhHantMsg.Sentry1_example,

    Sentry1_example_Blod: ZhHantMsg.SENTRY_VISION_VISIONBLOB,
    Sentry1_example_Color: ZhHantMsg.SENTRY_VISION_VISIONCOLOR,
    Sentry1_example_ball: ZhHantMsg.SENTRY_VISION_VISIONBALL,
    Sentry1_example_Line: ZhHantMsg.SENTRY_VISION_VISIONLINE,
    Sentry1_example_Card: ZhHantMsg.SENTRY_VISION_VISIONCARD,
    Sentry1_example_body: ZhHantMsg.SENTRY_VISION_VISIONBODY,

    Sentry2_Setup: ZhHantMsg.Sentry1_Setup,
    Sentry2_Run: ZhHantMsg.Sentry1_Run,
    Sentry2_example: ZhHantMsg.Sentry1_example,

    Sentry_example_Blod: ZhHantMsg.SENTRY_VISION_VISIONBLOB,
    Sentry_example_Color: ZhHantMsg.SENTRY_VISION_VISIONCOLOR,
    Sentry_example_AprilTag: ZhHantMsg.SENTRY_VISION_VISIONAPRILTAG,
    Sentry_example_Line: ZhHantMsg.SENTRY_VISION_VISIONLINE,
    Sentry_example_Learning: ZhHantMsg.SENTRY_VISION_VISIONLEARNING,
    Sentry_example_Card: ZhHantMsg.SENTRY_VISION_VISIONCARD,
    Sentry_example_Face: ZhHantMsg.SENTRY_VISION_VISIONFACE,
    Sentry_example_20Class: ZhHantMsg.SENTRY_VISION_VISION20CLASSES,
    Sentry_example_Qr: ZhHantMsg.SENTRY_VISION_VISIONQRCODE,
    Sentry_example_MotionDetect: ZhHantMsg.SENTRY_VISION_VISIONMOTIONDETECT,
}
