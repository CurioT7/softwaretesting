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
  "appium:app": "C:\\Users\\maram\\Desktop\\Cross-Platform-main\\build\\app\\outputs\\apk\\debug\\app-debug.apk"

}

url ='http://ocalhost:4723'
driver= webdriver.remote(url, options=AppiumOptions().load_capabilities(desired_caps))

#lockers
loginButton="//android.widget.Button[@content-desc=Login]"
forgotPass="//android.widget.Button[@content-desc=Forgot Password?]"
userName="//android.widget.FrameLayout[@resource-id=android:id/content]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]"
userEmail="//android.widget.FrameLayout[@resource-id=android:id/content]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]"
helpButton="//android.widget.Button[@content-desc=Help]"
resetPassButton="//android.widget.Button[@content-desc=Reset Password]"

def reset_password():
    
    driver.find_element(by=AppiumBy.XPATH, value=loginButton)
    forgetPassword=driver.find_element(by=AppiumBy.XPATH,value=forgotPass).click()
    forgetPassword.click()
    sleep(2)
    usernamefield= driver.find_element(by=AppiumBy.XPATH,value=userName).click()
    usernamefield.click()
    usernamefield.send_keys('samamostafa')
    sleep(2)
    useremailfield=driver.find_element(by=AppiumBy.XPATH,value=userEmail).click()
    useremailfield.click()
    useremailfield.send_keys('samaelshorbajy@gmail.com')
    sleep(2)

    driver.implicity_wait(3)
    resetpassword= driver.find_element(by=AppiumBy.XPATH,value=resetPassButton).click()
    resetpassword.click()

driver.quit()



# def login_username():
#     driver.find_element(by=AppiumBy.XPATH,value=loginButton).click()

#     viewmenuButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     viewmenuButton.click()
#     sleep(2)
#    # usernamefield.send_keys('')
#     sleep(2)
#     login_signupbutton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     login_signupbutton.click()
   
#     sleep(2)
#     driver.implicity_wait(3)
#     loginButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     loginButton.click()

#     sleep(2)
#     driver.implicity_wait(3)
#     login1button= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     login1button.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     usernamefield= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     usernamefield.click()
#     usernamefield.send_keys('')
    
#     sleep(2)
#     driver.implicity_wait(3)
#     forgetpasswordButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     forgetpasswordButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     emailfield= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     emailfield.click()
#     emailfield.send_keys('')
    
#     sleep(2)
#     driver.implicity_wait(3)
#     resetpassword= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     resetpassword.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     openemailappButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     openemailappButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     gmailButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     gmailButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     openButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     openButton.click() 
    
#     sleep(2)
#     driver.implicity_wait(3)
#     resetyourpasswordButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     resetyourpasswordButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     defaultappButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     defaultappButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     openemailappButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     openemailappButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     chooseyourusernameButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     chooseyourusernameButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     reset1password= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     reset1password.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     chooseyourusernameButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     chooseyourusernameButton.click()
     
#     sleep(2)
#     driver.implicity_wait(3)
#     newpassword= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     newpassword.click()
#     newpassword.send_keys('')
    
#     sleep(2)
#     driver.implicity_wait(3)
#     confirmpassword= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     confirmpassword.click()
#     confirmpassword.send_keys('')
    
#     sleep(2)
#     driver.implicity_wait(3)
#     continueButton= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     continueButton.click()
    
#     sleep(2)
#     driver.implicity_wait(3)
#     resetpassword= driver.find_element(by=AppiumBy.XPATH,value="").click()
#     resetpassword.click()

# driver.quit()

