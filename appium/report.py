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
userButton_Xpath_report=""
dropmenuButton_Xpath_report=""
reportButton_Xpath_report=""
reasonButton_Xpath_report=""
nextButton_Xpath_report=""
selectreasonButton_Xpath_report=""
submit_Xpath_report=""
doneButton_Xpath_report=""



def block_unblockuser():
    driver.find_element(by=AppiumBy.xpath,value=userButton_Xpath_report="").click()
    userButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    userButton.click()
    sleep(2)
    reportButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    reportButton.click()
    sleep(2)
    reasonButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    reasonButton.click()
    sleep(2)
    nextButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    nextButton.click()
    sleep(2)
    selectreasonButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    selectreasonButton.click()
    sleep(2)
    submit= driver.find_element(by=AppiumBy.xpath,value="").click()
    submit.click()
    sleep(2)
    doneButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    doneButton.click()
    sleep(2)
    
    
driver.quit()

