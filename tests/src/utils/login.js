module.exports = function(browser, url, username, password) {
    return browser
        .url(url)
        .waitForElementVisible('body', 1000000)
        // .setValue('input', username)
        
        // .setValue('input', password)
        // .keys(browser.Keys.ENTER)
}
