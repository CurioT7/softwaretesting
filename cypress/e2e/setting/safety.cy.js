import { AccountSettingsPage } from "../../support/page_objects/setting/accountsetting";
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')

describe('safety', () => {

   
    // beforeEach('login and open home page', () => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     login(data.user.username, data.user.password)
    //     cy.wait(3000)
    // })
    
    it('safetyAndPrivacy', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/account')
        accountSettingsPage.safetyAndPrivacy
        cy.wait(2000)
        accountSettingsPage.blockNewUserField.should('be.visible').type("ajhdvhc")
        accountSettingsPage.blockNewUserButton
        accountSettingsPage.removeBlockedNewUserButton
        cy.wait(20000)
        accountSettingsPage.addNewCommunitiesYouWantToMuteField.should('be.visible').type("karina")
        accountSettingsPage.addNewCommunitiesYouWantToMuteButton
        accountSettingsPage.removeNewCommunitiesYouWantToMuteButton
    
    })
   
  
})