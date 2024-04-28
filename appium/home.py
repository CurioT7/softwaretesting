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
viewmenuButton_Xpath_sort=""
allButton_Xpath_sort=""
typesButton_Xpath_sort=""
selecttypebutton_Xpath_sort=""


def sorting_by_hot():
    # Assuming 'driver' is already defined and set up for automation

    # Click on the sort button (assuming the XPath is provided correctly)
    driver.find_element(by=AppiumBy.xpath, value=viewmenuButton_Xpath_sort="").click()

    # Click on the view menu button
    viewmenuButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    viewmenuButton.click()
    sleep(2)

    # Click on the 'All' button
    allButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    allButton.click()
    sleep(2)

    # Assuming you meant 'implicitly_wait' instead of 'implicity_wait'
    driver.implicitly_wait(3)

    # Click on the 'Types' button
    typesButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    typesButton.click()
    sleep(2)

    driver.implicitly_wait(3)

    # Click on the specific type button (assuming the XPath is provided correctly)
    selecttypebutton = driver.find_element(by=AppiumBy.xpath, value="").click()
    selecttypebutton.click()

    sleep(2)

    # Example assertion to check if a specific element is present after sorting
    assert driver.find_element(by=AppiumBy.xpath, value="your_xpath_here").is_displayed(), "Element not found after sorting"

    # Quit the driver after sorting (assuming this is the end of your test case)
    driver.quit()
    
    
def sorting_by_new():
    # Assuming 'driver' is already defined and set up for automation

    # Click on the sort button (assuming the XPath is provided correctly)
    driver.find_element(by=AppiumBy.xpath, value=viewmenuButton_Xpath_sort="").click()

    # Click on the view menu button
    viewmenuButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    viewmenuButton.click()
    sleep(2)

    # Click on the 'All' button
    allButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    allButton.click()
    sleep(2)

    # Assuming you meant 'implicitly_wait' instead of 'implicity_wait'
    driver.implicitly_wait(3)

    # Click on the 'Types' button
    typesButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    typesButton.click()
    sleep(2)

    driver.implicitly_wait(3)

    # Click on the specific type button (assuming the XPath is provided correctly)
    selecttypebutton = driver.find_element(by=AppiumBy.xpath, value="").click()
    selecttypebutton.click()

    sleep(2)

    # Example assertion to check if a specific element is present after sorting
    assert driver.find_element(by=AppiumBy.xpath, value="your_xpath_here").is_displayed(), "Element not found after sorting"

    # Quit the driver after sorting (assuming this is the end of your test case)
    driver.quit()
    
    
    def sorting_by_top():
    # Assuming 'driver' is already defined and set up for automation

    # Click on the sort button (assuming the XPath is provided correctly)
     driver.find_element(by=AppiumBy.xpath, value=viewmenuButton_Xpath_sort="").click()

    # Click on the view menu button
    viewmenuButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    viewmenuButton.click()
    sleep(2)

    # Click on the 'All' button
    allButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    allButton.click()
    sleep(2)

    # Assuming you meant 'implicitly_wait' instead of 'implicity_wait'
    driver.implicitly_wait(3)

    # Click on the 'Types' button
    typesButton = driver.find_element(by=AppiumBy.xpath, value="").click()
    typesButton.click()
    sleep(2)

    driver.implicitly_wait(3)

    # Click on the specific type button (assuming the XPath is provided correctly)
    selecttypebutton = driver.find_element(by=AppiumBy.xpath, value="").click()
    selecttypebutton.click()

    sleep(2)

    # Example assertion to check if a specific element is present after sorting
    assert driver.find_element(by=AppiumBy.xpath, value="your_xpath_here").is_displayed(), "Element not found after sorting"

    # Quit the driver after sorting (assuming this is the end of your test case)
    driver.quit()
