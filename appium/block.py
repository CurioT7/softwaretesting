import pytest 
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions
from appium.webdriver.common.touch_action  import TouchAction
from time import sleep 
from typing import Any, Dict

desired_caps: Dict[str,Any] = {

  "platformName": "Android",
  "appium:platformVe": "14",
  "appium:deviceName": "emulator-5554",
  "appium:automationName": "Uiautomator2",
  "appium:app": "C:\\Users\\maram\\Desktop\\Cross-Platform-main\\build\\app\\outputs\\apk\\debug\\app-debug.apk"

}

url ='http://ocalhost:4723'
driver= webdriver.remote(url, options=AppiumOptions().load_capabilities(desired_caps))

#lockers
userButton_Xpath_block=""
dropmenuButton_Xpath_block=""
blockButton_Xpath_block=""
sureblockButton_Xpath_block=""
closeButton_Xpath_block=""
viewButton_Xpath_block=""
accountsettingButton_Xpath_block=""
mangeblockaccountButton_Xpath_block=""
unblockButton_Xpath_block=""


def block_unblockuser():
    driver.find_element(by=AppiumBy.xpath,value=userButton_Xpath_block="").click()
    userButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    userButton.click()
    sleep(2)
    dropmenuButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    dropmenuButton.click()
    sleep(2)
    blockButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    blockButton.click()
    sleep(2)
    sureblockButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    sureblockButton.click()
    sleep(2)
    closeButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    closeButton.click()
    sleep(2)
    viewButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    viewButton.click()
    sleep(2)
    accountsettingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    accountsettingButton.click()
    sleep(2)
    mangeblockaccountButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    mangeblockaccountButton.click()
    sleep(2)
    unblockButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    unblockButton.click()
    
driver.quit()

