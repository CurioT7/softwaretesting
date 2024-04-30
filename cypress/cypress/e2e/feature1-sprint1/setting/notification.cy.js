import { AccountSettingsPage } from "../../../support/page_objects/setting/accountsetting";
import { login1 } from '../../../utils/login'
describe('notification', () => {

    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    
    it('Notification Buttons ON/OFF', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        accountSettingsPage.setButton
        accountSettingsPage.settButton
        accountSettingsPage.notification
        cy.wait(2000)
        accountSettingsPage.mentionsofUsernameSwitch
        cy.wait(2000)
        accountSettingsPage.mentionsofUsernameSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.mentionsofUsernameSwitch.should('not.be.checked');
        cy.wait(2000)


        accountSettingsPage.commentsOnYourPostsSwitch
        cy.wait(2000)
        accountSettingsPage.commentsOnYourPostsSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.commentsOnYourPostsSwitch.should('not.be.checked');
        cy.wait(2000)


        accountSettingsPage.upvotesOnYourPostsSwitch
        cy.wait(2000)
        accountSettingsPage.upvotesOnYourPostsSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.upvotesOnYourPostsSwitch.should('not.be.checked');
        cy.wait(2000)


        accountSettingsPage.upvotesOnYourCommentsSwitch
        cy.wait(2000)
        accountSettingsPage.upvotesOnYourCommentsSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.upvotesOnYourCommentsSwitch.should('not.be.checked');
        cy.wait(2000)


        accountSettingsPage.repliesToYourCommentsSwitch
        cy.wait(2000)
        accountSettingsPage.repliesToYourCommentsSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.repliesToYourCommentsSwitch.should('not.be.checked');
        cy.wait(2000)

        accountSettingsPage.newFollowersSwitch
        cy.wait(2000)
        accountSettingsPage.newFollowersSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.newFollowersSwitch.should('not.be.checked');
        cy.wait(2000)


        accountSettingsPage.postsYouFollowSwitch
        cy.wait(2000)
        accountSettingsPage.postsYouFollowSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.postsYouFollowSwitch.should('not.be.checked');
        cy.wait(2000)

    })
   
})