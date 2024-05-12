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
sidebar_menu=""
my_community=""
modtools_button=""
comm_description=""
ban__users=""
comm_type=""
comm_scroll=""
priv_community=""
rest_community=""
pub_community=""
creat_post=""

create_schd_post_button=""
post_title=""
post_body=""
schedule_time_button=""

def change_community_type():
    driver.find_element(by=AppiumBy.XPATH, value=sidebar_menu).click()
    community = driver.find_element(by=AppiumBy.XPATH, value=my_community)
    community.click()
    sleep(2)

    modtools = driver.find_element(by=AppiumBy.XPATH, value=modtools_button)
    modtools.click()
    sleep(2)

    description=driver.find_element(by=AppiumBy.XPATH, value=comm_description)
    description.click()
    sleep(2)

    type = driver.find_element(by=AppiumBy.XPATH, value=comm_type)
    type.click()
    sleep(2)
    
    scroll_thru = driver.find_element(by=AppiumBy.XPATH, value=comm_scroll)
    scroll_thru.click()
    sleep(2)
    change_commtype= driver.find_element(by=AppiumBy.XPATH, value=priv_community)
    change_commtype.click()
    sleep(2)
    
    driver.quit()

def schedule_post():
    driver.find_element(by=AppiumBy.XPATH, value=sidebar_menu).click()
    community = driver.find_element(by=AppiumBy.XPATH, value=my_community)
    community.click()
    sleep(2)

    modtools = driver.find_element(by=AppiumBy.XPATH, value=modtools_button)
    modtools.click()
    sleep(2)

    create_post = driver.find_element(by=AppiumBy.XPATH, value=create_schd_post_button)
    type.click()
    sleep(2)
    
    title_feild = driver.find_element(by=AppiumBy.XPATH, value=post_title)
    title_feild.click()
    sleep(2)
    title_feild.send_keys('')
    sleep(3)

    body_feild = driver.find_element(by=AppiumBy.XPATH, value=post_body)
    body_feild.click()
    sleep(2)
    body_feild.send_keys('')
    sleep(3)

    schedule_time= driver.find_element(by=AppiumBy.XPATH, value=schedule_time_button)
    schedule_time.click()
    sleep(2)
    
    driver.quit()
