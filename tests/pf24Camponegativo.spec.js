// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('PF-2.4 Campo negativo', function() {
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
  it('PF-2.4 Campo negativo', async function() {
    await driver.get("https://finalprojectjuansehenao.herokuapp.com/")
    await driver.manage().window().setRect({ width: 1074, height: 590 })
    await driver.findElement(By.css("a:nth-child(3) > button")).click()
    await driver.findElement(By.css("div:nth-child(1) > input")).click()
    await driver.findElement(By.css("div:nth-child(1) > input")).sendKeys("5")
    await driver.findElement(By.css("div:nth-child(2) > input")).click()
    await driver.findElement(By.css("div:nth-child(2) > input")).sendKeys("5")
    await driver.findElement(By.css("div:nth-child(3) > input")).click()
    await driver.findElement(By.css("div:nth-child(3) > input")).sendKeys("-1")
    await driver.findElement(By.css("button:nth-child(4)")).click()
  })
})
