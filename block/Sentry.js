//下列三行代码,为刚需,此提供了下列所有代码的入口
'use strict';
goog.provide('Blockly.Blocks.Sentry');//注意脚本类别及路径名称
goog.require('Blockly.Blocks');

Blockly.Blocks.Sentry.SetupMode_Color = "#EF5411";
Blockly.Blocks.Sentry.RunMode_Color = "#EAA20A";

var boardType = JSFuncs.getPlatform();

var sentry_objs = [
  ["Sentry1", "0"],
  ["Sentry2", "1"],
  ["Sentry3", "2"],
  ["Sentry4", "3"]
];

var mode_objs = [
  ["I2C", "Wire"],
  ["Serial1", "Serial1"],
  ["Serial2", "Serial2"]
];

var Coordinate_objs = [
  [Blockly.Msg.SENTRY_ABSOLUTECOORDINATE, "kAbsoluteCoordinate"],
  [Blockly.Msg.SENTRY_PERCENTAGECOORDINATE, "kPercentageCoordinate"]
];

var vision_objs = [
  [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
  [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
  [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
  [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
  [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
  [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
  [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
  [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
  [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"],
  [Blockly.Msg.SENTRY_VISION_VISIONOBJTRACK, "Sentry2::kVisionObjTrack"],
  [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"]
];

var vision_prama_support_objs = [
  [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
  [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
  [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"]
];

var led_color_objs = [
  [Blockly.Msg.SENTRY_LED_CLOSE, "kLedClose"],
  [Blockly.Msg.SENTRY_LED_RED, "kLedRed"],
  [Blockly.Msg.SENTRY_LED_GREEN, "kLedGreen"],
  [Blockly.Msg.SENTRY_LED_YELLOW, "kLedYellow"],
  [Blockly.Msg.SENTRY_LED_BLUE, "kLedBlue"],
  [Blockly.Msg.SENTRY_LED_PURPLE, "kLedPurple"],
  [Blockly.Msg.SENTRY_LED_CYAN, "kLedCyan"],
  [Blockly.Msg.SENTRY_LED_WHITE, "kLedWhite"]
];

var zoom_level_objs = [
  [Blockly.Msg.SENTRY_ZOOM_DEFAULT, "kZoomDefault"],
  [Blockly.Msg.SENTRY_ZOOM_LEVEL1, "kZoom1"],
  [Blockly.Msg.SENTRY_ZOOM_LEVEL2, "kZoom2"],
  [Blockly.Msg.SENTRY_ZOOM_LEVEL3, "kZoom3"],
  [Blockly.Msg.SENTRY_ZOOM_LEVEL4, "kZoom4"],
  [Blockly.Msg.SENTRY_ZOOM_LEVEL5, "kZoom5"]
];

var white_balance_objs = [
  [Blockly.Msg.SENTRY_AUTO, "kAutoWhiteBalance"],
  [Blockly.Msg.SENTRY_LOCK_AWB, "kWhiteLight"],
  [Blockly.Msg.SENTRY_WHITE_LIGHT, "kYellowLight"],
  [Blockly.Msg.SENTRY_YELLOW_LIGHT, "kWhiteBalanceCalibrating"]
];

var vision_res_objs = [
  [Blockly.Msg.SENTRY_STATE_VALUE_X, "XValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_Y, "kYValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "kWidthValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "kHeightValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "kLabel"]
];

var vision_color_objs = [
  [Blockly.Msg.SENTRY_STATE_VALUE_R, "kRValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_G, "kGValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_B, "kBValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "kLabel"]
];


var vision_blod_objs = [
  [Blockly.Msg.SENTRY_COLOR_BLACK, "Sentry2::kColorBlack"],
  [Blockly.Msg.SENTRY_COLOR_WHITE, "Sentry2::kColorWhite"],
  [Blockly.Msg.SENTRY_COLOR_RED, "Sentry2::kColorRed"],
  [Blockly.Msg.SENTRY_COLOR_GREEN, "Sentry2::kColorGreen"],
  [Blockly.Msg.SENTRY_COLOR_BLUE, "Sentry2::kColorBlue"],
  [Blockly.Msg.SENTRY_COLOR_YELLOW, "Sentry2::kColorYellow"]
];

var vision_20class_objs = [
  [Blockly.Msg.SENTRY_CLASS20_AIRPLANE, "Sentry2::kAirplane"],
  [Blockly.Msg.SENTRY_CLASS20_BICYCLE, "Sentry2::kBicycle"],
  [Blockly.Msg.SENTRY_CLASS20_BIRD, "Sentry2::kBird"],
  [Blockly.Msg.SENTRY_CLASS20_BOAT, "Sentry2::kBoat"],
  [Blockly.Msg.SENTRY_CLASS20_BOTTLE, "Sentry2::kBottle"],
  [Blockly.Msg.SENTRY_CLASS20_BUS, "Sentry2::kBus"],
  [Blockly.Msg.SENTRY_CLASS20_CAR, "Sentry2::kCar"],
  [Blockly.Msg.SENTRY_CLASS20_CAT, "Sentry2::kCat"],
  [Blockly.Msg.SENTRY_CLASS20_CHAIR, "Sentry2::kChair"],
  [Blockly.Msg.SENTRY_CLASS20_COW, "Sentry2::kCow"],
  [Blockly.Msg.SENTRY_CLASS20_TABLE, "Sentry2::kTable"],
  [Blockly.Msg.SENTRY_CLASS20_DOG, "Sentry2::kDog"],
  [Blockly.Msg.SENTRY_CLASS20_HORSE, "Sentry2::kHorse"],
  [Blockly.Msg.SENTRY_CLASS20_MOTORBIKE, "Sentry2::kMotorBike"],
  [Blockly.Msg.SENTRY_CLASS20_PERSON, "Sentry2::kPerson"],
  [Blockly.Msg.SENTRY_CLASS20_PLANT, "Sentry2::kPlant"],
  [Blockly.Msg.SENTRY_CLASS20_SHEEP, "Sentry2::kSheep"],
  [Blockly.Msg.SENTRY_CLASS20_SOFA, "Sentry2::kSofa"],
  [Blockly.Msg.SENTRY_CLASS20_TRAIN, "Sentry2::kTrain"],
  [Blockly.Msg.SENTRY_CLASS20_MONITOR, "Sentry2::kMonitor"]
];


var vision_card_objs = [
  [Blockly.Msg.SENTRY_CARD_FORWARD, "Sentry2::kCardForward"],
  [Blockly.Msg.SENTRY_CARD_LEFT, "Sentry2::kCardLeft"],
  [Blockly.Msg.SENTRY_CARD_RIGHT, "Sentry2::kCardRight"],
  [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "Sentry2::kCardTurnAround"],
  [Blockly.Msg.SENTRY_CARD_PARK, "Sentry2::kCardPark"],
  [Blockly.Msg.SENTRY_CARD_GREEN_LIGHT, "Sentry2::kCardGreenLight"],
  [Blockly.Msg.SENTRY_CARD_RED_LIGHT, "Sentry2::kCardRedLight"],
  [Blockly.Msg.SENTRY_CARD_SPEED_40, "Sentry2::kCardSpeed40"],
  [Blockly.Msg.SENTRY_CARD_SPEED_60, "Sentry2::kCardSpeed60"],
  [Blockly.Msg.SENTRY_CARD_SPEED_80, "Sentry2::kCardSpeed80"],
  [Blockly.Msg.SENTRY_CARD_CHECK, "Sentry2::kCardCheck"],
  [Blockly.Msg.SENTRY_CARD_CROSS, "Sentry2::kCardCross"],
  [Blockly.Msg.SENTRY_CARD_CIRCLE, "Sentry2::kCardCircle"],
  [Blockly.Msg.SENTRY_CARD_SQUARE, "Sentry2::kCardSquare"],
  [Blockly.Msg.SENTRY_CARD_TRIANGLE, "Sentry2::kCardTriangle"],
  [Blockly.Msg.SENTRY_CARD_PLUS, "Sentry2::kCardPlus"],
  [Blockly.Msg.SENTRY_CARD_MINUS, "Sentry2::kCardMinus"],
  [Blockly.Msg.SENTRY_CARD_DIVIDE, "Sentry2::kCardDivide"],
  [Blockly.Msg.SENTRY_CARD_EQUAL, "Sentry2::kCardEqual"],
  [Blockly.Msg.SENTRY_CARD_1, "Sentry2::kCardOne"],
  [Blockly.Msg.SENTRY_CARD_2, "Sentry2::kCardTwo"],
  [Blockly.Msg.SENTRY_CARD_3, "Sentry2::kCardThree"],
  [Blockly.Msg.SENTRY_CARD_4, "Sentry2::kCardFour"],
  [Blockly.Msg.SENTRY_CARD_5, "Sentry2::kCardFive"],
  [Blockly.Msg.SENTRY_CARD_6, "Sentry2::kCardSix"],
  [Blockly.Msg.SENTRY_CARD_7, "Sentry2::kCardSeven"],
  [Blockly.Msg.SENTRY_CARD_8, "Sentry2::kCardEight"],
  [Blockly.Msg.SENTRY_CARD_9, "Sentry2::kCardNine"],
  [Blockly.Msg.SENTRY_CARD_0, "Sentry2::kCardZero"],
  [Blockly.Msg.SENTRY_CARD_A, "Sentry2::kCardA"],
  [Blockly.Msg.SENTRY_CARD_B, "Sentry2::kCardB"],
  [Blockly.Msg.SENTRY_CARD_C, "Sentry2::kCardC"],
  [Blockly.Msg.SENTRY_CARD_D, "Sentry2::kCardD"],
  [Blockly.Msg.SENTRY_CARD_E, "Sentry2::kCardE"],
  [Blockly.Msg.SENTRY_CARD_F, "Sentry2::kCardF"],
  [Blockly.Msg.SENTRY_CARD_G, "Sentry2::kCardG"],
  [Blockly.Msg.SENTRY_CARD_H, "Sentry2::kCardH"],
  [Blockly.Msg.SENTRY_CARD_I, "Sentry2::kCardI"],
  [Blockly.Msg.SENTRY_CARD_J, "Sentry2::kCardJ"],
  [Blockly.Msg.SENTRY_CARD_K, "Sentry2::kCardK"],
  [Blockly.Msg.SENTRY_CARD_L, "Sentry2::kCardL"],
  [Blockly.Msg.SENTRY_CARD_M, "Sentry2::kCardM"],
  [Blockly.Msg.SENTRY_CARD_N, "Sentry2::kCardN"],
  [Blockly.Msg.SENTRY_CARD_O, "Sentry2::kCardO"],
  [Blockly.Msg.SENTRY_CARD_P, "Sentry2::kCardP"],
  [Blockly.Msg.SENTRY_CARD_Q, "Sentry2::kCardQ"],
  [Blockly.Msg.SENTRY_CARD_R, "Sentry2::kCardR"],
  [Blockly.Msg.SENTRY_CARD_S, "Sentry2::kCardS"],
  [Blockly.Msg.SENTRY_CARD_T, "Sentry2::kCardT"],
  [Blockly.Msg.SENTRY_CARD_U, "Sentry2::kCardU"],
  [Blockly.Msg.SENTRY_CARD_V, "Sentry2::kCardV"],
  [Blockly.Msg.SENTRY_CARD_W, "Sentry2::kCardW"],
  [Blockly.Msg.SENTRY_CARD_X, "Sentry2::kCardX"],
  [Blockly.Msg.SENTRY_CARD_Y, "Sentry2::kCardY"],
  [Blockly.Msg.SENTRY_CARD_Z, "Sentry2::kCardZ"]
];

/*
var vision_traffic_card_objs = [
  [Blockly.Msg.SENTRY_CARD_FORWARD, "Sentry2::kCardForward"],
  [Blockly.Msg.SENTRY_CARD_LEFT, "Sentry2::kCardLeft"],
  [Blockly.Msg.SENTRY_CARD_RIGHT, "Sentry2::kCardRight"],
  [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "Sentry2::kCardTurnAround"],
  [Blockly.Msg.SENTRY_CARD_PARK, "Sentry2::kCardPark"],
  [Blockly.Msg.SENTRY_CARD_GREEN_LIGHT, "Sentry2::kCardGreenLight"],
  [Blockly.Msg.SENTRY_CARD_RED_LIGHT, "Sentry2::kCardRedLight"],
  [Blockly.Msg.SENTRY_CARD_SPEED_40, "Sentry2::kCardSpeed40"],
  [Blockly.Msg.SENTRY_CARD_SPEED_60, "Sentry2::kCardSpeed60"],
  [Blockly.Msg.SENTRY_CARD_SPEED_80, "Sentry2::kCardSpeed80"]
];
var vision_symbol_card_objs = [
  [Blockly.Msg.SENTRY_CARD_CHECK, "Sentry2::kCardCheck"],
  [Blockly.Msg.SENTRY_CARD_CROSS, "Sentry2::kCardCross"],
  [Blockly.Msg.SENTRY_CARD_CIRCLE, "Sentry2::kCardCircle"],
  [Blockly.Msg.SENTRY_CARD_SQUARE, "Sentry2::kCardSquare"],
  [Blockly.Msg.SENTRY_CARD_TRIANGLE, "Sentry2::kCardTriangle"],
  [Blockly.Msg.SENTRY_CARD_PLUS, "Sentry2::kCardPlus"],
  [Blockly.Msg.SENTRY_CARD_MINUS, "Sentry2::kCardMinus"],
  [Blockly.Msg.SENTRY_CARD_DIVIDE, "Sentry2::kCardDivide"],
  [Blockly.Msg.SENTRY_CARD_EQUAL, "Sentry2::kCardEqual"],
];
var vision_number_card_objs = [
  [Blockly.Msg.SENTRY_CARD_1, "Sentry2::kCardOne"],
  [Blockly.Msg.SENTRY_CARD_2, "Sentry2::kCardTwo"],
  [Blockly.Msg.SENTRY_CARD_3, "Sentry2::kCardThree"],
  [Blockly.Msg.SENTRY_CARD_4, "Sentry2::kCardFour"],
  [Blockly.Msg.SENTRY_CARD_5, "Sentry2::kCardFive"],
  [Blockly.Msg.SENTRY_CARD_6, "Sentry2::kCardSix"],
  [Blockly.Msg.SENTRY_CARD_7, "Sentry2::kCardSeven"],
  [Blockly.Msg.SENTRY_CARD_8, "Sentry2::kCardEight"],
  [Blockly.Msg.SENTRY_CARD_9, "Sentry2::kCardNine"],
  [Blockly.Msg.SENTRY_CARD_0, "Sentry2::kCardZero"],
];
var vision_char_card_objs = [
  [Blockly.Msg.SENTRY_CARD_A, "Sentry2::kCardA"],
  [Blockly.Msg.SENTRY_CARD_B, "Sentry2::kCardB"],
  [Blockly.Msg.SENTRY_CARD_C, "Sentry2::kCardC"],
  [Blockly.Msg.SENTRY_CARD_D, "Sentry2::kCardD"],
  [Blockly.Msg.SENTRY_CARD_E, "Sentry2::kCardE"],
  [Blockly.Msg.SENTRY_CARD_F, "Sentry2::kCardF"],
  [Blockly.Msg.SENTRY_CARD_G, "Sentry2::kCardG"],
  [Blockly.Msg.SENTRY_CARD_H, "Sentry2::kCardH"],
  [Blockly.Msg.SENTRY_CARD_I, "Sentry2::kCardI"],
  [Blockly.Msg.SENTRY_CARD_J, "Sentry2::kCardJ"],
  [Blockly.Msg.SENTRY_CARD_K, "Sentry2::kCardK"],
  [Blockly.Msg.SENTRY_CARD_L, "Sentry2::kCardL"],
  [Blockly.Msg.SENTRY_CARD_M, "Sentry2::kCardM"],
  [Blockly.Msg.SENTRY_CARD_N, "Sentry2::kCardN"],
  [Blockly.Msg.SENTRY_CARD_O, "Sentry2::kCardO"],
  [Blockly.Msg.SENTRY_CARD_P, "Sentry2::kCardP"],
  [Blockly.Msg.SENTRY_CARD_Q, "Sentry2::kCardQ"],
  [Blockly.Msg.SENTRY_CARD_R, "Sentry2::kCardR"],
  [Blockly.Msg.SENTRY_CARD_S, "Sentry2::kCardS"],
  [Blockly.Msg.SENTRY_CARD_T, "Sentry2::kCardT"],
  [Blockly.Msg.SENTRY_CARD_U, "Sentry2::kCardU"],
  [Blockly.Msg.SENTRY_CARD_V, "Sentry2::kCardV"],
  [Blockly.Msg.SENTRY_CARD_W, "Sentry2::kCardW"],
  [Blockly.Msg.SENTRY_CARD_X, "Sentry2::kCardX"],
  [Blockly.Msg.SENTRY_CARD_Y, "Sentry2::kCardY"],
  [Blockly.Msg.SENTRY_CARD_Z, "Sentry2::kCardZ"]
];
var vision_card_objs = [
  [Blockly.Msg.SENTRY_CARD_TRAFFIC, 'traffic'],
  [Blockly.Msg.SENTRY_CARD_SYMBOL, 'symbol'],
  [Blockly.Msg.SENTRY_CARD_NUMBER, 'number'],
  [Blockly.Msg.SENTRY_CARD_CHAR, 'char']
];

var vision_card_dict = {
  'traffic': vision_traffic_card_objs,
  'symbol': vision_symbol_card_objs,
  'number': vision_number_card_objs,
  'char': vision_char_card_objs,
};
*/

var vision_obj_card_dict = {
  "Sentry2::kVisionBlob": vision_blod_objs,
  "Sentry2::kVisionCard": vision_card_objs,
  "Sentry2::kVision20Classes": vision_20class_objs
}


Blockly.Blocks['SentryBegin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_BEGIN)
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_PORT)
      .appendField(new Blockly.FieldDropdown(mode_objs), "mode_obj");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl();
  }
};

// 恢复默认设置
Blockly.Blocks["SentrySetDefault"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET_DEFAULT)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_SET_DEFAULT);
  }
};

// 坐标系设置
Blockly.Blocks["SentrySetCoordinateType"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(Blockly.Msg.SENTRY_SET_COORDINATE)
      .appendField(new Blockly.FieldDropdown(Coordinate_objs), "coord_obj")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_SET_COORDINATE);
    this.setHelpUrl("");
  }
};

// 启用算法
Blockly.Blocks["SentryVisionSetStatus"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(new Blockly.FieldDropdown(
        [
          [Blockly.Msg.SENTRY_ENABLE, "Begin"],
          [Blockly.Msg.SENTRY_DISABLE, "End"],
        ]
      ), "VisionStatus")
      .appendField(new Blockly.FieldDropdown(vision_objs), "vision_obj");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_SET_COORDINATE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks["SentryVisionSetParamNum"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(new Blockly.FieldDropdown(vision_prama_support_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_SET_PARAMNUM)
      .appendField(new Blockly.FieldNumber(1, 0, 24, 1), "num");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["SentryVisionSetParam"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown(vision_prama_support_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_SET_PARAM)
      .appendField(Blockly.Msg.SENTRY_INDEX)
      .appendField(new Blockly.FieldNumber(0, 0, 24, 1), "index");
    this.appendDummyInput("VisionParam")
    this.vision_prama_obj_ = "";
    this.generateVisionParam();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function (e) {
    var vision_obj = this.getFieldValue("vision_obj")
    if (vision_obj != this.vision_prama_obj_) {
      this.generateVisionParam();
    }
  },
  generateVisionParam: function () {
    this.vision_prama_obj_ = this.getFieldValue("vision_obj")
    this.removeInput("VisionParam");
    if (this.vision_prama_obj_ == "Sentry2::kVisionColor") {
      this.appendDummyInput("VisionParam")
        .appendField(Blockly.Msg.SENTRY_CENTER)
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_X)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "x")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_Y)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "y")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_WIDTH)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h");
      this.setWarningText();
      this.setInputsInline(false);
    }
    else if (this.vision_prama_obj_ == "Sentry2::kVisionBlob") {
      this.appendDummyInput("VisionParam")
        .appendField(Blockly.Msg.SENTRY_LEAST)
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_WIDTH)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_LABEL)
        .appendField(new Blockly.FieldDropdown(vision_blod_objs, "lable"))
      this.setWarningText();
      this.setInputsInline(false);
    }
    else if (this.vision_prama_obj_ == "Sentry2::kVisionFace") {
      this.appendDummyInput("VisionParam")
        .appendField(Blockly.Msg.SENTRY_LABLE)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "lable");
      this.setWarningText();
      this.setInputsInline(true);
      this.setInputsInline(true);
    }
    else {
      this.appendDummyInput("VisionParam")
      this.setInputsInline(true);
    }
  }
};

Blockly.Blocks["SentryLedSetColor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(Blockly.Msg.SENTRY_LED_SET_COLOR)
      .appendField(new Blockly.FieldDropdown(led_color_objs), "led_color_obj1")
      .appendField(Blockly.Msg.SENTRY_LED_SET_COLOR_NOT)
      .appendField(new Blockly.FieldDropdown(led_color_objs), "led_color_obj2")
      .appendField(Blockly.Msg.SENTRY_LED_SET_LEVEL)
      .appendField(new Blockly.FieldNumber(1, 0, 15, 1), "level");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip("");
  }
};


Blockly.Blocks['SentrySetZoom'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(Blockly.Msg.SENTRY_CAMERA_SET_ZOOM)
      .appendField(new Blockly.FieldDropdown(zoom_level_objs), "zoom_obj")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip("");
  }
};

