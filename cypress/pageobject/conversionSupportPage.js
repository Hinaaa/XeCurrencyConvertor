
class  conversionSupportPage{

    //Page for Element IDs and actions

    clickCheckRates() {
        cy.get('[href="/send-money/"]').click().wait(1000)
    }
    selectCheckRatesCurrencyFrom(currencyFromType) {
        cy.get('[id="sending-currency"]').click()
        cy.get('[id="sending-currency"]').type(currencyFromType)
        cy.get('[id="sending-currency-listbox"]').within(()=>{
            cy.contains(currencyFromType).first().click()
        })
    }
    selectCheckRatesCurrencytypeAmount() {
        cy.get('[class="amount-input"]').click() 
        cy.get('[class="amount-input"]').clear() //it will get clear
        cy.get('[class="amount-input"]').type(1).wait(1000)
    }

    selectCheckRatesCurrencyTo(currencyToType) {
        cy.get('[id="receiving-currency"]').click()
        cy.get('[id="receiving-currency"]').type(currencyToType)
        cy.get('[id="receiving-currency-listbox"]').within(()=>{
            cy.contains(currencyToType).first().click().wait(2000)
        })
    }
    checkRatesGetCurrencyRate(currentRate) {
        cy.contains('Text','Rate').next().next().then(($text1) => {            
            currentRate = $text1.text();
            return currentRate
          });
    }
    
    selectCovertFrom(currencyFromType) {
        cy.log(currencyFromType)
        cy.get('[id="midmarketFromCurrency"]').eq(0).click().wait(1000)
        cy.get('[id="midmarketFromCurrency"]').eq(1).type(currencyFromType)
        cy.get('[id="midmarketFromCurrency-listbox"]').within(()=>{
            cy.contains(currencyFromType).first().click()
        })
    }
    selectCovertTo(currencyToType) {
        cy.get('[id="midmarketToCurrency"]').eq(0).click().wait(1000)
        cy.log(currencyToType)
        cy.get('[id="midmarketToCurrency"]').find('input').type(currencyToType)
        cy.get('[id="midmarketToCurrency-listbox"]').within(()=>{
            cy.contains(currencyToType).first().click()
        })
    }
    typeAmount(amountToConvert) {
        cy.get('[id="amount"]').eq(0).click() //it will get clear
        cy.get('[id="amount"]').eq(0).type(amountToConvert).wait(1000)
    }
    typeAmountInAphabeticCharacters(amountToConvert) {
        cy.get('[id="amount"]').eq(0).click() //it will get clear
        cy.get('[id="amount"]').eq(0).type(amountToConvert).wait(1000)
    }
    clickConvert() {
        cy.get('[class="button__BaseButton-sc-1qpsalo-0 clGTKJ"]').within(()=>{ //This class can get  change if dynamic
            cy.contains('Convert').click().wait(1000)
        })
    }
    clickSignInButton() {
        cy.get('[class="Submenus__NavSubmenuButton-sc-2ubi8a-7 DWHUy"]').within(()=>{ //This class can get  change if dynamic
            cy.contains('Sign In').click().wait(1000)
        })
    }

    clickSignInButton() {
        cy.get('[class="Submenus__NavLinkBase-sc-2ubi8a-3 bnLTGq"]').within(()=>{ //This class can get  change if dynamic
            cy.get('[href="https://transfer.xe.com/account/login/home?icid=XECOM:Home:LoginBut:Login:Glob:HPXEMTLogin&ctaPosition=header"]').click().wait(1000)
        })
    }
    clickSignUp() {
        cy.get('[data-tracking-id="signup-link"]').click().wait()
    }
}
module.exports = conversionSupportPage;