exports.config = {
  jasmineNodeOpts: {
    defaultTimeoutInterval: 5 * 60 * 1000
  },
  specs: ['test/*.js'],
  onPrepare: function() {
    var webdriver = require('selenium-webdriver');
    protractor.calendarHelper =
      require('./helpers/calendarHelper.js');
    protractor.homeCardsHelper =
      require('./helpers/homeCardsHelper.js');
    protractor.tabsHelper =
      require('./helpers/tabsHelper.js');
  }
};
