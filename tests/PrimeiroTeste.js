module.exports = {
  'Primeiro Teste com Nightwatch' : function (browser) {
    browser
      .maximizeWindow()
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[id=lst-ib]', ['nightwatch', browser.Keys.ENTER])
      //.waitForElementVisible('button[name=btnK]', 1000)
      //.click('button[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Nightwatch.js | Node.js powered End-to-End testing framework')
      .end();
  }
};