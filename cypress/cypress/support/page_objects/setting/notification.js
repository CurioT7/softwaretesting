import AccountSettingsPage from '../../support/page-objects/account-settings'
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')

describe('notification', () => {

   
    beforeEach('login and open home page', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        login(data.user.username, data.user.password)
        cy.wait(3000)
    })
    
    it('mentionsofUsername', () => {
        AccountSettingsPage.mentionsofUsernameSwitch.should('be.visible').click({force:true})
    })
    it('commentsOnYourPosts', () => {
        AccountSettingsPage.commentsOnYourPostsSwitch.should('be.visible').click({force:true})
    })
    it('upvotesOnYourPosts', () => {
        AccountSettingsPage.upvotesOnYourPostsSwitch.should('be.visible').click({force:true})
    })
    it('repliesToYourComments', () => {
        AccountSettingsPage. repliesToYourCommentsSwitch.should('be.visible').click({force:true})
    })
    it('newFollowers', () => {
       AccountSettingsPage.newFollowersSwitch.should('be.visible').click({force:true})
    })
    it(' postsYouFollow', () => {
        AccountSettingsPage. postsYouFollowSwitch.should('be.visible').click({force:true})
    })
   
})