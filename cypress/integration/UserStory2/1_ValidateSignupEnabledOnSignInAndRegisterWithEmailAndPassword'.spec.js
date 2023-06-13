const data = require('../../testData/data1.json');
const outputData = require('../../outputData/outputData1.json');
const conversionHelperObj = require("../../pagefactory/conversionHelper");
const conversionSupportPageObj = require('../../pageobject/conversionSupportPage');
const assertionsValidations = require("../../pagefactory/outputAssertions");
const sel = new conversionSupportPageObj()
let i = 0;

require('cypress-xpath')

describe('1_Validate Signup Enabled on Sign In And Register With Email And Password Page', function () {
  before(() => {
    cy.fixture('navigation/pageURL').then(pageURL => {
      globalThis.pageURL = pageURL; //Centralized url, define in fixture
      cy.visit(pageURL.url2) //visit URL
      cy.wait(2000)
      cy.contains("Millions of people check our rates and send money with us everyday").should('be.visible')

    })
  });
  Object.keys(data)
    .forEach(function (tc, i) {
      const testData = data[i];
      it(testData.tc, function () {
        execute(testData)
      })
    })
})
function execute(data) {
  //Exception placed to handle error
  /* cy.on('uncaught:exception', (err, runnable) => {
       expect(err.message).to.include('of undefined')
         done()
         return false
       }); */

  //Note: This test Case Failed due to Application Error message
  //Click SignIn
  conversionHelperObj.gotoSignIn()

  //Validate Signin Page appear
  cy.contains('Welcome back').should('exist')
  cy.contains('Please enter your login details below.').should('exist')

  //Validate Signup Button Enabled
  assertionsValidations.SignUpEnabled()

}

