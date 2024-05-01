import pytest 
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions
from appium.webdriver.common.touch_action  import TouchAction
from time import sleep 
from typing import Any, Dict

desired_caps: Dict[str,Any] = {
    "platformName": "Android",
    "appium:deviceName":"Pixel2XL",
    "appium:automationName":"" ,
    
}

url =''
driver= webdriver.remote(url, options=AppiumOptions().load_capabilities(desired_caps))

#lockers
# profilrbutton_Xpath_signup=""
# loginsignupbutton_Xpath_signup=""
# loginbutton_Xpath_signup=""
signupbutton_Xpath_signup=""
emailfield_Xpath_signup=""
passwordfield_Xpath_signup=""
continue1button_Xpath_signup=""
usernamefield_Xpath_signup=""
continue2button_Xpath_signup=""
aboutyoubutton_Xpath_signup=""
continue3button_Xpath_signup=""
intrestsubutton_Xpath_signup=""
continue4button_Xpath_signup=""
selectavatarbutton_Xpath_signup=""
continue5button_Xpath_signup=""

def signup_email():
    driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield.click()
    sleep(2)
    emailfield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    continue1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue1button.click()
    sleep(2)
    usernamefield = driver.find_element(by=AppiumBy.xpath,value="").click()
    usernamefield.click()
    sleep(2)
    usernamefield.send_keys('')
    sleep(2)
    continue2button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue2button.click()
    sleep(2)
    aboutyoubutton= driver.find_element(by=AppiumBy.xpath,value="").click()
    aboutyoubutton.click()
    sleep(2)
    continue3button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue3button.click()
    sleep(2)
    intrestsubutton =driver.find_element(by=AppiumBy.xpath,value="").click()
    intrestsubutton.click()
    sleep(2)
    continue4button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue4button.click()
    selectavatarbutton=driver.find_element(by=AppiumBy.xpath,value="").click()
    selectavatarbutton.click()
    sleep(2)
    continue5button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue5button.click()

driver.quit()

def signup_wrongemail():
    driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield.click()
    sleep(2)
    emailfield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    continue1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue1button.click()
    sleep(2)
   
driver.quit()

def signup_wrongpassword():
    driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield.click()
    sleep(2)
    emailfield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.xpath,value="").click()
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    continue1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    continue1button.click()
    sleep(2)
   
driver.quit()