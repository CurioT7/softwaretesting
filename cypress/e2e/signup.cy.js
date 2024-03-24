
import  {SignUpPage } from "../../cypress/support/page_objects/signup"
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
        signUpPage.emailField.should('be.visible').type("ali1213.com")
        signUpPage.emailEnter
        signUpPage.emailFieldErrorMessage.should('be.visible')
        cy.wait(4000)
        signUpPage.emailField.should('be.visible').clear().type("xvxvxgg45cbbccg@gmail.com")
        signUpPage.emailEnter
        cy.wait(4000)
        signUpPage.continueButton
        signUpPage.usernameField.clear().type("du")
        signUpPage.usernameFieldEnter
        signUpPage.usernameFieldMessage.should('be.visible')
        cy.wait(4000)
        signUpPage.usernameField.clear().type("dummy134gdh")
        signUpPage.usernameFieldEnter.should('be.visible')
        signUpPage.usernameFieldErrorMessageValid
        cy.wait(4000)
        signUpPage.passwordField.type("12")
        signUpPage.passwordFieldMessage.should('be.visible')
        signUpPage.continue2Button
        cy.wait(4000)
        signUpPage.passwordField.clear().type("132/sf34")
        signUpPage.passwordFieldEnter
        cy.wait(2000)
        signUpPage.continue4Button
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

       
    })

   
})