Blockly.Blocks['SentrySetAWB'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_SET)
      .appendField(Blockly.Msg.SENTRY_CAMERA_SET_AWB)
      .appendField(new Blockly.FieldDropdown(white_balance_objs), "awb_obj")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip("");
  }
};

Blockly.Blocks["SentryVisionDetectedCount"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown(vision_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED + Blockly.Msg.SENTRY_VISION_RESULT + Blockly.Msg.SENTRY_DETECTED_NUMBER)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl("");
  }
};

Blockly.Blocks["SentryGetValue"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown(vision_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED + Blockly.Msg.SENTRY_VISION_RESULT + Blockly.Msg.SENTRY_INDEX)
    this.appendValueInput("index")
      .setCheck([Number]);
    this.vision_value_obj_ = ""
    this.generateVisionValue();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl("");
  },

  onchange: function (e) {
    var vision_obj = this.getFieldValue("vision_obj")
    if (vision_obj != this.vision_value_obj_) {
      this.removeInput("VisionValue");
      this.generateVisionValue();
    }
  },

  generateVisionValue: function () {
    this.vision_value_obj_ = this.getFieldValue("vision_obj")
    if (this.vision_value_obj_ == "Sentry2::kVisionColor") {
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(vision_color_objs), "vision_res_obj")
    }
    else {
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(vision_res_objs), "vision_res_obj")
    }
  }
};

