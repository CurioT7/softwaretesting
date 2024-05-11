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
createpost_button=""
title_feild=""
body_feild=""
link_button=""
upload_image=""
spoiler_tag=""
NSFW_tag=""
next_XPATH_button=""
search_community_feild=""
community_name=""
post_button=""


def createpost():
    driver.find_element(by=AppiumBy.XPATH, value=createpost_button).click()
    title = driver.find_element(by=AppiumBy.XPATH, value=title_feild)
    title.click()
    sleep(2)
    title.send_keys('title')
    sleep(2)

    body = driver.find_element(by=AppiumBy.XPATH, value=body_feild)
    body.click()
    body.send_keys('sama1212')
    sleep(2)
    driver.implicity_wait(3)

    nextbutton = driver.find_element(by=AppiumBy.XPATH, value=next_XPATH_button)
    nextbutton.click()
    sleep(2)

    searchcomm=driver.find_element(by=AppiumBy.XPATH, value=search_community_feild)
    searchcomm.click()
    searchcomm.send_keys('community name')
    sleep(2)

    choosecomm=driver.find_element(by=AppiumBy.XPATH, value=community_name)
    choosecomm.click()
    sleep(2)

    post= driver.find_element(by=AppiumBy.XPATH, value=post_button)
    post.click()
    sleep(5)

driver.quit()

