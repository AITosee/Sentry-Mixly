//下列三行代码,为刚需,此提供了下列所有代码的入口
'use strict';
goog.provide('Blockly.Blocks.Sentry');//注意脚本类别及路径名称
goog.require('Blockly.Blocks');

Blockly.Blocks.Sentry.SetupMode_Color = "#EF5411";
Blockly.Blocks.Sentry.RunMode_Color = "#EAA20A";

var Coordinate_objs = [
  [Blockly.Msg.SENTRY_ABSOLUTECOORDINATE, "kAbsoluteCoordinate"],
  [Blockly.Msg.SENTRY_PERCENTAGECOORDINATE, "kPercentageCoordinate"]
];

var vision_objs = [
  [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
  [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
  [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
  [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
  [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
  [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
  [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
  [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
  [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"],
  [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"]
];

var vision_prama_support_objs = [
  [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
  [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"]
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
  [Blockly.Msg.SENTRY_STATE_VALUE_X, "kXValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_Y, "kYValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "kWidthValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "kHeightValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "kLabel"]
];

var vision_qr_objs = [
  [Blockly.Msg.SENTRY_STATE_VALUE_X, "kXValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_Y, "kYValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "kWidthValue"],
  [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "kHeightValue"]
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

var vision_obj_card_dict = {
  "Sentry2::kVisionBlob": vision_blod_objs,
  "Sentry2::kVisionCard": vision_card_objs,
  "Sentry2::kVision20Classes": vision_20class_objs
}

Blockly.Blocks['SentryBegin'] = {
  init: function () {
    var mode_objs = [["I2C", "Wire"]].concat(profile.default.serial_select);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_BEGIN)
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_PORT)
      .appendField(new Blockly.FieldDropdown(mode_objs), "mode_obj")
      .appendField(Blockly.Msg.SENTRY_ADDR)
      .appendField(new Blockly.FieldDropdown([['0x60', '0x60'],
      ['0x61', '0x61'],
      ['0x62', '0x62'],
      ['0x63', '0x63']]), "addr_obj");
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
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_SET_DEFAULT)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_SET_DEFAULT);
  }
};

// 启用算法
Blockly.Blocks["SentryVisionSetStatus"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY_NAME)
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
  }
};

Blockly.Blocks["SentryVisionSetParamNum"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY_NAME)
      .appendField(new Blockly.FieldDropdown(vision_prama_support_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_SET_PARAMNUM)
      .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "num");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
  }
};

Blockly.Blocks['SentryVisionColorSetParam'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"]]), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_SET_PARAM);
    this.appendDummyInput("VisionParam")
      .appendField(Blockly.Msg.SENTRY_CENTER)
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_X)
      .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "x")
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_Y)
      .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "y")
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_WIDTH)
      .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT)
      .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h")
      .appendField(Blockly.Msg.SENTRY_INDEX)
      .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "index");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
  }
};

Blockly.Blocks['SentryVisionBlobSetParam'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"]]), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_SET_PARAM)
    this.appendDummyInput("VisionParam")
      .appendField(Blockly.Msg.SENTRY_LEAST)
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_WIDTH)
      .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT)
      .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h")
      .appendField(Blockly.Msg.SENTRY_STATE_VALUE_LABEL)
      .appendField(new Blockly.FieldDropdown(vision_blod_objs), "lable")
      .appendField(Blockly.Msg.SENTRY_INDEX)
      .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "index");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Sentry.SetupMode_Color);
  }
};


Blockly.Blocks["SentryVisionGetStatus"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown(vision_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_STATUS)
    this.setOutput(true, Number);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
  }
};

Blockly.Blocks["SentryVisionDetectedCount"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_VISION)
      .appendField(new Blockly.FieldDropdown(vision_objs), "vision_obj")
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED + Blockly.Msg.SENTRY_VISION_RESULT + Blockly.Msg.SENTRY_DETECTED_NUMBER)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
  }
};

