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
logButton_Xpath_login="//android.widget.Button"
loginbutton_Xpath_login="/android.widget.Button[@content-desc='Login']"
passwordfield_Xpath_login=""
login1button_Xpath_login=""
usernamefield_Xpath_login=""

def login_username():
    driver.find_element(by=AppiumBy.xpath,value=logButton_Xpath_login="//android.widget.Button").click()
    usernamefield= driver.find_element(by=AppiumBy.xpath,value="").click()
    usernamefield.click()
    sleep(2)
    usernamefield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    login1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    login1button.click()


driver.quit()

def login_wrongusername():
    driver.find_element(by=AppiumBy.xpath,value="").click()
    usernamefield= driver.find_element(by=AppiumBy.xpath,value="").click()
    usernamefield.click()
    sleep(2)
    usernamefield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    login1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    login1button.click()
   
driver.quit()

def login_wrongpassword():
    usernamefield= driver.find_element(by=AppiumBy.xpath,value="").click()
    usernamefield.click()
    sleep(2)
    usernamefield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    login1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    login1button.click()
   
driver.quit()
