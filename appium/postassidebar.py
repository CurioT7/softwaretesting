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
create_Xpath_post=""
title_Xpath_post=""
description_Xpath_post=""
nextButton_Xpath_post=""
selectcommunityButton_Xpath_post=""
selectrulesButton_Xpath_post=""
understandButton_Xpath_post=""
postButton_Xpath_post=""
uploadimageButton_Xpath_post=""
selectimageButton_Xpath_post=""
next2Button_Xpath_post=""
addButton_Xpath_post=""
addmoreButton_Xpath_post=""
next3eButton_Xpath_post=""
linkButton_Xpath_post=""
urlButton_Xpath_post=""
bodydescriptionButton_Xpath_post=""
videoButton_Xpath_post=""
menu_Xpath_post=""
modefeed_Xpath_post=""


from time import sleep

def create_post_text():
    driver.find_element(by=AppiumBy.XPATH, value=create_Xpath_post="").click()
    sleep(2)
    
    create = driver.find_element(by=AppiumBy.XPATH, value="").click()
    create.click()
    sleep(2)
    
    title = driver.find_element(by=AppiumBy.XPATH, value="").click()
    title.send_keys('')
    sleep(2)
    
    description = driver.find_element(by=AppiumBy.XPATH, value="").click()
    description.send_keys('')
    sleep(2)
    
    nextButton = driver.find_element(by=AppiumBy.XPATH, value="").click()
    nextButton.click()
    sleep(2)
    
    selectcommunityButton = driver.find_element(by=AppiumBy.XPATH, value="").click()
    selectcommunityButton.click()
    sleep(2)
    
    selectrulesButton = driver.find_element(by=AppiumBy.XPATH, value="").click()
    selectrulesButton.click()
    sleep(2)
    
    understandButton = driver.find_element(by=AppiumBy.XPATH, value="").click()
    understandButton.click()
    sleep(2)
    
    postButton = driver.find_element(by=AppiumBy.XPATH, value="").click()
    postButton.click()
    sleep(2)
    
    menu = driver.find_element(by=AppiumBy.XPATH, value="").click()
    menu.click()
    sleep(2)
    
    modefeed = driver.find_element(by=AppiumBy.XPATH, value="").click()
    modefeed.click()
    sleep(2)
    
    if driver.find_element(by=AppiumBy.XPATH, value="your_created_post_xpath_here").is_displayed():
        return True
    else:
        return False
    
    driver.quit()

