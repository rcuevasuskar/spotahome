exports.setRamdomDateIn = async function() {
  console.log('Click date in');
  await browser.driver.findElement(By.css(
      'input.city-selector--date-item'))
    .click();

  console.log('Open year dropdown');
  await browser.driver
    .findElement(By.className('pika-select-year')).click();

  console.log('Get year elements');
  var yearOptions = await browser.driver
    .findElement(By.className('pika-select-year'))
    .findElements(By.tagName('option:not([disabled])'));

  console.log('Click random year');
  await yearOptions[Math.floor(Math.random() *
      yearOptions.length)]
    .click();

  console.log('Open month dropdown');
  await browser.driver
    .findElement(By.className('pika-select-month')).click();

  console.log('Get month elements');
  var monthOptions = await browser.driver
    .findElement(By.className('pika-select-month'))
    .findElements(By.tagName('option:not([disabled])'));

  console.log('Click random month');
  await monthOptions[Math.floor(Math.random() *
      monthOptions.length)]
    .click();

  console.log('Get day elements');
  var dayOptions = await browser.driver
    .findElement(By.className('pika-table'))
    .findElements(By.tagName(
      'td:not([class=is-disabled]):not([class=is-empty])'));

  console.log('Click random day');
  await dayOptions[Math.floor(Math.random() *
      dayOptions.length)]
    .click();
};