Blockly.Blocks['SentryVisionObj'] = {
  init: function () {
    var _vision_objs = [
      [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
      [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
      [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
      [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
      [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
      [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
      [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
      [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
      [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"],

      [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"]
    ];

    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
      .appendField(new Blockly.FieldDropdown(vision_color_objs), "vision_res_obj");
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  },
  updateShape: function (add) {
    this.removeInput('VisionValue');
    let dummyObj = this.appendDummyInput('VisionValue');
    dummyObj.appendField(new Blockly.FieldDropdown(vision_objs), 'vision_obj');

    if (add == 'Sentry2::kVisionColor') {
      dummyObj.appendField(new Blockly.FieldDropdown(vision_color_objs), "vision_res_obj");
    } else if (add == 'Sentry2::kVisionQrCode') {
      dummyObj.appendField(new Blockly.FieldDropdown(vision_qr_objs), "vision_res_obj");
    } else {
      dummyObj.appendField(new Blockly.FieldDropdown(vision_res_objs), "vision_res_obj");
    }
  }
};

Blockly.Blocks['SentryVisionObjColor'] = {
  init: function () {
    var _vision_objs = [
      [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"]
    ];

    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
      .appendField(new Blockly.FieldDropdown(vision_color_objs), "vision_res_obj");
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  }
};

Blockly.Blocks['SentryVisionObjQr'] = {
  init: function () {
    var _vision_objs = [
      [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"]
    ];

    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
      .appendField(new Blockly.FieldDropdown(vision_qr_objs), "vision_res_obj");
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  }
};

Blockly.Blocks['SentryVisionObj'] = {
  init: function () {
    var _vision_objs = [
      [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
      [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
      [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
      [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
      [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
      [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
      [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],

      [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"]
    ];

    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
      .appendField(new Blockly.FieldDropdown(vision_res_objs), "vision_res_obj");
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  }
};

Blockly.Blocks["SentryGetValue"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_VISION)
    this.appendValueInput("sentry_value_obj")
      .setCheck([Array]);
    this.appendValueInput("index")
      .setCheck([Number])
      .appendField(Blockly.Msg.SENTRY_INDEX);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_GET_VISION_VALUE);
  }
};

Blockly.Blocks["SentryGetQrValue"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_GET_QRCODEVALUE)
    this.setInputsInline(true);
    this.setOutput(true, String);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
  }
}

Blockly.Blocks['SentryVisionCardBlob'] = {
  init: function () {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"]
      ]), 'vision_obj')
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
      .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVisionBlob"]), 'vision_card_obj')
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  }
};

Blockly.Blocks['SentryVisionCard'] = {
  init: function () {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"]
      ]), 'vision_obj')
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
      .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVisionCard"]), 'vision_card_obj')
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  }
};

Blockly.Blocks['SentryVisionCard20Classes'] = {
  init: function () {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("VisionValue")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
      ]), 'vision_obj')
      .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
      .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVision20Classes"]), 'vision_card_obj')
    this.setOutput(true, [Array]);
    this.setInputsInline(true);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setMovable(false);
    this.setDeletable(false);
  }
};

Blockly.Blocks["SentryVisionDetected"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
    this.appendValueInput("sentry_detected_obj")
      .setCheck([Array])
      .appendField(Blockly.Msg.SENTRY_VISION);
    this.appendValueInput("index")
      .setCheck([Number])
      .appendField(Blockly.Msg.SENTRY_INDEX);
    this.appendDummyInput("VisionDetected")
    this.setInputsInline(true);
    this.setOutput(true, Boolean);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
    this.setTooltip(Blockly.Msg.SENTRY_HELP_DETECTED_VISION_VALUE);
  }
};

Blockly.Blocks["SentryRows"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_ROWS)
    this.setOutput(true, Number);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
  }
};

Blockly.Blocks["SentryCols"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SENTRY_NAME)
      .appendField(Blockly.Msg.SENTRY_COLS)
    this.setOutput(true, Number);
    this.setColour(Blockly.Blocks.Sentry.RunMode_Color);
  }
};
