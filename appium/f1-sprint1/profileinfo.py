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
menue_bar=""
profile_button=""
about_button=""
post_button=""
comment_button=""
post_sort=""


def view_info():
    driver.find_element(by=AppiumBy.xpath,value=menue_bar)
    veiwprofile= driver.find_element(by=AppiumBy.xpath,value=profile_button)
    veiwprofile.click()
    sleep(2)

    myposts= driver.find_element(by=AppiumBy.xpath,value=post_button)
    myposts.click()
    sleep(2)
    sort=driver.find_element(by=AppiumBy.xpath,value=post_sort)
    sort.click()
    sleep(2)

    mycomments=driver.find_element(by=AppiumBy.xpath,value=comment_button)
    mycomments.click()
    sleep(2)

driver.quit()

