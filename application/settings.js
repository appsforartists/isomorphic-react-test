var Lazy = require("lazy.js");

var commonSettings = require("./settings.common.js");

module.exports = Lazy(commonSettings).merge(
  {
    "HOST":                           SERVER_IP,
    "PORT":                           "8080",

    "ENABLE_HOT_MODULE_REPLACEMENT":  true,
    "WEBPACK_PORT":                   "8081"
  }
).toObject();
