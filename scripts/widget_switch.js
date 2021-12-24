var light_mode = 0;
var fan_mode = 0;
var ac_mode = 0;

function light_toggling(){
    light_mode =! light_mode;
    webpack_lib.widgetSwitchLight(light_mode);
}

function fan_toggling(){
    fan_mode =! fan_mode;
    webpack_lib.widgetSwitchFan(fan_mode);
}

function ac_toggling(){
    ac_mode =! ac_mode;
    webpack_lib.widgetSwitchAC(ac_mode);
}