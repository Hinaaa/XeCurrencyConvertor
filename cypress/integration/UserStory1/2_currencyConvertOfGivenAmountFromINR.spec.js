const data=require('../../testData/data2.json'); 
const outputData=require('../../outputData/outputData2.json'); 
const conversionHelperObj= require("../../pagefactory/conversionHelper");
const conversionSupportPageObj = require('../../pageobject/conversionSupportPage');
const assertionsValidations= require("../../pagefactory/outputAssertions");
const sel = new conversionSupportPageObj() 
let i=0;

require('cypress-xpath')

describe('Convert currency for given amount, From and To currancy type Via Calculator', function ()  {
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
  //Covert Currencey. Input Currency From = INR, To = EUR and amount to be converted from data3 file
  conversionHelperObj.convertCurrency(data.currencyFromType,data.currencyToType,data.amountToConvert)
  //Calculate data correctly calculated, current currency rates provided in ooutputData2 file. Then validate calculated results with actual results
   assertionsValidations.validateConvertedRates(outputData.currancyRateGPBtoEUR,data.amountToConvert)

}
  
