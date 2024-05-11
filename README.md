# softwaretesting
Curio Testing

# Table of Contents

Overview

Web Tests

Link to Videos and Reports

Link to Final Testing Document

# Overview

Welcome to the Curio Testing repository <..>

# Frontend Tests

The frontend tests in this repository are written using Cypress, To run the frontend tests.
Required:

Open a terminal window.

1-npm init -y

2-npm install cypress

3- npx cypress open to open the Cypress GUI.

Click on E2E tests, then choose your preferred browser to run tests inside.

4-you can run the tests headless using npx cypress run.

# Link to Videos and Reports
https://drive.google.com/drive/u/1/folders/1CB1CoExRW1W94gOmzXiMtas12Dq3DCwd

#stress testing

download the Apache Jmeter zipfile via this link: https://jmeter.apache.org/download_jmeter.cgi
After extracting the file:

1.open apache.JAR from bin file create new file

2.Add Thread Group:
  Right-click on the Test Plan and select Add > Threads (Users) > Thread Group.
  Configure the Thread Group settings such as number of threads, ramp-up period, loop count, etc.
  
3.Add Sampler:
  Within the Thread Group, add a Sampler (HTTP Request, JDBC Request, etc.) to simulate user actions.

4.Add Listener:
  Add Listeners to capture and analyze test results. Common Listeners include View Results Tree, Summary Report, Aggregate Report, etc.
  Configure Test:

5.Run Test:
  Save the Test Plan and then click the green play button (Start) to run the test.
  Monitor the test execution through the various listeners added to your test plan.

-> for login stress test;

1. download BLAZEMETER from chromeweb

2. setup the blazemeter

3. record the login process via blazemeter and download the test as .jmx

4. adjust the threadgroup and run the test




