import { AccountSettingsPage } from "../../../support/page_objects/setting/accountsetting";
import { login1 } from '../../../utils/login'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('profile', () => {

  beforeEach(() => {
    // Login before each test
    
    cy.viewport(1600, 1660)
      
    login1('maramtarek2', 'sama1212');
   // cy.visit('http://localhost:5173/settings/account')
});

    // it('profile Display Name, about', () => {
    //   const accountSettingsPage = new AccountSettingsPage(); 
    //   accountSettingsPage.setButton
    //   accountSettingsPage.settButton
    //   accountSettingsPage.profile
    //   cy.wait(1000)
    //   accountSettingsPage.displayNamefield.clear().type('qwertyuioasdfghasdfghjnbvadsfgdrhhhhhhhhhh{enter}')
    //   cy.wait(2000);
    //   accountSettingsPage.displayNamefield.clear().type('Mero{enter}')
    //   cy.wait(2000); // Wait for 2 seconds (adjust as needed) for the profile to update
    //   cy.reload();
    //   cy.wait(2000);
    //   cy.get('#display-name-input').should('be.visible');
    //   cy.wait(2000);
    //   accountSettingsPage.view
    //   accountSettingsPage.user
    //   cy.wait(2000);
    // cy.get('h3.userName').should('contain.text', 'Mero');
    // })

    // it('profile about', () => {
    //   const accountSettingsPage = new AccountSettingsPage(); 
    //   accountSettingsPage.setButton
    //   accountSettingsPage.settButton
    //   accountSettingsPage.profile
    //   cy.wait(1000)
    //   accountSettingsPage.about.type('Limited to 200 words only. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{enter}')
    //   accountSettingsPage.about.clear().type('cairo university faculty of engineer.{enter} ')
    //   cy.wait(2000); // Wait for 2 seconds (adjust as needed) for the profile to update
    //   cy.reload();
    //   cy.get('#about-textarea').should('be.visible');
    //   cy.wait(2000)
    //   accountSettingsPage.view
    //   accountSettingsPage.user
    // // // Check if the input value (display name) is "cairo university faculty of engineer "
    // //   cy.get('#about-textarea').invoke('val').should('eq', 'cairo university faculty of engineer ');
    
    // })

  //   //throwing exception to fail (max5 aqcuired 6)
  //  it(' addSocialLinks', () => {
  //     const accountSettingsPage = new AccountSettingsPage(); 
  //     accountSettingsPage.setButton
  //     accountSettingsPage.settButton
  //     accountSettingsPage.profile
  //     cy.wait(1000)
  //     // accountSettingsPage. addSocialLinksButton
  //     // cy.wait(2000)
  //     // accountSettingsPage.chooseTypeInsta
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('sama')
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(2000)
  //     // accountSettingsPage.chooseTypeface
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('memes')
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyUrlField.type('https://www.facebook.com/share/p/NywtDsnrJZakdhGq/?mibextid=cR73hX')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(2000)
  //     // accountSettingsPage.chooseTypeyou
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('tamer')
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyUrlField.type('https://youtu.be/sfCy1JhCwWg?si=x_4OqPVz2UFdt2qv')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // accountSettingsPage.chooseTypespot
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('mohamed')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(2000)
  //     // accountSettingsPage.chooseTypetik
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('sama')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(2000)
  //     // accountSettingsPage.chooseTypetwit
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('maram')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(1000)
  //     // accountSettingsPage.chooseTypeInsta
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('sandra')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(1000)
  //     // accountSettingsPage.chooseTypeInsta
  //     // cy.wait(2000)
  //     // accountSettingsPage.displyTextField.type('mazen')
  //     // cy.wait(2000)
  //     // accountSettingsPage.saveTheLink
  //     // cy.wait(1000)
  //     //accountSettingsPage.socialCloseButton 
  //     // cy.wait(2000)
  //     accountSettingsPage.view
  //     accountSettingsPage.user
  //     cy.wait(2000)
  //     cy.get('[style="display: flex; flex-wrap: wrap; gap: 0.5em;"] > :nth-child(1)').should('contain.text', '@maram');
  //  })

  //   it('uploadAvatarImage',()=>{
  //     const accountSettingsPage = new AccountSettingsPage(); 
  //      accountSettingsPage.setButton
  //     accountSettingsPage.settButton
  //     accountSettingsPage.profile
  //     cy.wait(2000)
  //      accountSettingsPage.uploadAvatarImageButton
  //      cy.wait(2000)
  // })

    // it('uploadBannerImage',()=>{
    //   const accountSettingsPage = new AccountSettingsPage(); 
    //   accountSettingsPage.setButton
    //   accountSettingsPage.settButton
    //  accountSettingsPage.profile
    //   cy.wait(2000)
    //    accountSettingsPage.uploadBannerImageButton
    //    cy.wait(2000)
    // })  

  // it('nsfwSwitch',()=>{
  //  const accountSettingsPage = new AccountSettingsPage(); 
  //      accountSettingsPage.setButton
  //     accountSettingsPage.settButton
  //    accountSettingsPage.profile
  //     cy.wait(2000)
  //     accountSettingsPage.nsfwSwitch
  //     cy.wait(3000)
  //     accountSettingsPage.nsfwSwitch
  //     cy.wait(2000)
  //     cy.reload();
  //     accountSettingsPage.nsfwSwitch.should('not.be.checked');
  // }) 
  // it('allo wPeopleToFollowYou',()=>{
  //   const accountSettingsPage = new AccountSettingsPage(); 
  //      accountSettingsPage.setButton
  //    accountSettingsPage.settButton
  //    accountSettingsPage.profile
  //    cy.wait(3000)
  //     accountSettingsPage.allowPeopleToFollowYouSwitch
  // cy.wait(2000)
  //     accountSettingsPage.allowPeopleToFollowYouSwitch
  // cy.wait(2000)
  //     cy.reload();
  //     accountSettingsPage.allowPeopleToFollowYouSwitch.should('not.be.checked');
  // })


  //  it('contentVisibility',()=>{
  //  const accountSettingsPage = new AccountSettingsPage(); 
  // accountSettingsPage.setButton
  //    accountSettingsPage.settButton
  //    accountSettingsPage.profile
  // cy.wait(2000)
  // accountSettingsPage.contentVisibilitySwitch
  // cy.wait(2000)
  // accountSettingsPage.contentVisibilitySwitch
  // cy.wait(3000)
  // cy.reload();
  //     accountSettingsPage.contentVisibilitySwitch.should('not.be.checked');
  //  })

  // it('activeInCommunitiesVisibility',()=>{
  //   const accountSettingsPage = new AccountSettingsPage(); 
  //   accountSettingsPage.setButton
  //   accountSettingsPage.settButton
  //   accountSettingsPage.profile
  //   cy.wait(2000)
  //   accountSettingsPage.activeInCommunitiesVisibilitySwitch
  //   cy.wait(2000)
  //   accountSettingsPage.activeInCommunitiesVisibilitySwitch
  //   cy.wait(2000)
  //   cy.reload();
  //     accountSettingsPage.activeInCommunitiesVisibilitySwitch.should('not.be.checked');
  // })

  // it('clearHistory',()=>{
  //  const accountSettingsPage = new AccountSettingsPage(); 
  //   accountSettingsPage.setButton
  //   accountSettingsPage.settButton
  //   accountSettingsPage.profile
  //   cy.wait(2000)
  // accountSettingsPage.clearHistoryButton
  // cy.url().should('eq', 'http://localhost:5173/');
  // })
})