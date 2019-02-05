var conf = require("../../conf.js");

// Helpers
var login = require("../../utils/login.js");
var logout = require("../../utils/logout.js");

module.exports = {
    'Does not show the task list if there are no tasks'(client) {
        client
            .url('http://localhost:3000')
            .waitForElementVisible('.header h1', 2000)
            .expect.element('.main').to.not.be.present;
        client.end();
    },
    'Does not show the footer if there are no tasks'(client) {
        client
            .url('http://localhost:3000')
            .waitForElementVisible('.header h1', 20000)
            .expect.element('.footer').to.not.be.present;
        client.end();
    },
}
