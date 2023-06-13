
const { functionsIn } = require("lodash");
const conversionSupportPageObj = require("../pageobject/conversionSupportPage");

const sel = new conversionSupportPageObj()

//
async function validateConvertedRates(currancyRateGPBtoEUR, amountToConvert) {
    cy.get('[class="result__BigRate-sc-1bsijpp-1 iGrAod"]').invoke('text').then((convertedAmount) => {
        const currancyRateGPBtoEURValue = parseFloat(currancyRateGPBtoEUR);
        const amountToConvertalue = parseFloat(amountToConvert);
        const convertedAmountToBe = currancyRateGPBtoEURValue * amountToConvertalue
        expect((parseFloat(convertedAmount)).toFixed(2)).to.eq((convertedAmountToBe).toFixed(2))

    });
}

//Function to Validate Convert Button Disabled
async function covertButtonDisabled() {
    cy.get('[class="button__BaseButton-sc-1qpsalo-0 fgPNVQ"]').should('be.disabled')
}

//Function to Validate Error message on Entering Amount in Alphabetic Characters
async function errorMessageOnAlphabeticAmount(errorMessageToBe) {
    cy.get('[class="currency-converter__ErrorText-zieln1-2 dkXbBF"]').invoke('text').then((ActualErrorMessage) => {
        expect(ActualErrorMessage).to.eq(errorMessageToBe)
    });
}

//Function to Validate SignUp enabled
async function SignUpEnabled() {
    cy.get('[class="sc-htpNat jBmnDV"]').within(() => {
        cy.contains('Sign up now').invoke('attr', 'disabled').should('not.exist'); //Validate Sign Up Now Button enabled
        cy.contains('Sign up now').click({force:true})//click Sign Up Now Button
})
}

module.exports = { validateConvertedRates, errorMessageOnAlphabeticAmount, covertButtonDisabled, SignUpEnabled };
