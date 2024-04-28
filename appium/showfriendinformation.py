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
userButton_Xpath_show=""
viewprofileButton_Xpath_show=""
postButton_Xpath_show=""
commentButton_Xpath_show=""
aboutButton_Xpath_show=""




def block_unblockuser():
    driver.find_element(by=AppiumBy.xpath,value=userButton_Xpath_show="").click()
    userButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    userButton.click()
    sleep(2)
    viewprofileButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    viewprofileButton.click()
    sleep(2)
    postButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    postButton.click()
    sleep(2)
    commentButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    commentButton.click()
    sleep(2)
    aboutButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    aboutButton.click()
    sleep(2)
    
    
    
driver.quit()

