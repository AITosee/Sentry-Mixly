
'use strict';

goog.require('Blockly.Arduino');

Blockly.Arduino['SentryBegin'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_mode_obj = this.getFieldValue('mode_obj');

    Blockly.Arduino.definitions_["include_Sentry"] = "#include <Sentry.h>";
    Blockly.Arduino.definitions_[`var_declare_Sentry${dropdown_sentry_obj}`] = `Sentry2 sentry${dropdown_sentry_obj}(0x6${dropdown_sentry_obj});`;

    if (dropdown_mode_obj == 'Wire') {
        Blockly.Arduino.definitions_["include_Wire"] = "#include <Wire.h>";
        Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
    }

    return `while (SENTRY_OK != sentry${dropdown_sentry_obj}.begin(&${dropdown_mode_obj})) {yield();}\n`;
};

Blockly.Arduino['SentrySetDefault'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');

    return `sentry${dropdown_sentry_obj}.SensorSetDefault();\n`;
};

Blockly.Arduino['SentrySetCoordinateType'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_coord_obj = this.getFieldValue('coord_obj');
    return `sentry${dropdown_sentry_obj}.SeneorSetCoordinateType(${dropdown_coord_obj});\n`;
};

Blockly.Arduino['SentryVisionSetStatus'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_VisionStatus = this.getFieldValue('VisionStatus');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    return `sentry${dropdown_sentry_obj}.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`;
};

Blockly.Arduino['SentryVisionSetParamNum'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var input_num = this.getFieldValue('num');

    return `sentry${dropdown_sentry_obj}.SetParamNum(${dropdown_vision_obj},${input_num});\n`;
};

Blockly.Arduino['SentryVisionSetParam'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
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

    code += `sentry${dropdown_sentry_obj}.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

    return code;
};

Blockly.Arduino['SentryLedSetColor'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_led_color_obj1 = this.getFieldValue('led_color_obj1');
    var dropdown_led_color_obj2 = this.getFieldValue('led_color_obj2');
    var input_level = this.getFieldValue('level');

    return `sentry${dropdown_sentry_obj}.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`;
};

Blockly.Arduino['SentrySetZoom'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_zoom_obj = this.getFieldValue('zoom_obj');

    return `sentry${dropdown_sentry_obj}.CameraSetZoom(${dropdown_zoom_obj});\n`;
};

Blockly.Arduino['SentrySetAWB'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_awb_obj = this.getFieldValue('awb_obj');

    return `sentry${dropdown_sentry_obj}.CameraSetAwb(${dropdown_awb_obj});\n`;
};


Blockly.Arduino['SentryVisionDetectedCount'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');

    var code = `sentry${dropdown_sentry_obj}.GetValue(${dropdown_vision_obj}, kStatus)`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryGetValue'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var dropdown_res_obj = this.getFieldValue('vision_res_obj');
    var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_NONE) || '0';

    var code = `sentry${dropdown_sentry_obj}.GetValue(${dropdown_vision_obj},${dropdown_res_obj},${input_index})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryGetQrValue'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');

    var code = `sentry${dropdown_sentry_obj}.GetQrCodeValue()`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryVisionDetected'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var dropdown_vision_obj = this.getFieldValue('vision_obj');
    var dropdown_lable_obj = this.getFieldValue('vision_card_obj');
    var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_NONE) || '0';

    var code = `(sentry${dropdown_sentry_obj}.GetValue(${dropdown_vision_obj},kLabel,${input_index})==${dropdown_lable_obj})`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryRows'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');

    var code = `sentry${dropdown_sentry_obj}.rows()`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SentryCols'] = function () {
    var dropdown_sentry_obj = this.getFieldValue('sentry_obj');
    var code = `sentry${dropdown_sentry_obj}.cols()`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
