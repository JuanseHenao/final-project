// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('PF-4.3 Altura cero', function() {
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
  it('PF-4.3 Altura cero', async function() {
    await driver.get("https://finalprojectjuansehenao.herokuapp.com/")
    await driver.manage().window().setRect({ width: 1047, height: 562 })
    await driver.findElement(By.css("a:nth-child(5) > button")).click()
    await driver.findElement(By.css("div:nth-child(2) > input")).click()
    await driver.findElement(By.css("div:nth-child(2) > input")).sendKeys("0")
    await driver.findElement(By.css("div:nth-child(1) > input")).click()
    await driver.findElement(By.css("div:nth-child(1) > input")).sendKeys("4")
    await driver.findElement(By.css("button:nth-child(3)")).click()
  })
})
