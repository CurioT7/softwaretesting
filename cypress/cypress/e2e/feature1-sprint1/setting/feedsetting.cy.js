import{AccountSettingsPage} from '../../../support/page_objects/setting/accountsetting'
import { login1 } from '../../../utils/login'
describe('feedSettings', () => {
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

  //   it('showMatureContent', () => {
  //   const accountSettingsPage = new AccountSettingsPage(); 
  //   accountSettingsPage.setButton
  //   accountSettingsPage.settButton
  //   accountSettingsPage.feed
  //   cy.wait(2000)
  //   accountSettingsPage.showMatureContentSwitch
  //   cy.wait(2000)
  //   accountSettingsPage.showMatureContentSwitch
  //   cy.wait(2000)
  //   cy.reload();
  //   accountSettingsPage.showMatureContentSwitch.should('not.be.checked');
  // })
    
    // it('autoplayMedia', () => {
    // const accountSettingsPage = new AccountSettingsPage(); 
    // accountSettingsPage.setButton
    // accountSettingsPage.settButton
    // accountSettingsPage.feed
    // cy.wait(2000)
    // accountSettingsPage.autoplayMediaSwitch
    // cy.wait(2000)
    // accountSettingsPage.autoplayMediaSwitch
    // cy.wait(2000)
    // cy.reload();
    // accountSettingsPage.autoplayMediaSwitch.should('not.be.checked');
    //  })
     
    // it('communityThemes', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.feed
    //     cy.wait(2000)
    //     accountSettingsPage. communityThemesSwitch
    //     cy.wait(2000)
    //     accountSettingsPage. communityThemesSwitch
    //     cy.wait(2000)
    //     cy.reload();
    //     accountSettingsPage.communityThemesSwitch.should('not.be.checked');
        
    //  })


    //  it('communityContentSort', () => {
    //    const accountSettingsPage = new AccountSettingsPage(); 
    //    accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.feed
    //     cy.wait(2000)
    //    accountSettingsPage.communityContentSortCheck
    //    cy.wait(2000)
    //    cy.get(':nth-child(6) > :nth-child(1) > .css-c6lgk8 > .chakra-select__wrapper > [data-testid="sort-dropdown"]').should('contain.text', 'New');
    //    cy.visit('http://localhost:5173/r/community23priv')
    //    cy.get('.dropbtn').should('contain','New')
    //   })



    //  it(' globalContentView', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.feed
    //     cy.wait(2000)
    //     accountSettingsPage. globalContentViewCheck
    //     cy.get(':nth-child(7) > :nth-child(1) > .css-c6lgk8 > .chakra-select__wrapper > [data-testid="sort-dropdown"]').should('contain.text', 'Classic');
    //     cy.reload();
    //     cy.get(':nth-child(7) > :nth-child(1) > .css-c6lgk8 > .chakra-select__wrapper > [data-testid="sort-dropdown"]').should('contain.text', 'Classic');
    //     cy.visit('http://localhost:5173/')
    //  })


    // it('openPostsInNewTabSwitch', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.feed
    //     cy.wait(2000)
    //     accountSettingsPage.openPostsInNewTabSwitch
    //     cy.wait(2000)
    //     accountSettingsPage.openPostsInNewTabSwitch
    //     cy.wait(2000)
    //      cy.reload();
    //     accountSettingsPage.openPostsInNewTabSwitch.should('not.be.checked');
    //     cy.wait(2000)
    //     accountSettingsPage.openPostsInNewTabSwitch
    //     cy.wait(2000)
    //     cy.visit('http://localhost:5173/')
    //     cy.wait(2000)
    //     cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click()
    //     cy.get('#root > :nth-child(1)').should('be.notexist')
    // })
    
})