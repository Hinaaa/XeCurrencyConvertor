const data=require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData1.json'); 
const conversionHelperObj= require("../../pagefactory/conversionHelper");
const conversionSupportPageObj = require('../../pageobject/conversionSupportPage');
const assertionsValidations= require("../../pagefactory/outputAssertions");
const sel = new conversionSupportPageObj() 
let i=0;

require('cypress-xpath')

describe('1_Alternate_Validate Signup Enabled on Sign In And Register With Email And Password Page', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
          cy.visit(pageURL.url3) //visit URL
         
        })
      });
    Object.keys(data)
        .forEach(function(tc,i){
            const testData=data[i];
            it(testData.tc,function() {
                execute(testData)
            })
        })
})
function execute(data) {

    //Validate Signin Page appear
    cy.contains('Welcome back').should('exist')
    cy.contains('Please enter your login details below.').should('exist')
    
    //Validate Signup Button Enabled
    assertionsValidations.SignUpEnabled()

}
  
