// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('PF-1.3 Cantidad igual a cero', function() {
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
  it('PF-1.3 Cantidad igual a cero', async function() {
    await driver.get("https://finalprojectjuansehenao.herokuapp.com/")
    await driver.manage().window().setRect({ width: 1054, height: 570 })
    await driver.findElement(By.css("a:nth-child(1) > button")).click()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("0")
    await driver.findElement(By.css(".butf")).click()
  })
})
