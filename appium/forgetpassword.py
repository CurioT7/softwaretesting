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
viewmenuButton_Xpath_forgetpassword="//android.widget.Button"
login_signupbutton_Xpath_forgetpassword="/android.widget.Button[@content-desc='Login']"
loginButton_Xpath_forgetpassword=""
login1button_Xpath_forgetpassword=""
usernamefield_Xpath_forgetpassword=""
forgetpasswordButton_Xpath_forgetpassword=""
emailfield_Xpath_forgetpassword=""
resetpassword_Xpath_forgetpassword=""
openemailappButton_Xpath_forgetpassword=""
gmailButton_Xpath_forgetpassword=""
openButton_Xpath_forgetpassword=""
resetyourpasswordButton_Xpath_forgetpassword=""
defaultappButton_Xpath_forgetpassword=""
chooseyourusernameButton_Xpath_forgetpassword=""
reset1password_Xpath_forgetpassword=""
newpassword_Xpath_forgetpassword=""
confirmpassword_Xpath_forgetpassword=""
continueButton_Xpath_forgetpassword=""
resetpassword_Xpath_forgetpassword=""

def login_username():
    driver.find_element(by=AppiumBy.xpath,value=viewmenuButton_Xpath_forgetpassword="//android.widget.Button").click()
    viewmenuButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    viewmenuButton.click()
    sleep(2)
   # usernamefield.send_keys('')
    sleep(2)
    login_signupbutton= driver.find_element(by=AppiumBy.xpath,value="").click()
    login_signupbutton.click()
   
    sleep(2)
    driver.implicity_wait(3)
    loginButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    loginButton.click()

    sleep(2)
    driver.implicity_wait(3)
    login1button= driver.find_element(by=AppiumBy.xpath,value="").click()
    login1button.click()
    
    sleep(2)
    driver.implicity_wait(3)
    usernamefield= driver.find_element(by=AppiumBy.xpath,value="").click()
    usernamefield.click()
    usernamefield.send_keys('')
    
    sleep(2)
    driver.implicity_wait(3)
    forgetpasswordButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    forgetpasswordButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    emailfield= driver.find_element(by=AppiumBy.xpath,value="").click()
    emailfield.click()
    emailfield.send_keys('')
    
    sleep(2)
    driver.implicity_wait(3)
    resetpassword= driver.find_element(by=AppiumBy.xpath,value="").click()
    resetpassword.click()
    
    sleep(2)
    driver.implicity_wait(3)
    openemailappButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    openemailappButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    gmailButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    gmailButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    openButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    openButton.click() 
    
    sleep(2)
    driver.implicity_wait(3)
    resetyourpasswordButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    resetyourpasswordButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    defaultappButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    defaultappButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    openemailappButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    openemailappButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    chooseyourusernameButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    chooseyourusernameButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    reset1password= driver.find_element(by=AppiumBy.xpath,value="").click()
    reset1password.click()
    
    sleep(2)
    driver.implicity_wait(3)
    chooseyourusernameButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    chooseyourusernameButton.click()
     
    sleep(2)
    driver.implicity_wait(3)
    newpassword= driver.find_element(by=AppiumBy.xpath,value="").click()
    newpassword.click()
    newpassword.send_keys('')
    
    sleep(2)
    driver.implicity_wait(3)
    confirmpassword= driver.find_element(by=AppiumBy.xpath,value="").click()
    confirmpassword.click()
    confirmpassword.send_keys('')
    
    sleep(2)
    driver.implicity_wait(3)
    continueButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    continueButton.click()
    
    sleep(2)
    driver.implicity_wait(3)
    resetpassword= driver.find_element(by=AppiumBy.xpath,value="").click()
    resetpassword.click()

driver.quit()

