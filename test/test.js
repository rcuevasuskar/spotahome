var assert = require('chai').assert;
browser.ignoreSynchronization = true;

describe('Exercise_2', function() {

  beforeEach(async function() {
    await browser.driver.get('https://staging.spotahome.com/');
    await browser.driver.manage().window().maximize();
  });

  afterEach(async function() {
    await protractor.tabsHelper.closeOpenTabs();
  });

  it('Test_1', async function() {

    console.log('Set random date');
    await protractor.calendarHelper.setRamdomDateIn();

    console.log('Click explore');
    await browser.driver.findElement(By.className(
      'ga-home-explore')).click();

    console.log('Click random home card');
    await protractor.homeCardsHelper.clickRandomHomeCard();

    console.log('Switch to new tab');
    await protractor.tabsHelper.waitForNewTabAndSwitchDriver();

    console.log('Wait for book card');
    await browser.driver.findElement(
      By.className('booknow-card'));

    console.log('Assert book now button is enabled');
    assert.isTrue(await browser.driver
      .findElements(By.className(
        'button--book-now')).length > 0,
      'Booking button not enabled');

    await browser.driver.findElement(By.className(
      'button--book-now')).click();
  });

  it('Test_2', async function() {

    console.log('Click explore');
    await browser.driver.findElement(By.className(
      'ga-home-explore')).click();

    console.log('Click random home card');
    await protractor.homeCardsHelper.clickRandomHomeCard();

    console.log('Switch to new tab');
    await protractor.tabsHelper.waitForNewTabAndSwitchDriver();

    console.log('Wait for book card');
    var bookCardElement = await browser.driver.findElement(
      By.className('booknow-card'));

    console.log('Scroll to element');
    await browser.driver.executeScript(
      'arguments[0].scrollIntoView()',
      bookCardElement);

    console.log('Set random date');
    await protractor.calendarHelper.setRamdomDateIn();

    console.log('Assert book now button is enabled');
    assert.isTrue(await browser.driver
      .findElements(By.className(
        'button--book-now')).length > 0,
      'Booking button not enabled');

    await browser.driver.findElement(By.className(
      'button--book-now')).click();
  });
});
