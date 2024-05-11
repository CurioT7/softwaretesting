import pytest 
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions
# from appium.webdriver.common.touch_action  import TouchAction
from time import sleep 
from typing import Any, Dict

desired_caps: Dict[str,Any] = {

  "platformName": "Android",
    "appium:platformVe": "14",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "Uiautomator2",
    # "appium:app": "C:\\Users\\samae\\OneDrive\\Desktop\\sprint2_2\\cross\\Cross-Platform-main\\build\\app\\outputs\\apk\\debug\\app-debug.apk",
    "adbExecTimeout": 60000
}


url ='http://ocalhost:4723'
driver= webdriver.remote(url, options=AppiumOptions().load_capabilities(desired_caps))

#lockers

search_button=""
search_feild=""
search_post=""
search_comments=""
search_people=""
search_hashtags=""
search_community=""

def search():
    driver.find_element(by=AppiumBy.XPATH, value=search_button).click()
    searchfield = driver.find_element(by=AppiumBy.XPATH, value=search_feild)
    searchfield.click()
    sleep(2)

    search_feild.send_keys('')
    sleep(3)
    post=driver.find_element(by=AppiumBy.XPATH, value=search_post)
    post.click()

    search_feild.send_keys('')
    sleep(3)
    comments=driver.find_element(by=AppiumBy.XPATH, value=search_comments)
    comments.click()
    sleep(2)

    search_feild.send_keys('')
    sleep(3)
    comunities=driver.find_element(by=AppiumBy.XPATH, value=search_community)
    comunities.click()
    sleep(2)
    
    search_feild.send_keys('')
    sleep(3)
    people=driver.find_element(by=AppiumBy.XPATH, value=search_people)
    people.click()
    sleep(2)

    search_feild.send_keys('')
    sleep(3)
    hashtags=driver.find_element(by=AppiumBy.XPATH, value=search_hashtags)
    hashtags.click()
    sleep(2)

    driver.quit()
