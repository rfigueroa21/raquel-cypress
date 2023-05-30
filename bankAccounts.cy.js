/// <reference types="cypress" />

import {BankAccountPage } from "../../page-objects/pages/bankAccounts"

describe ('Real World app tests', () => {
    let UUID = Math.random()
    let bankName = 'Generic Bank Account ' + UUID
    let routingName = '012345678'
    let accountNumber = '9876543210'

    beforeEach(() => {
        //login
        cy.visit('http://localhost:3000/')
        cy.get('#username').clear().type('Katharina_Bernier')
        cy.get('#password').clear().type('s3cret')
        cy.get('.MuiButton-label').click()
    }) 
    
    it('should create a Bank Account', () => {
        BankAccountPage.createBankAccount(UUID, bankName, routingName, accountNumber)
    })

    it('should delete a Bank Account', () => {
        BankAccountPage.deleteBankAccount(UUID)
    })

    afterEach(() => {
        //logout
        cy.get('div[class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button"]').click()
    }) 

})
