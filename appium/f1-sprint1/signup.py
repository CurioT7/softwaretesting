import pytest 
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions
# from appium.webdriver.common.touch_action  import TouchAction
from time import sleep 
from typing import Any, Dict

# desired caps
desired_caps: Dict[str,Any] = {
  "platformName": "Android",
  "appium:platformVe": "14",
  "appium:deviceName": "emulator-5554",
  "appium:automationName": "Uiautomator2",
  "appium:app": "C:\\Users\\samae\\OneDrive\\Desktop\\sprint2_2\\cross\\Cross-Platform-main\\build\\app\\outputs\\apk\\debug\\app-debug.apk",
  "adbExecTimeout": 60000
}


url ='http://localhost:4723'
driver= webdriver.Remote(url, options=AppiumOptions().load_capabilities(desired_caps))

#lockers

signupButton="//android.widget.Button[@content-desc=Sign Up]"
signupEmailFeild="//android.widget.FrameLayout[@resource-id=android:id/content]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]"
signupPassFeild="//android.widget.FrameLayout[@resource-id=android:id/content]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]"
continueButton="//android.widget.Button[@content-desc=Continue]"
backButton="//android.widget.Button[@content-desc=Back]"
aboutYou=""
interestButton=""




def signup_email():
    driver.find_element(by=AppiumBy.XPATH,value="").click()
    emailfield = driver.find_element(by=AppiumBy.XPATH,value=signupEmailFeild)
    emailfield.click()
    emailfield.send_keys('samaelshorbajy@gmail.com')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.XPATH,value="")
    passwordfield.click()
    passwordfield.send_keys('eng19sam!')
    sleep(2)
    driver.implicity_wait(3)
    continue1button= driver.find_element(by=AppiumBy.XPATH,value=continueButton)
    continue1button.click()
    sleep(2)
    usernamefield = driver.find_element(by=AppiumBy.XPATH,value="")
    usernamefield.click()
    sleep(2)
    usernamefield.send_keys('')
    sleep(2)
    continue2button= driver.find_element(by=AppiumBy.XPATH,value="")
    continue2button.click()
    sleep(2)
    aboutyoubutton= driver.find_element(by=AppiumBy.XPATH,value="")
    aboutyoubutton.click()
    sleep(2)
    continue3button= driver.find_element(by=AppiumBy.XPATH,value="")
    continue3button.click()
    sleep(2)
    intrestsubutton =driver.find_element(by=AppiumBy.XPATH,value="")
    intrestsubutton.click()
    sleep(2)
    continue4button= driver.find_element(by=AppiumBy.XPATH,value="")
    continue4button.click()
    selectavatarbutton=driver.find_element(by=AppiumBy.XPATH,value="")
    selectavatarbutton.click()
    sleep(2)
    continue5button= driver.find_element(by=AppiumBy.XPATH,value="")
    continue5button.click()

driver.quit()

def signup_wrongemail():
    driver.find_element(by=AppiumBy.XPATH,value="").click()
    emailfield = driver.find_element(by=AppiumBy.XPATH,value="")
    emailfield.click()
    sleep(2)
    emailfield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.XPATH,value="")
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    continue1button= driver.find_element(by=AppiumBy.XPATH,value="")
    continue1button.click()
    sleep(2)
   
driver.quit()

def signup_wrongpassword():
    driver.find_element(by=AppiumBy.XPATH,value="").click()
    emailfield = driver.find_element(by=AppiumBy.XPATH,value="")
    emailfield.click()
    sleep(2)
    emailfield.send_keys('')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.XPATH,value="")
    passwordfield.click()
    passwordfield.send_keys('')
    sleep(2)
    driver.implicity_wait(3)
    continue1button= driver.find_element(by=AppiumBy.XPATH,value="")
    continue1button.click()
    sleep(2)
   
driver.quit()
