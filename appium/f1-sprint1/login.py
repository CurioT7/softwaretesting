import pytest
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.common import AppiumOptions
# from appium.webdriver.common.touch_action  import TouchAction
from time import sleep
from typing import Any, Dict

# desired caps
desired_caps: Dict[str, Any] = {

    "platformName": "Android",
    "appium:platformVe": "14",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "Uiautomator2",
    # "appium:app": "C:\\Users\\samae\\OneDrive\\Desktop\\sprint2_2\\cross\\Cross-Platform-main\\build\\app\\outputs\\apk\\debug\\app-debug.apk",
    "adbExecTimeout": 60000
}

url = 'http://localhost:4723'
driver = webdriver.Remote(url, options=AppiumOptions().load_capabilities(desired_caps))
driver.implicitly_wait(10)
# sleep(20)

# lockers
logbutton = "//android.widget.Button"
loginbutton = "//android.widget.Button[@content-desc=Login]"
loginUsernameFeild = "//android.widget.FrameLayout[@resource-id=android:id/content]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]"
loginPassFeild = "//android.widget.FrameLayout[@resource-id=android:id/content]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]"
login = ""

contWithGoogle = "//android.widget.ImageView[@content-desc=Continue with Google]"
googleEmail = ""


def login_username():
    driver.find_element(by=AppiumBy.XPATH, value=loginbutton).click()
    usernamefield = driver.find_element(by=AppiumBy.XPATH, value=loginUsernameFeild)
    usernamefield.click()
    sleep(2)
    usernamefield.send_keys('samamostafa')
    sleep(2)
    passwordfield = driver.find_element(by=AppiumBy.XPATH, value=loginPassFeild)
    passwordfield.click()
    passwordfield.send_keys('sama1212')
    sleep(2)
    driver.implicity_wait(3)
    login1button = driver.find_element(by=AppiumBy.XPATH, value=login)
    login1button.click()
    sleep(5)



def login_google():
    driver.find_element(AppiumBy.XPATH, value=contWithGoogle).click()
    sleep(2)
    googleemail = driver.find_element(by=AppiumBy.XPATH, value=googleEmail)
    googleemail.click()
    sleep(2)
