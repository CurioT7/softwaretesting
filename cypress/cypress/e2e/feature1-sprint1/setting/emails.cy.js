import{AccountSettingsPage} from '../../../support/page_objects/setting/accountsetting'
import { login1 } from '../../../utils/login'

describe('emails', () => {

    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });
    
    it('emails', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        accountSettingsPage.setButton
        accountSettingsPage.settButton
        accountSettingsPage.emails
        cy.wait(2000)
        accountSettingsPage.newFollowersEmailSwitch
        cy.wait(2000)
        accountSettingsPage.newFollowersEmailSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.newFollowersEmailSwitch.should('not.be.checked');
        cy.wait(2000)

        accountSettingsPage.chatRequestSwitch
        cy.wait(2000)
        accountSettingsPage.chatRequestSwitch
        cy.wait(2000)
        cy.reload();
        accountSettingsPage.chatRequestSwitch.should('not.be.checked');
        cy.wait(2000)

        accountSettingsPage.unsubscripeFromAllEmailsSwitch
        cy.wait(2000)
        accountSettingsPage.unsubscripeFromAllEmailsSwitch
        cy.reload();
        accountSettingsPage.unsubscripeFromAllEmailsSwitch.should('not.be.checked');
        cy.wait(2000)
    })
   
  
})