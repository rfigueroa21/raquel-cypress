//import { loginLocators } from 'C:\Users\rfigueroa\cypress-realworld-app\cypress\locators\login.js'

describe('Real World App Test', () => {

    beforeEach(() => {
        //login
        cy.visit('http://localhost:3000/')
        cy.get('#username').clear().type('Katharina_Bernier')
        cy.get('#password').clear().type('s3cret')
        cy.get('.MuiButton-label').click()
    })
    
    it('Create Bank Account', () => {
        cy.get('a:nth-child(3) div:nth-child(2) span:nth-child(1)').click()
        cy.get('a[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"]').scrollIntoView().click()
        cy.get('#bankaccount-bankName-input').clear().type('ACME Bank Account')
        cy.get('#bankaccount-routingNumber-input').clear().type('425412365')
        cy.get('#bankaccount-accountNumber-input').clear().type('456327892')
        cy.get('button[type="submit"]').click()
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').find('li').invoke('text').should('includes','ACME Bank Account')

    })

    it('Delete Bank Account', () => {
       cy.get('a:nth-child(3) div:nth-child(2) span:nth-child(1)').click()
       cy.get('[class="MuiButton-label"]').eq(3).click()
       cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').find('li').invoke('text').should('includes','ACME Bank Account (Deleted)')
    })

    afterEach(() => {
        //logout
        cy.get('div[class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button"]').click()
    })
   
})