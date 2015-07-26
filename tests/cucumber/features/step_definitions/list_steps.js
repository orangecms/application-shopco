(function () {

  'use strict';

  module.exports = function() {

    this.When(/^I look at the page$/, function () {
      return this.server.call('reset');
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser
      .getTitle().should.become(expectedTitle).and.notify(callback);
    });

    this.Then(/^I should see the heading "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser
        .waitForVisible('h2', 1500) // WebdriverIO chain-able promise magic
        .getText('h2', function (error, title) {
          assert.equal(title, expectedTitle);
        })
        .call(callback);
    });

  };

})();
