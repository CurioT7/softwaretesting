import { AccountSettingsPage } from "../../../support/page_objects/setting/accountsetting";
import { login1 } from '../../../utils/login'

describe('safety', () => {

   
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });
    
    // it('safetyAndPrivacy', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.safetyAndPrivacy
    //     cy.wait(2000)
    //     accountSettingsPage.blockNewUserField.should('be.visible').type("ali")
    //     cy.wait(2000)
    //     accountSettingsPage.blockNewUserButton
    //     //cy.wait(3000)
    //     //accountSettingsPage.removeBlockedNewUserButton
    //     // cy.reload();
    //     // cy.get('.customize-privacy-section > :nth-child(4) > :nth-child(5)').should('contain', 'ali');
    // })
    
   it('mute community',()=>{

    const accountSettingsPage = new AccountSettingsPage(); 
        accountSettingsPage.setButton
        accountSettingsPage.settButton
        accountSettingsPage.safetyAndPrivacy
        cy.wait(20000)
        accountSettingsPage.addNewCommunitiesYouWantToMuteField.should('be.visible').type("karina")
        cy.wait(2000)
        accountSettingsPage.addNewCommunitiesYouWantToMuteButton
        cy.wait(3000)
        accountSettingsPage.removeNewCommunitiesYouWantToMuteButton
        cy.wait(2000)
        accountSettingsPage.addNewCommunitiesYouWantToMuteField.should('be.visible').type("karina")
        accountSettingsPage.addNewCommunitiesYouWantToMuteButton
        cy.reload();
       // cy.contains('karina', { timeout: 10000 }).should('exist');
        cy.get('.css-1na0n86 > .chakra-text').should('contain', 'karina');
   })

})