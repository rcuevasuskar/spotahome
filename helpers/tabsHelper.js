exports.waitForNewTabAndSwitchDriver = async function() {
  await waitForNewTabToOpen();
  await switchToNewTab();
};

exports.closeOpenTabs = async function () {
  var handles = await browser.driver.getAllWindowHandles();
  for(var i = handles.length - 1; i > 0; i--)
  {
    console.log('Closing tab', i + 1);
    await browser.driver.switchTo().window(handles[i]);
    await browser.driver.close();
  }
  await browser.driver.switchTo().window(handles[0]);
};

waitForNewTabToOpen = async function() {
  console.log('Wait for new tab');
  await browser.driver.wait(function() {
    return browser.driver.getAllWindowHandles().then(function(wh) {
      return wh.length === 2;
    });
  });
};

switchToNewTab = async function() {
  console.log('Switch to new tab');
  await browser.driver.getAllWindowHandles().then(function(wh) {
    browser.driver.switchTo().window(wh[wh.length - 1])
  });
}
