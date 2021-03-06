// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('PF-5.2 Numero negativo', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('PF-5.2 Numero negativo', async function() {
    await driver.get("https://finalprojectjuansehenao.herokuapp.com/")
    await driver.manage().window().setRect({ width: 1066, height: 581 })
    await driver.findElement(By.css("a:nth-child(2) > button")).click()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("-1")
    await driver.findElement(By.css(".butf")).click()
  })
})
