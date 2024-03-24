import{AccountSettingsPage} from '../../support/page_objects/setting/accountsetting'
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')

describe('emails', () => {

   
    // beforeEach('login and open home page', () => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     login(data.user.username, data.user.password)
    //     cy.wait(3000)
    // })
    
    it('emails', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/email')
        cy.wait(2000)
        accountSettingsPage.newFollowersEmailSwitch
        cy.wait(2000)
        accountSettingsPage.newFollowersEmailSwitch
        accountSettingsPage.chatRequestSwitch
         cy.wait(2000)
         accountSettingsPage.chatRequestSwitch
         cy.wait(2000)
         accountSettingsPage.unsubscripeFromAllEmailsSwitch
         cy.wait(2000)
         accountSettingsPage.unsubscripeFromAllEmailsSwitch
    })
   
  
})