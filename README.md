# XeCurrencyConvertor
Automation for XeCurrencyConvertor, as per requirements
User Story1, User Story2 and API Scenarios Covered 

**Pre requisites**
Node js -16.13.0 or any latest version
Visual Studio IDE  , to view the files

**Running test:**
 
 Install dependencies by running npm i
 
 Execute the below command
 
 npm run test
 #Cypress window will open, select the test case which need to be executed

**TestSuit1:API Scenarios**

**TestCases**

1. Validate GET Request, Validate Response Message Body Have Content and not Contain Word Zombie
2. Validate POST Request Validate Status and Validate Topping Contains Bacon Cheese and Mushroom but not Contain Chicken

**TestSuit2:UserStory1**

**TestCases**

1. Error Message on Entering Alphabet Characters in Currency Convertor Calculator
2. Currency Convert of Given Amount From INR
3. Validate Convert Button and Currency Conver to Given Amount Via Calculator GPB to EUR

**TestSuit3:UserStory2**

**TestCases**

1. ValidateSignupEnabledOnSignInAndRegisterWithEmailAndPassword' (This Test Case Failed due to Exception in application: Uncaught TypeError: Cannot read properties of undefined (reading 'load'), so alternate test case created to validate signup enabled)
2. Alternate_ValidateSignupEnabledOnSignInAndRegisterWithEmailAndPassword'.spec.spec


**Folder structure**

Cypress/integration-: This consist of the spec file for each testcase

cypress/pagefactory-: All the resuable function are created under this, including assertions in seperate file

cypress/pageobject-: The xpath are captured and placed

cypress/testdata-: The testdata which is passed to the spec file, the data was passed in json format

cypress/outputData-: The testdata for output which is passed to the spec file, the data was passed in json format

**Approaches and automation concept used**

1. Page object model approach followed
2. Centralized approach for reusability like centralized URL
3. Assertions has been placed for validation in seperate file
4. Comments mentioned for better understanding
5. Maintainable and re-usable code

Choosing tech stack: Cypress has been used as recommended

Please Note: Test case might get failed due to change in currency rates for that latest rates need to be given output2/3 files. This manual approch can resolved if getting the access of database or fetching rate source 
