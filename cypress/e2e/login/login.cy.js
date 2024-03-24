import { LoginPagePo } from "../../support/page_objects/login/LoginPagePo"
//import { loginPage } from "./login.const"
// const data = require('../../fixtures/data.json')

describe('login page', () => {
   
    // beforeEach('load fixture', () => {
    //     cy.visit('http://localhost:5173/login#')
    //     cy.fixture("data").then((data) => {
    //         globalThis.data = data
    //     })
    // })
    
    // it('login with google', () => {
    //     //cy.get(loginPage.loginselector)
    //     LoginPagePo.loginButton.should('be.visible').click()
    //     LoginPagePo.googleLoginButton.should('be.visible').click()
    //     LoginPagePo.xButton.should('be.visible').click()
    //     cy.url().should('include', '/Home')
    //     //LoginPagePo.logoutbutton.should('be.visible').click()
    // })

    // it('login with apple', () => {
    //     LoginPagePo.loginButton.should('be.visible').click()
    //     LoginPagePo.appleLoginButton.should('be.visible').click()
    //     LoginPagePo.xButton.should('be.visible').click()
    //     cy.url().should('include', '/Home')
    //     LoginPagePo.logoutbutton.should('be.visible').click()
    // })

    // it('login with username and  valid password', () => {
    //     LoginPagePo.inputFieldLoginUsername.should('be.empty').type(data.loginPage.username)
    //     LoginPagePo.inputFieldLoginPassword.should('be.empty').type(data.loginPage.validPassword)
    //     LoginPagePo.loginButton.click()
    //     cy.url().should('include', '/Home')
    //     LoginPagePo.logoutbutton.click()
    // })
    
    //------------->done

    it('forgot password screen', () => {
        const loginpagepo = new LoginPagePo();
        cy.visit('http://localhost:5173/login#')
        cy.wait(2000)
        loginpagepo.forgotButtonPassword
        loginpagepo.inputFieldPassUsername.should('be.visible').type("du") 
        // loginpagepo.errorMessageBox.should('be.visible').and('contain', "must enter 3 or more characters");
        loginpagepo.inputFieldPassUsername.should('be.visible').type("dusg123") 
        cy.wait(2000)
        loginpagepo.inputFieldPassEmail.should('be.visible').type("dubdgamil.com")
        // loginpagepo.errorMessageBox.should('not.be.visible')
        loginpagepo.resetPassButton
        loginpagepo.inputFieldNewPass.should('be.visible').type("1")
        loginpagepo.inputFieldNewPass.clear().should('be.visible').type("124567")
        loginpagepo.contfirmPass.should('be.visible').type("1djh")
        loginpagepo.resetDoneButton
        loginpagepo.contfirmPass.should('be.visible').type("124567")
        loginpagepo.resetDoneButton
    
    })

    it ('forgot username screen', () => {
        const loginpagepo = new LoginPagePo(); 
        cy.visit("http://localhost:5173")
        loginpagepo.gotitButton
        cy.wait(2000)
        loginpagepo.loginRestButton
        cy.wait(3000)
        loginpagepo.loginButton
        cy.wait(4000)
        loginpagepo.forgotButtonUsername
        loginpagepo.inputFieldUserEmail.clear().should('be.visible').type("dummydummy.com")
        cy.wait(1000); // Wait for the error message to appear (adjust the wait time as needed)
        // loginpagepo.errorMessageBox.should('contain', "must include @")
        loginpagepo.inputFieldUserEmail.clear().should('be.visible').type("dummydummy@gmail.com")
        // loginpagepo.errorMessageBox.should('not.be.visible')
        loginpagepo.emailmeButton
        loginpagepo.emailmeButton.click();
        //cy.url().should('eq', 'http://localhost:5173')
     })
    
   

   
})