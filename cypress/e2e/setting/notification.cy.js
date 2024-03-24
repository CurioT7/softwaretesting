import { AccountSettingsPage } from "../../support/page_objects/setting/accountsetting";
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')

describe('notification', () => {

    // beforeEach('login and open home page', () => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     login(data.user.username, data.user.password)
    //     cy.wait(3000)
    // })
    
    it('Notification Buttons ON/OFF', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/notifications')
        accountSettingsPage.mentionsofUsernameSwitch
        accountSettingsPage.commentsOnYourPostsSwitch
        accountSettingsPage.upvotesOnYourPostsSwitch
        accountSettingsPage.upvotesOnYourCommentsSwitch
        accountSettingsPage.repliesToYourCommentsSwitch
        accountSettingsPage.newFollowersSwitch
        accountSettingsPage.postsYouFollowSwitch

    })
   
})