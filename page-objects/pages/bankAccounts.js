export class BankAccount{

    url = 'http://localhost:3000/'

    elements = {
        getBankAccountLists: () => cy.get('div.MuiGrid-root p'),
        getBankAccount: () => cy.get['data-test*=bankaccount-list-item-'],
        getBankAccountSidebar: () => cy.get('a:nth-child(3) div:nth-child(2) span:nth-child(1)'),
        getCreateBtn: () => cy.get('[data-test="bankaccount-new"]'),
        getBankName: () => cy.get('#bankaccount-bankName-input'),
        getRoutingNumber: () => cy.get('#bankaccount-routingNumber-input'),
        getAccountNumber: () => cy.get('#bankaccount-accountNumber-input'),
        getSaveBtn: () => cy.get('button[type="submit"]'),
        getDeleteBtn: () => cy.get('button[data-test*="bankaccount-delete"]')
    }

    createBankAccount(UUID, bankName, routingName, accountNumber){
        this.elements.getBankAccountSidebar().click()
        this.elements.getCreateBtn().click()
        this.elements.getBankName().clear().type(bankName)
        this.elements.getRoutingNumber().clear().type(routingName)
        this.elements.getAccountNumber().clear().type(accountNumber)
        this.elements.getSaveBtn().click()
        this.elements.getBankAccountLists().invoke('text').should('includes', UUID)
    } 
    
    deleteBankAccount(UUID){
        this.elements.getBankAccountSidebar().click()
        this.elements.getDeleteBtn().last().click()
        this.elements.getBankAccountLists().last().invoke('text')
            .should('includes', UUID).should('contains', 'Deleted')
    }
}

export const BankAccountPage = new BankAccount()
