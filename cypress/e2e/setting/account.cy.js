// import { data } from 'cypress/types/jquery'
import {AccountSettingsPage} from '../../support/page_objects/setting/accountsetting'
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')

describe('Changing email', () => {


    
    it('changing email', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage.changeEmailAddressButton
        accountSettingsPage.currentPasswordField.should('be.visible').type("1234")
        accountSettingsPage.newEmailField.should('be.visible').type( "dummy134@dummy.com")
        accountSettingsPage.saveEmailButton
        cy.wait(2000)
        accountSettingsPage.currentPasswordField.should('be.visible').type("1234567y")
        accountSettingsPage.newEmailField.should('be.visible').type( "dummy134@dummy.com")
        accountSettingsPage.saveEmailButton
        accountSettingsPage.gotitButton
        cy.wait(2000)
       
    })
    it('changing Password', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage.changePasswordButton
        accountSettingsPage. oldPasswordField.should('be.visible').type("1234567y")
        accountSettingsPage.newPasswordField.should('be.visible').type("1234")
        accountSettingsPage.confirmPasswordField.should('be.visible').type("1234")
        cy.wait(3000)
        accountSettingsPage.savePasswordButton
        accountSettingsPage.newPasswordField.should('be.visible').clear().type("1234qwer")
        accountSettingsPage.confirmPasswordField.should('be.visible').type("12345qwer")
        accountSettingsPage.savePasswordButton
        cy.wait(3000)
        accountSettingsPage.confirmPasswordField.should('be.visible').clear().type("1234qwer")
        accountSettingsPage.savePasswordButton
        cy.wait(3000)
        accountSettingsPage.xPasswordButton

    })

    it('select gender', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage. genderSelection.should('be.visible')
        cy.wait(2000)
      
     })

    it('select your location', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage. locationCustomization  
        cy.wait(2000)
    })

    it('shows google login button', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage.connectToGoogle
        accountSettingsPage. googlePass.should('be.visible').type("123")
        accountSettingsPage.googleContinueButton
        cy.wait(2000)
        accountSettingsPage. googlePass.should('be.visible').clear().type("12345678")
        accountSettingsPage.googleContinueButton
        cy.wait(2000)
        accountSettingsPage.googleClose
    })

    it('delete your account', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage.deleteAccountButton
        accountSettingsPage.deleteReason.type('Reason')
        accountSettingsPage.deleteUsername.type('1234')
        accountSettingsPage.deletePass.type('123')
        accountSettingsPage.deleteCheck
        accountSettingsPage.deleteRemoveButton
        cy.wait(2000)
        accountSettingsPage.deleteCancelButton
        cy.wait(1000)
        accountSettingsPage.deleteUsername.clear().type('software_ok')
        accountSettingsPage.deletePass.type('12345678')
        accountSettingsPage.deleteRemoveButton
        cy.wait(2000)
        accountSettingsPage.deleteRemoveButton
    })
  
})