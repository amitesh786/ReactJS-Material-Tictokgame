// var conf = require("../../conf.js");

// Helpers
// var login = require("../../utils/login.js");
// var logout = require("../../utils/logout.js");

module.exports = {

    'Demo test Game': function (browser) {
        browser.url(browser.launchUrl);
        browser.waitForElementVisible('body', 5000);
        browser.pause(2000);

        browser.expect.element('body header').text.to.equal("Login WebApp");

        browser.click('#txtLoginId');

        browser.setValue('#txtLoginId', 'amh23');
        
        browser.pause(2000);
    
        browser.end();
    }
}
