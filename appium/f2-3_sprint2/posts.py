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

mainpage_post=""
dropdown_menue=""
edit_post=""
text_feild=""
submit_edit_button=""
save_post=""
upvote_post_button=""
downvote_post_button=""



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

def editpost():
    driver.find_element(by=AppiumBy.XPATH, value=mainpage_post).click()
    menue=driver.find_element(by=AppiumBy.XPATH, value=dropdown_menue)
    menue.click()
    sleep(2)

    edit = driver.find_element(by=AppiumBy.XPATH, value=edit_post)
    edit.click()
    sleep(2)

    text=driver.find_element(by=AppiumBy.XPATH, value=text_feild)
    text.click()
    sleep(2)
    text.send_keys('')
    sleep(3)

    submit=text=driver.find_element(by=AppiumBy.XPATH, value=submit_edit_button)
    submit.click()
    sleep(2)

driver.quit()

def upvote_downvote_post():
    driver.find_element(by=AppiumBy.XPATH, value=mainpage_post).click()
    upvote=driver.find_element(by=AppiumBy.XPATH, value=upvote_post_button)
    upvote.click()
    sleep(2)

    downvote=driver.find_element(by=AppiumBy.XPATH, value=downvote_post_button)
    downvote.click()
    sleep(2)

driver.quit()
    