Blockly.Blocks["SentryGetQrValue"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_GET_QRCODEVALUE)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl("");
  }
}


Blockly.Blocks["SentryVisionDetected"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
        [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
        [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
      ]), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_INDEX)
    this.appendValueInput("index")
      .setCheck([Number])
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED);
    this.appendDummyInput("VisionDetected")
    this.vision_res_obj_ = "";
    this.vision_card_obj_ = "";
    this.generateVisionDetected();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl("");
  },

  onchange: function (e) {
    var vision_obj = this.getFieldValue("vision_obj")
    if (vision_obj != this.vision_res_obj_) {
      this.generateVisionDetected();
    }
  },

  generateVisionDetected: function () {
    this.vision_res_obj_ = this.getFieldValue("vision_obj")
    this.removeInput("VisionDetected");
    this.appendDummyInput('VisionDetected')
    .appendField(new Blockly.FieldDropdown(vision_obj_card_dict[this.vision_res_obj_]), 'vision_card_obj');
  }
};

Blockly.Blocks["SentryRows"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_ROWS)
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl("");
  }
};

Blockly.Blocks["SentryCols"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(sentry_objs), "sentry_obj")
      .appendField(Blockly.Msg.SENTRY_COLS)
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    this.setHelpUrl("");
  }
};
