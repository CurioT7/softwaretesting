
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
         signUpPage.emailField.should('be.visible').type("maramtarek377gmail.com")
        signUpPage.continueButton
         cy.wait(4000)
         signUpPage.emailField.clear().should('be.visible').type("maramtarek377@gmail.com{enter}")
         signUpPage.continueButton
         signUpPage.continueButton
         cy.wait(3000)
        signUpPage.usernameField.clear().type("du")
        cy.wait(2000)
        signUpPage.passwordField.type("12")
        signUpPage.continue2Button
        signUpPage.usernameField.clear().type("mohamed122")
        cy.wait(4000)
        signUpPage.passwordField.clear().type("maram1212")
        cy.wait(2000)
        signUpPage.continueButton
        signUpPage.continueButton
         cy.wait(4000)
        signUpPage.selectgenderButton
        cy.wait(4000)
         signUpPage.backButton
        cy.wait(3000)
        signUpPage.skipButton
        cy.wait(3000)
    signUpPage.intrestButton
    cy.wait(3000)
    signUpPage.continue3Button
    cy.url().should('eq', 'http://localhost:5173/');
       
    })

   
})