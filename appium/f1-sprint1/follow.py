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
userButton_Xpath_follow=""
followButton_Xpath_follow=""
unfollowButton_Xpath_follow=""


def Follow_unfollowuser():
    driver.find_element(by=AppiumBy.xpath,value=userButton_Xpath_follow="").click()
    followButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    followButton.click()
    sleep(2)
    unfollowButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    unfollowButton.click()
    
driver.quit()

