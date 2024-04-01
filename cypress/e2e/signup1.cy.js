
import  {SignUpPage } from "../support/page_objects/signup1"
// import{data} from"../../fixtures/data.json"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('signup', () => {
//     
    it('signup', () => {
        const signUpPage = new SignUpPage(); 
        cy.visit('http://localhost:5173/')
        signUpPage.goButton
        cy.wait(3000)
        signUpPage.loginButton
        cy.wait(3000)
        signUpPage.emailField.should('be.visible').type("ali1213@gmail.com")
        signUpPage.continueButton
        cy.wait(4000)
        signUpPage.usernameField.clear().type("du")
        cy.wait(2000)
       
         signUpPage.passwordField.type("12")
         signUpPage.continue2Button
        signUpPage.usernameField.clear().type("dummy134gdh")
         cy.wait(4000)
         signUpPage.passwordField.clear().type("34132sf34")
        cy.wait(2000)
        signUpPage.continue4Button
        cy.wait(4000)
        signUpPage.continue4Button
        signUpPage.selectgenderButton
        cy.wait(4000)
        signUpPage.backButton
        cy.wait(3000)
        signUpPage.skipButton
        cy.wait(3000)
    //     signUpPage.intrestButton
    //    cy.wait(3000)
    //    signUpPage.continue3Button

       
    })

   
})