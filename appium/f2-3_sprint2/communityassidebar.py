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
menu_Xpath_community=""
ceatecommunityButton_community=""
namefield_Xpath_community=""
typeButton_Xpath_community=""
selecttypeButton_Xpath_community=""
createButton_Xpath_community=""
backButton_Xpath_community=""



# def community_sidebar():
#     driver.find_element(by=AppiumBy.xpath,value=menu_Xpath_community="").click()
#     menu= driver.find_element(by=AppiumBy.xpath,value="").click()
#     menu.click()
#     sleep(2)
    
#     ceatecommunityButton= driver.find_element(by=AppiumBy.xpath,value="").click()
#     ceatecommunityButton.click()
#     sleep(2)
    
#     namefield= driver.find_element(by=AppiumBy.xpath,value="").click()
#     namefield.click()
#     namefield.send_keys('')
    
#     sleep(2)
#     typeButton= driver.find_element(by=AppiumBy.xpath,value="").click()
#     typeButton.click()
    
#     sleep(2)
#     selecttypeButton= driver.find_element(by=AppiumBy.xpath,value="").click()
#     selecttypeButton.click()
    
#     sleep(2)
#     createButton= driver.find_element(by=AppiumBy.xpath,value="").click()
#     createButton.click()
    
#     sleep(2)
#     backButton= driver.find_element(by=AppiumBy.xpath,value="").click()
#     backButton.click()
#     sleep(2)
    
#     menu= driver.find_element(by=AppiumBy.xpath,value="").click()
#     menu.click()
#     sleep(2)
    
#     if driver.find_element(by=AppiumBy.XPATH, value="your_created_community_xpath_here").is_displayed():
#         return True
#     else:
#         return False
    
# driver.quit()

