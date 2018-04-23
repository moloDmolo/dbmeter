cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-dbmeter.DBMeter",
    "file": "plugins/cordova-plugin-dbmeter/dbmeter.js",
    "pluginId": "cordova-plugin-dbmeter",
    "clobbers": [
      "DBMeter"
    ]
  },
  {
    "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
    "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
    "pluginId": "cordova-plugin-bluetooth-serial",
    "clobbers": [
      "window.bluetoothSerial"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-dbmeter": "2.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-bluetooth-serial": "0.4.7"
};
// BOTTOM OF METADATA
});