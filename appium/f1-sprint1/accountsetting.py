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
menu_Xpath_setting=""
settingButton_setting=""
accountsettingButton_Xpath_setting=""
updateemail_Xpath_setting=""
newemailfield_Xpath_setting=""
password_Xpath_setting=""
saveemailButton_Xpath_setting=""
changepasswordButton_Xpath_setting=""
currentpassButton_Xpath_setting=""
newpassButton_Xpath_setting=""
confirmButton_Xpath_setting=""
confirmpassButton_Xpath_setting=""
gendermenuButton_Xpath_setting=""
selectgenderButton_Xpath_setting=""
doneButton_Xpath_setting=""
locationButton_Xpath_setting=""
selectlocationButton_Xpath_setting=""
connectButton_Xpath_setting=""
continueconnectButton_Xpath_setting=""
enteremail_Xpath_setting=""
next2Button_Xpath_setting=""
enterpassword_Xpath_setting=""
sureconnectButton_Xpath_setting=""
passenter_Xpath_setting=""
doneconnectButton_Xpath_setting=""
disconnectButton_Xpath_setting=""
next2Button_Xpath_setting=""



def basic_setting():
    driver.find_element(by=AppiumBy.xpath,value=menu_Xpath_setting="").click()
    menu= driver.find_element(by=AppiumBy.xpath,value="").click()
    menu.click()
    sleep(2)
    
    settingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    settingButton.click()
    sleep(2)
    
    accountsettingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    accountsettingButton.click()
   
    
    sleep(2)
    updateemail= driver.find_element(by=AppiumBy.xpath,value="").click()
    updateemail.click()
    
    sleep(2)
    newemailfield= driver.find_element(by=AppiumBy.xpath,value="").click()
    newemailfield.click()
    newemailfield.send_keys('')
    
    sleep(2)
    password= driver.find_element(by=AppiumBy.xpath,value="").click()
    password.click()
    password.send_keys('')
    
    sleep(2)
    saveemailButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    saveemailButton.click()
    sleep(2)
    
    changepasswordButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    changepasswordButton.click()
    sleep(2)
    
    currentpassButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    currentpassButton.click()
    currentpassButton.send_keys('')
    sleep(2)
    
    newpassButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    newpassButton.click()
    newpassButton.send_keys('')
    
    sleep(2)
    confirm= driver.find_element(by=AppiumBy.xpath,value="").click()
    confirm.click()
    confirm.send_keys('')
    
    sleep(2)
    confirmpassButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    confirmpassButton.click()
    
    sleep(2)
    gendermenuButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    gendermenuButton.click()
    
    sleep(2)
    selectgenderButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    selectgenderButton.click()
    
    sleep(2)
    doneButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    doneButton.click()
    
    sleep(2)
    locationButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    locationButton.click()
   
    sleep(2)
    selectlocationButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    selectlocationButton.click()
  
    
   
    
driver.quit()

def connect_setting():
    driver.find_element(by=AppiumBy.xpath,value=menu_Xpath_setting="").click()
    menu= driver.find_element(by=AppiumBy.xpath,value="").click()
    menu.click()
    sleep(2)
    
    settingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    settingButton.click()
    sleep(2)
    
    accountsettingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    accountsettingButton.click()
   
    sleep(2)
    connectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    connectButton.click()
   
    sleep(2)
    continueconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    continueconnectButton.click()
 
    sleep(2)
    enteremail= driver.find_element(by=AppiumBy.xpath,value="").click()
    enteremail.click()
    enteremail.send_keys('')
 
    sleep(2)
    next2Button= driver.find_element(by=AppiumBy.xpath,value="").click()
    next2Button.click()

    sleep(2)
    enterpassword= driver.find_element(by=AppiumBy.xpath,value="").click()
    enterpassword.click()
    enterpassword.send_keys('')

    sleep(2)
    next2Button= driver.find_element(by=AppiumBy.xpath,value="").click()
    next2Button.click()

    sleep(2)
    sureconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    sureconnectButton.click()
    
    sleep(2)
    passenter= driver.find_element(by=AppiumBy.xpath,value="").click()
    passenter.click()
    passenter.send_keys('')

    sleep(2)
    doneconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    doneconnectButton.click()
    
    sleep(2)
    disconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    disconnectButton.click()
    
    sleep(2)
    passenter= driver.find_element(by=AppiumBy.xpath,value="").click()
    passenter.click()
    passenter.send_keys('')

    sleep(2)
    next2Button= driver.find_element(by=AppiumBy.xpath,value="").click()
    next2Button.click()
 
   
   
    # sleep(2)
    
driver.quit()
def connect_setting():
    driver.find_element(by=AppiumBy.xpath,value=menu_Xpath_setting="").click()
    menu= driver.find_element(by=AppiumBy.xpath,value="").click()
    menu.click()
    sleep(2)
    
    settingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    settingButton.click()
    sleep(2)
    
    accountsettingButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    accountsettingButton.click()
   
    sleep(2)
    connectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    connectButton.click()
   
    sleep(2)
    continueconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    continueconnectButton.click()
 
    sleep(2)
    enteremail= driver.find_element(by=AppiumBy.xpath,value="").click()
    enteremail.click()
    enteremail.send_keys('')
 
    sleep(2)
    next2Button= driver.find_element(by=AppiumBy.xpath,value="").click()
    next2Button.click()

    sleep(2)
    enterpassword= driver.find_element(by=AppiumBy.xpath,value="").click()
    enterpassword.click()
    enterpassword.send_keys('')

    sleep(2)
    next2Button= driver.find_element(by=AppiumBy.xpath,value="").click()
    next2Button.click()

    sleep(2)
    sureconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    sureconnectButton.click()
    
    sleep(2)
    passenter= driver.find_element(by=AppiumBy.xpath,value="").click()
    passenter.click()
    passenter.send_keys('')

    sleep(2)
    doneconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    doneconnectButton.click()
    
    sleep(2)
    disconnectButton= driver.find_element(by=AppiumBy.xpath,value="").click()
    disconnectButton.click()
    
    sleep(2)
    passenter= driver.find_element(by=AppiumBy.xpath,value="").click()
    passenter.click()
    passenter.send_keys('')

    sleep(2)
    next2Button= driver.find_element(by=AppiumBy.xpath,value="").click()
    next2Button.click()
 
   
   
    # sleep(2)
    
driver.quit()

