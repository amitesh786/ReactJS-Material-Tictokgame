// Include game module
var gameModule = require("./modules/Game/gameModule.js");

var includeTests = (function () {

    var allTests = {};

    // game Count
    Object.assign(allTests, gameModule);
    return allTests;

})();
module.exports = includeTests;
