const data=require('../../testData/data3.json'); 
const outputData=require('../../outputData/outputData3.json'); 
const conversionHelperObj= require("../../pagefactory/conversionHelper");
const conversionSupportPageObj = require('../../pageobject/conversionSupportPage');
const assertionsValidations= require("../../pagefactory/outputAssertions");
const sel = new conversionSupportPageObj() 
let i=0;

require('cypress-xpath')

describe('Validate Convert button and convert currency for given amount, From and To currency type Via Calculator', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, defined in fixture
          cy.visit(pageURL.url) //visit URL
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
  //Covert Currencey done via Convert Button. Input Currency From, To Types and amount too be converted I.e 10 Euros which has been fetched from data1
  conversionHelperObj.convertCurrency(data.currencyFromType,data.currencyToType,data.amountToConvert)
  //Calculate data correctly calculated, current currency rates provided in ooutputData1 file. Then validate calculated results with actual results
  assertionsValidations.validateConvertedRates(outputData.currancyRateGPBtoEUR,data.amountToConvert)
}
  
