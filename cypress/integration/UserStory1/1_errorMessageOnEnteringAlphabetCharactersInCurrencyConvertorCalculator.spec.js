const data=require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData1.json'); 
const conversionHelperObj= require("../../pagefactory/conversionHelper");
const conversionSupportPageObj = require('../../pageobject/conversionSupportPage');
const assertionsValidations= require("../../pagefactory/outputAssertions");
const sel = new conversionSupportPageObj() 
let i=0;

require('cypress-xpath')

describe('Enter Alphabet Characters in Amount Field, Error message appears.spec.js', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, defined in fixture
          cy.visit(pageURL) //visit URL
          cy.contains("Xe Currency Converter").should('be.visible') //Validate text on home page
          cy.contains("Check live foreign currency exchange rates").should('be.visible') //Validate text on home page
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
  //Covert Currencey. Input Currency From, To and amount = Alphabetic Characters
  conversionHelperObj.enterAlphabetCharacterToConvertCurrency(data.currencyFromType,data.currencyToType,data.amountToConvert)
  //Validate  coonvert button disabled on entering amount = Alphabetic Characters
  assertionsValidations.covertButtonDisabled()
  //Validate  error message on entering amount = Alphabetic Characters
  assertionsValidations.errorMessageOnAlphabeticAmount(outputData.errorMessageToBe)
}
  
