import {Createcommunity} from '../../support/page_objects/comm/createcommunity'
import { SignUpPage } from '../../support/page_objects/signup1'
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import{data} from '../../fixtures/data.json'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Communities', () => {

   
    // beforeEach('login and open home page', () => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     login(data.user.username, data.user.password)
    //     cy.wait(3000)
    // })
    
    it('create Community', () => {
        const createcommunity = new Createcommunity();
        const signUpPage = new SignUpPage();
        cy.visit('http://localhost:5173/')
        signUpPage.goButton
        cy.wait(3000)
        signUpPage.loginButton
        cy.wait(3000)
        signUpPage.signUpWithGoogle
        signUpPage.emailField.should('be.visible').type("sm1234@gmail.com")
        signUpPage.continueButton
        signUpPage.usernameField.clear().type("dummy134communi")
        cy.wait(4000)
        signUpPage.passwordField.clear().type("com1234rrrrrr")
        cy.wait(4000)
        signUpPage.continue4Button
        signUpPage.selectgenderButton
        signUpPage.backButton
        signUpPage.skipButton
        signUpPage.intrestButton
        signUpPage.continue3Button
        createcommunity.createCommunityButton
        createcommunity.addCommunityButton
        createcommunity.nameField.type("community1234j")
        createcommunity.createCommunityButtonSave
        
    })
   
  
})
