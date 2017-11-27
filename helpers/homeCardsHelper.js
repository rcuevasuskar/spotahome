exports.clickRandomHomeCard = async function() {
  var homeCards = await browser.driver.findElements(
    By.className('home-card'));
  homeCards[Math.floor(Math.random() * homeCards.length)]
    .click();
};
