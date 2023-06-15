const apiBankAccounts = `${Cypress.env("apiUrl")}/bankAccounts`;

describe('API Bank Account Tests', function (){
   let accountNumberID = [];


   beforeEach(function (){
      cy.login('Katharina_Bernier', 's3cret', {rememberUser: true});
   })

   it("should create a new bank account", () => {
      for(let i = 0; i < 5; i++){
         cy.request("POST", `${apiBankAccounts}`, {
            accountNumber: "0123456789",
            bankName: "Raquel Bank Acount " + i,
            createdAt: "1686676916893",
            id: "9aCt7pxhp",
            isDeleted: false,
            modifiedAt: "1686676916893",
            routingNumber: "9876543210",
            userId: "t45AiwidW",
            uuid: "a5d0f63b-9632-4c6e-9048-9a7e96fe0850"
         }).then((response) => {
            console.log(response)
           // accountNumberID = response.body.account.id;
            accountNumberID.push(response.body.account.id);
            console.log(accountNumberID)
            expect(response.status).to.eq(200);
         })
      }
   })

   it("should show all bank accounts", () => {
         accountNumberID.forEach(item => {
         cy.request("GET", `${apiBankAccounts}`, {item})
         console.log(item)
      })
   })

   it("should show a bank account list", () => {
         accountNumberID.forEach(item => {
         console.log(item)
         cy.request("DELETE", `${apiBankAccounts}`, {item})
      })
   })
})