'use strict';

goog.provide('Blockly.Blocks.Sentry');

goog.require('Blockly.Arduino');

Blockly.Arduino['SentrySetup'] = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'SENTRY_SETUP_BLOCK');
    branch = branch.replace(/  /g, "");   //去除所有空格

    return branch;
};


Blockly.Arduino['SentryVisionObj'] = 
Blockly.Arduino['Sentry1VisionObj'] = 
Blockly.Arduino['SentryVisionObjColor'] = 
Blockly.Arduino['Sentry1VisionObjColor'] = 
Blockly.Arduino['SentryVisionObjLine'] = 
Blockly.Arduino['Sentry1VisionObjLine'] = 
Blockly.Arduino['SentryVisionObjQr'] = function () {
    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var dropdown_res_obj = this.getFieldValue('vision_res_obj');
    return [[dropdown_vision_obj, dropdown_res_obj], Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Sentry1VisionCardColor'] = 
Blockly.Arduino['Sentry1VisionCardBlob'] = 
Blockly.Arduino['Sentry1VisionCard'] = 
Blockly.Arduino['Sentry1VisionBall'] = 
Blockly.Arduino['SentryVisionCardColor'] = 
Blockly.Arduino['SentryVisionCardBlob'] = 
Blockly.Arduino['SentryVisionCard'] = 
Blockly.Arduino['SentryVisionCard20Classes'] = function () {
    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var dropdown_lable_obj = this.getFieldValue('vision_card_obj');
    return [[dropdown_vision_obj, dropdown_lable_obj], Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Sentry1Begin'] = function () {

    var dropdown_mode_obj = this.getFieldValue('mode_obj');
    var dropdown_addr_obj = this.getFieldValue('addr_obj');

    Blockly.Arduino.definitions_["include_Sentry"] = "#include <Sentry.h>";
    Blockly.Arduino.definitions_[`var_declare_Sentry1`] = `Sentry1 sentry1(${dropdown_addr_obj});`;

    if (dropdown_mode_obj == 'Wire') {
        Blockly.Arduino.definitions_["include_Wire"] = "#include <Wire.h>";
        Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
    }

    var code = `while (SENTRY_OK != sentry1.begin(&${dropdown_mode_obj})) {yield();}\n`;

    return code;
};

Blockly.Arduino['Sentry1SetDefault'] = function () {


    return `sentry1.SensorSetDefault();\n`;
};

Blockly.Arduino['Sentry1SetCoordinateType'] = function () {

    var dropdown_coord_obj = this.getFieldValue('coord_obj');
    return `sentry1.SeneorSetCoordinateType(${dropdown_coord_obj});\n`;
};

Blockly.Arduino['Sentry1VisionSetStatus'] = function () {

    var dropdown_VisionStatus = this.getFieldValue('VisionStatus');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    return `sentry1.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`;
};

Blockly.Arduino['Sentry1VisionSetParamNum'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var input_num = this.getFieldValue('num');

    return `sentry1.SetParamNum(${dropdown_vision_obj},${input_num});\n`;
};

Blockly.Arduino['Sentry1VisionBlobSetParam'] = Blockly.Arduino['Sentry1VisionColorSetParam'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var input_index = this.getFieldValue('index');
    var input_x = this.getFieldValue('x');
    var input_y = this.getFieldValue('y');
    var input_w = this.getFieldValue('w');
    var input_h = this.getFieldValue('h');
    var input_l = this.getFieldValue('lable');

    Blockly.Arduino.definitions_["param_obj"] = "sentry_object_t param;\n";

    var code = "\n"
    if (input_x != null) code += `param.x_value = ${input_x};\n`;
    if (input_y != null) code += `param.y_value = ${input_y};\n`;
    if (input_w != null) code += `param.width = ${input_w};\n`;
    if (input_h != null) code += `param.height = ${input_h};\n`;
    if (input_l != null) code += `param.label = ${input_l};\n`;

    code += `sentry1.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code;
};

Blockly.Arduino['Sentry1LedSetColor'] = function () {
    var color_dic = {
        '#000000': 'kLedClose', '#ff0000': 'kLedRed', '#00ff00': 'kLedGreen',
        '#ffff00': 'kLedYellow', '#0000ff': 'kLedBlue', '#ff00ff': 'kLedPurple',
        '#00ffff': 'kLedCyan', '#ffffff': 'kLedWhite'
    };


    var dropdown_led_color_obj1 = color_dic[this.getFieldValue('led_color_obj1')];
    var dropdown_led_color_obj2 = color_dic[this.getFieldValue('led_color_obj2')];

    var input_level = Blockly.Arduino.valueToCode(this, "level", Blockly.Arduino.ORDER_ATOMIC) || '1';

    return `sentry1.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`;
};

Blockly.Arduino['Sentry1SetZoom'] = function () {

    var dropdown_zoom_obj = this.getFieldValue('zoom_obj');

    return `sentry1.CameraSetZoom(${dropdown_zoom_obj});\n`;
};

Blockly.Arduino['Sentry1SetAWB'] = function () {

    var dropdown_awb_obj = this.getFieldValue('awb_obj');

    return `sentry1.CameraSetAwb(${dropdown_awb_obj});\n`;
};

Blockly.Arduino['Sentry1VisionGetStatus'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    var code = `sentry1.VisionGetStatus(${dropdown_vision_obj})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Sentry1VisionDetectedCount'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    var code = `sentry1.GetValue(${dropdown_vision_obj}, kStatus)`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['Sentry1GetValue'] = function () {

    var sentry_value_obj = Blockly.Arduino.valueToCode(this, "sentry_value_obj", Blockly.Arduino.ORDER_ATOMIC).split(',');
    var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = `sentry1.GetValue(${sentry_value_obj[0]},${sentry_value_obj[1]},${input_index})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['Sentry1VisionDetected'] = function () {

    var sentry_detected_obj = Blockly.Arduino.valueToCode(this, "sentry_detected_obj", Blockly.Arduino.ORDER_ATOMIC).split(',');
    var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = `(sentry1.GetValue(${sentry_detected_obj[0]},kLabel,${input_index})==${sentry_detected_obj[1]})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// Sentry2
Blockly.Arduino['SentryBegin'] = function () {

    var dropdown_mode_obj = this.getFieldValue('mode_obj');
    var dropdown_addr_obj = this.getFieldValue('addr_obj');

    Blockly.Arduino.definitions_["include_Sentry"] = "#include <Sentry.h>";
    Blockly.Arduino.definitions_[`var_declare_Sentry`] = `Sentry2 sentry(${dropdown_addr_obj});`;

    if (dropdown_mode_obj == 'Wire') {
        Blockly.Arduino.definitions_["include_Wire"] = "#include <Wire.h>";
        Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
    }

    var code = `while (SENTRY_OK != sentry.begin(&${dropdown_mode_obj})) {yield();}\n`;

    return code;
};

Blockly.Arduino['SentrySetDefault'] = function () {


    return `sentry.SensorSetDefault();\n`;
};

Blockly.Arduino['SentrySetCoordinateType'] = function () {

    var dropdown_coord_obj = this.getFieldValue('coord_obj');
    return `sentry.SeneorSetCoordinateType(${dropdown_coord_obj});\n`;
};

Blockly.Arduino['SentryVisionSetStatus'] = function () {

    var dropdown_VisionStatus = this.getFieldValue('VisionStatus');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    return `sentry.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`;
};

Blockly.Arduino['SentryVisionSetParamNum'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var input_num = this.getFieldValue('num');

    return `sentry.SetParamNum(${dropdown_vision_obj},${input_num});\n`;
};

Blockly.Arduino['SentryVisionBlobSetParam'] = Blockly.Arduino['SentryVisionColorSetParam'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var input_index = this.getFieldValue('index');
    var input_x = this.getFieldValue('x');
    var input_y = this.getFieldValue('y');
    var input_w = this.getFieldValue('w');
    var input_h = this.getFieldValue('h');
    var input_l = this.getFieldValue('lable');

    Blockly.Arduino.definitions_["param_obj"] = "sentry_object_t param;\n";

    var code = "\n"
    if (input_x != null) code += `param.x_value = ${input_x};\n`;
    if (input_y != null) code += `param.y_value = ${input_y};\n`;
    if (input_w != null) code += `param.width = ${input_w};\n`;
    if (input_h != null) code += `param.height = ${input_h};\n`;
    if (input_l != null) code += `param.label = ${input_l};\n`;

    code += `sentry.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code;
};

Blockly.Arduino['SentryLedSetColor'] = function () {
    var color_dic = {
        '#000000': 'kLedClose', '#ff0000': 'kLedRed', '#00ff00': 'kLedGreen',
        '#ffff00': 'kLedYellow', '#0000ff': 'kLedBlue', '#ff00ff': 'kLedPurple',
        '#00ffff': 'kLedCyan', '#ffffff': 'kLedWhite'
    };


    var dropdown_led_color_obj1 = color_dic[this.getFieldValue('led_color_obj1')];
    var dropdown_led_color_obj2 = color_dic[this.getFieldValue('led_color_obj2')];

    var input_level = Blockly.Arduino.valueToCode(this, "level", Blockly.Arduino.ORDER_ATOMIC) || '1';

    return `sentry.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`;
};

Blockly.Arduino['SentrySetZoom'] = function () {

    var dropdown_zoom_obj = this.getFieldValue('zoom_obj');

    return `sentry.CameraSetZoom(${dropdown_zoom_obj});\n`;
};

Blockly.Arduino['SentrySetAWB'] = function () {

    var dropdown_awb_obj = this.getFieldValue('awb_obj');

    return `sentry.CameraSetAwb(${dropdown_awb_obj});\n`;
};

Blockly.Arduino['SentryVisionGetStatus'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    var code = `sentry.VisionGetStatus(${dropdown_vision_obj})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryVisionDetectedCount'] = function () {

    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    var code = `sentry.GetValue(${dropdown_vision_obj}, kStatus)`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['SentryGetValue'] = function () {

    var sentry_value_obj = Blockly.Arduino.valueToCode(this, "sentry_value_obj", Blockly.Arduino.ORDER_ATOMIC).split(',');
    var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = `sentry.GetValue(${sentry_value_obj[0]},${sentry_value_obj[1]},${input_index})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryGetQrValue'] = function () {


    var code = `sentry.GetQrCodeValue()`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryVisionDetected'] = function () {

    var sentry_detected_obj = Blockly.Arduino.valueToCode(this, "sentry_detected_obj", Blockly.Arduino.ORDER_ATOMIC).split(',');
    var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '0';

    var code = `(sentry.GetValue(${sentry_detected_obj[0]},kLabel,${input_index})==${sentry_detected_obj[1]})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryRows'] = function () {


    var code = `sentry.rows()`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryCols'] = function () {

    var code = `sentry.cols()`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};



