
const { functionsIn } = require("lodash");
const conversionHelperObj = require("../pageobject/conversionSupportPage");

const sel = new conversionHelperObj()

//Function to Convert Currency for given Currency Type from and To parameters
async function convertCurrency(currencyFromType,currencyToType,amountToConvert){
    sel.selectCovertFrom(currencyFromType) //select from currency type
    sel.selectCovertTo(currencyToType) //select from currency type
    sel.typeAmount(amountToConvert) //enter amount to convert
    sel.clickConvert() //click convert
}

//Function to Enter Alphabetic Characters in Amount filed, provided as input in  parameters
async function enterAlphabetCharacterToConvertCurrency(currencyFromType,currencyToType,amountToConvert){
    sel.selectCovertFrom(currencyFromType) //select from currency type
    sel.selectCovertTo(currencyToType) //select to currency type
    sel.typeAmountInAphabeticCharacters(amountToConvert) //enter amount to convert
}

//Function to Click SignIn Page
async function gotoSignIn(currencyFromType,currencyToType,amountToConvert){
    sel.clickSignInButton() //select from currency type
}

module.exports={convertCurrency,enterAlphabetCharacterToConvertCurrency,gotoSignIn};
