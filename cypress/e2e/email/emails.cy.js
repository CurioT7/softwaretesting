import AccountSettingsPage from '../../support/page-objects/account-settings'
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')

describe('emails', () => {

   
    beforeEach('login and open home page', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        login(data.user.username, data.user.password)
        cy.wait(3000)
    })
    
    it('emails', () => {
        AccountSettingsPage.emails.should('be.visible')
        AccountSettingsPage.newFollowersEmailSwitch.should('be.visible').click({force:true})
        cy.wait(1000)
        AccountSettingsPage.chatRequestSwitch.should('be.visible').click({force:true})
        cy.wait(1000)
        AccountSettingsPage.unsubscripeFromAllEmailsSwitch.should('be.visible').click({force:true})
    })
   
  
})