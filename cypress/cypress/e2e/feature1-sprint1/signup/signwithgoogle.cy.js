import  {SignUpPage } from "../../../support/page_objects/signup1"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('signup', () => {
//     
    it('signup', () => {
        const signUpPage = new SignUpPage(); 
        cy.visit('http://localhost:5173/login#')
        signUpPage.signUpButton
        cy.wait(3000)
         signUpPage.signUpWithGoogle
       
    })

   
})