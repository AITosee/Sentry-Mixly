(() => {

  'use strict';

  goog.require('Blockly.Blocks');

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

  var vision_custom_objs = [
    [Blockly.Msg.SENTRY_VISION_RESULT + "1", "kXValue"],
    [Blockly.Msg.SENTRY_VISION_RESULT + "2", "kYValue"],
    [Blockly.Msg.SENTRY_VISION_RESULT + "3", "kWidthValue"],
    [Blockly.Msg.SENTRY_VISION_RESULT + "4", "kHeightValue"],
    [Blockly.Msg.SENTRY_VISION_RESULT + "5", "kLabel"]
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

  var vision_line_objs = [
    [Blockly.Msg.SENTRY_STATE_LINE_EX, "kXValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_EY, "kYValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_SX, "kWidthValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_SY, "kHeightValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_A, "kLabel"],
  ]

  var sentry1_vision_blod_objs = [
    [Blockly.Msg.SENTRY_COLOR_BLACK, "Sentry1::kColorBlack"],
    [Blockly.Msg.SENTRY_COLOR_WHITE, "Sentry1::kColorWhite"],
    [Blockly.Msg.SENTRY_COLOR_RED, "Sentry1::kColorRed"],
    [Blockly.Msg.SENTRY_COLOR_GREEN, "Sentry1::kColorGreen"],
    [Blockly.Msg.SENTRY_COLOR_BLUE, "Sentry1::kColorBlue"],
    [Blockly.Msg.SENTRY_COLOR_YELLOW, "Sentry1::kColorYellow"]
  ];

  var sentry1_vision_objs = [
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"],
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONBALL, "Sentry1::kVisionBall"],
    [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry1::kVisionLine"],
    [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry1::kVisionCard"],
    [Blockly.Msg.SENTRY_VISION_VISIONBODY, "Sentry1::kVisionBody"],
    [Blockly.Msg.SENTRY_VISION_VISIONQRCODE + Blockly.Msg.SENTRY_VISION_ENTERPRISE, "Sentry1::kVisionQrCode"],
    [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT + Blockly.Msg.SENTRY_VISION_ENTERPRISE, "Sentry1::kVisionMotionDetect"],
  ];


  var sentry1_vision_prama_support_objs = [
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"]
  ];

  var sentry1_vision_card_objs = [
    [Blockly.Msg.SENTRY_CARD_FORWARD, "Sentry1::kCardForward"],
    [Blockly.Msg.SENTRY_CARD_LEFT, "Sentry1::kCardLeft"],
    [Blockly.Msg.SENTRY_CARD_RIGHT, "Sentry1::kCardRight"],
    [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "Sentry1::kCardTurnAround"],
    [Blockly.Msg.SENTRY_CARD_PARK, "Sentry1::kCardPark"]
  ];


  var sentry1_vision_ball_objs = [
    [Blockly.Msg.SENTRY_BALLTABLETENNIS, "Sentry1::kBallTableTennis"],
    [Blockly.Msg.SENTRY_BALLTENNIS, "Sentry1::kBallTennis"],
  ];

  var sentry2_vision_blod_objs = [
    [Blockly.Msg.SENTRY_COLOR_BLACK, "Sentry2::kColorBlack"],
    [Blockly.Msg.SENTRY_COLOR_WHITE, "Sentry2::kColorWhite"],
    [Blockly.Msg.SENTRY_COLOR_RED, "Sentry2::kColorRed"],
    [Blockly.Msg.SENTRY_COLOR_GREEN, "Sentry2::kColorGreen"],
    [Blockly.Msg.SENTRY_COLOR_BLUE, "Sentry2::kColorBlue"],
    [Blockly.Msg.SENTRY_COLOR_YELLOW, "Sentry2::kColorYellow"]
  ];

  var sentry2_vision_objs = [
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
    [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
    [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
    [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
    [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
    [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
    [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"],
    [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"],
    [Blockly.Msg.SENTRY_VISION_VISIONCUSTOM, "Sentry2::kVisionCustom"]
  ];

  var sentry2_vision_custom = [
    [Blockly.Msg.SENTRY_VISION_VISIONCUSTOM, "Sentry2::kVisionCustom"],
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

  var sentry2_vision_20class_objs = [
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


  var sentry2_vision_card_objs = [
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
    [Blockly.Msg.SENTRY_CARD_0, "Sentry2::kCardZero"]
  ];

  var vision_obj_card_dict = {
    "Sentry2::kVisionBlob": sentry2_vision_blod_objs,
    "Sentry2::kVisionCard": sentry2_vision_card_objs,
    "Sentry2::kVision20Classes": sentry2_vision_20class_objs,
    "Sentry1::kVisionBlob": sentry1_vision_blod_objs,
    "Sentry1::kVisionCard": sentry1_vision_card_objs,
    "Sentry1::kVisionBall": sentry1_vision_ball_objs,
  };

  Blockly.Blocks['Sentry1Begin'] = {
    init: function () {
      var mode_objs = [["I2C", "Wire"]].concat(profile.default.serial_select);
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_BEGIN)
        .appendField(Blockly.Msg.SENTRY1_NAME)
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
      this.setColour("#EF5411");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);
    }
  };

  // 恢复默认设置
  Blockly.Blocks["Sentry1SetDefault"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_SET_DEFAULT)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_SET_DEFAULT);
    }
  };

  Blockly.Blocks["Sentry1LedSetColor"] = {
    init: function () {
      var led_color = ['#fff', '#000', '#f00', '#0f0', '#ff0', '#00f', '#f0f', '#0ff'];
      var color_detected = new Blockly.FieldColour('#0000ff');
      color_detected.setColours(led_color).setColumns(4);
      var color_undetected = new Blockly.FieldColour('#ff0000');
      color_undetected.setColours(led_color).setColumns(4);

      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_LED_SET_COLOR)
        .appendField(color_detected, "led_color_obj1")
        .appendField(Blockly.Msg.SENTRY_LED_SET_COLOR_NOT)
        .appendField(color_undetected, "led_color_obj2")
        .appendField(Blockly.Msg.SENTRY_LED_SET_LEVEL);
      this.appendValueInput("level")
        .setCheck([Number]);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_LED);
    }
  };


  // 启用算法
  Blockly.Blocks["Sentry1VisionSetStatus"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY1_NAME)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.Msg.SENTRY_ENABLE, "Begin"],
            [Blockly.Msg.SENTRY_DISABLE, "End"],
          ]
        ), "VisionStatus")
        .appendField(new Blockly.FieldDropdown(sentry1_vision_objs), "vision_obj");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['Sentry1SetAWB'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY1_NAME + Blockly.Msg.SENTRY_CAMERA_SET_AWB)
        .appendField(new Blockly.FieldDropdown(white_balance_objs), "awb_obj")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks["Sentry1VisionSetParamNum"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry1_vision_prama_support_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_SET_PARAMNUM)
        .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "num");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['Sentry1VisionColorSetParam'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"]]), "vision_obj")
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
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['Sentry1VisionBlobSetParam'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"]]), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM)
      this.appendDummyInput("VisionParam")
        .appendField(Blockly.Msg.SENTRY_LEAST)
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_WIDTH)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_LABEL)
        .appendField(new Blockly.FieldDropdown(sentry1_vision_blod_objs), "lable")
        .appendField(Blockly.Msg.SENTRY_INDEX)
        .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "index");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };


  Blockly.Blocks["Sentry1VisionGetStatus"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry1_vision_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_STATUS)
      this.setOutput(true, Number);
      this.setColour("#EAA20A");
    }
  };

  Blockly.Blocks["Sentry1VisionDetectedCount"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry1_vision_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED + Blockly.Msg.SENTRY_VISION_RESULT + Blockly.Msg.SENTRY_DETECTED_NUMBER)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#EAA20A");
    }
  };

  Blockly.Blocks['Sentry1VisionObj'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"],
        [Blockly.Msg.SENTRY_VISION_VISIONBALL, "Sentry1::kVisionBall"],
        [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry1::kVisionCard"],
        [Blockly.Msg.SENTRY_VISION_VISIONBODY, "Sentry1::kVisionBody"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_res_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['Sentry1VisionObjColor'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_color_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['Sentry1VisionObjLine'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry1::kVisionLine"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_line_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['Sentry1VisionObjQr'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONQRCODE + Blockly.Msg.SENTRY_VISION_ENTERPRISE, "Sentry1::kVisionQrCode"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_qr_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks["Sentry1GetValue"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
      this.appendValueInput("sentry_value_obj")
        .setCheck([Array]);
      this.appendValueInput("index")
        .setCheck([Number])
        .appendField(Blockly.Msg.SENTRY_INDEX);
      this.setInputsInline(true);
      this.setOutput(true, Number);
      this.setColour("#EAA20A");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_GET_VISION_VALUE);
    }
  };

  Blockly.Blocks["Sentry1GetQrValue"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY1_NAME)
        .appendField(Blockly.Msg.SENTRY_GET_QRCODEVALUE)
      this.setInputsInline(true);
      this.setOutput(true, String);
      this.setColour("#EAA20A");
    }
  }

  Blockly.Blocks['Sentry1VisionColor'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry1::kVisionBlob"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['Sentry1VisionCardBlob'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry1::kVisionBlob"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['Sentry1VisionCard'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry1::kVisionCard"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry1::kVisionCard"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['Sentry1VisionBall'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONBALL, "Sentry1::kVisionBall"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry1::kVisionBall"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks["Sentry1VisionDetected"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY1_NAME)
      this.appendValueInput("sentry_detected_obj")
        .setCheck([Array])
        .appendField(Blockly.Msg.SENTRY_VISION);
      this.appendValueInput("index")
        .setCheck([Number])
        .appendField(Blockly.Msg.SENTRY_INDEX);
      this.appendDummyInput("VisionDetected")
      this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setColour("#EAA20A");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_DETECTED_VISION_VALUE);
    }
  };

  // Sentry2
  Blockly.Blocks['SentryBegin'] = {
    init: function () {
      var mode_objs = [["I2C", "Wire"]].concat(profile.default.serial_select);
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_BEGIN)
        .appendField(Blockly.Msg.SENTRY2_NAME)
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
      this.setColour("#EF5411");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_INIT_TOOLTIP);

    }
  };

  // 恢复默认设置
  Blockly.Blocks["SentrySetDefault"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_SET_DEFAULT)
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_SET_DEFAULT);
    }
  };

  // 启用算法
  Blockly.Blocks["SentryVisionSetStatus"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY2_NAME)
        .appendField(new Blockly.FieldDropdown(
          [
            [Blockly.Msg.SENTRY_ENABLE, "Begin"],
            [Blockly.Msg.SENTRY_DISABLE, "End"],
          ]
        ), "VisionStatus")
        .appendField(new Blockly.FieldDropdown(sentry2_vision_objs), "vision_obj");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['SentrySetAWB'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY2_NAME + Blockly.Msg.SENTRY_CAMERA_SET_AWB)
        .appendField(new Blockly.FieldDropdown(white_balance_objs), "awb_obj")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };



  Blockly.Blocks["SentryVisionSetParamNum"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry2_vision_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_SET_PARAMNUM)
        .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "num");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['SentryVisionColorSetParam'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY2_NAME)
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
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['SentryVisionBlobSetParam'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"]]), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM)
      this.appendDummyInput("VisionParam")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_WIDTH)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT)
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h")
        .appendField(Blockly.Msg.SENTRY_STATE_VALUE_LABEL)
        .appendField(new Blockly.FieldDropdown(sentry2_vision_blod_objs), "lable")
        .appendField(Blockly.Msg.SENTRY_INDEX)
        .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "index");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks['SentryVisionSetParam'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY_SET + Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry2_vision_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM)
      this.appendDummyInput("VisionParam")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM + "1")
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "x")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM + "2")
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "y")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM + "3")
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "w")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM + "4")
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "h")
        .appendField(Blockly.Msg.SENTRY_SET_PARAM + "5")
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 1), "lable")
        .appendField(Blockly.Msg.SENTRY_INDEX)
        .appendField(new Blockly.FieldNumber(1, 1, 25, 1), "index");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EF5411");
    }
  };

  Blockly.Blocks["SentryVisionGetStatus"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry2_vision_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_STATUS)
      this.setOutput(true, Number);
      this.setColour("#EAA20A");
    }
  };

  Blockly.Blocks["SentryVisionDetectedCount"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
        .appendField(new Blockly.FieldDropdown(sentry2_vision_objs), "vision_obj")
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED + Blockly.Msg.SENTRY_VISION_RESULT + Blockly.Msg.SENTRY_DETECTED_NUMBER)
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#EAA20A");
    }
  };


  Blockly.Blocks['SentryVisionObjColor'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_color_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['SentryVisionObjLine'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_line_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['SentryVisionObjQr'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_qr_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['SentryVisionObj'] = {
    init: function () {
      var _vision_objs = [
        [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
        [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
        [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
        [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
        [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
        [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
        [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"]
      ];

      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(_vision_objs), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_res_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['SentryVisionCustom'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown(sentry2_vision_custom), 'vision_obj')
        .appendField(new Blockly.FieldDropdown(vision_custom_objs), "vision_res_obj");
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks["SentryGetValue"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_VISION)
      this.appendValueInput("sentry_value_obj")
        .setCheck([Array]);
      this.appendValueInput("index")
        .setCheck([Number])
        .appendField(Blockly.Msg.SENTRY_INDEX);
      this.setInputsInline(true);
      this.setOutput(true, Number);
      this.setColour("#EAA20A");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_GET_VISION_VALUE);
    }
  };

  Blockly.Blocks["SentryGetQrValue"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY2_NAME)
        .appendField(Blockly.Msg.SENTRY_GET_QRCODEVALUE)
      this.setInputsInline(true);
      this.setOutput(true, String);
      this.setColour("#EAA20A");
    }
  }

  Blockly.Blocks['SentryVisionColor'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVisionBlob"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };


  Blockly.Blocks['SentryVisionCardBlob'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVisionBlob"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['SentryVisionCard'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"]
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVisionCard"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks['SentryVisionCard20Classes'] = {
    init: function () {
      
      this.appendDummyInput("VisionValue")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
        ]), 'vision_obj')
        .appendField(Blockly.Msg.SENTRY_VISION_DETECTED)
        .appendField(new Blockly.FieldDropdown(vision_obj_card_dict["Sentry2::kVision20Classes"]), 'vision_card_obj')
      this.setOutput(true, [Array]);
      this.setInputsInline(true);
      this.setColour("#EAA20A");
      this.setMovable(false);
      this.setDeletable(false);
    }
  };

  Blockly.Blocks["SentryVisionDetected"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.SENTRY2_NAME)
      this.appendValueInput("sentry_detected_obj")
        .setCheck([Array])
        .appendField(Blockly.Msg.SENTRY_VISION);
      this.appendValueInput("index")
        .setCheck([Number])
        .appendField(Blockly.Msg.SENTRY_INDEX);
      this.appendDummyInput("VisionDetected")
      this.setInputsInline(true);
      this.setOutput(true, Boolean);
      this.setColour("#EAA20A");
      this.setTooltip(Blockly.Msg.SENTRY_HELP_DETECTED_VISION_VALUE);
    }
  };

})();