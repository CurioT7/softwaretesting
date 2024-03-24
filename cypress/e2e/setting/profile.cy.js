import { AccountSettingsPage } from "../../support/page_objects/setting/accountsetting";
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// import { Email, verifyEmail, goToStep } from '../../utils/signup/signup'
// const data = require('../../fixtures/signup-data.json')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('profile', () => {

   
    it('profile Display Name, about', () => {
      const accountSettingsPage = new AccountSettingsPage(); 
      cy.visit('http://localhost:5173/settings/account')
      accountSettingsPage.profile
      accountSettingsPage.displayNamefield.type('qwertyuioasdfghasdfghjnbvadsfgdr')
    accountSettingsPage.about.type('qwertyuioasdfghasdfghjnbvadsfgdrdfgtvctvryuikjyhgfdregrgggdfafferfggfjbjgnsadknjdfjdana666666666666altan fjgbnjakfkngggnnkkkkk            fdgfugihkjgfsdgvwfhegrjiohugyftdeh      wstyyhbvcyhnfjdjsvdusdfdnsvbagayjdbvshayyyyyy sho mahdoma klmatoooonnfnsjvssjgfvf yan')
    })


    //throwing exception to fail (max5 aqcuired 6)
    it(' addSocialLinks', () => {
      const accountSettingsPage = new AccountSettingsPage(); 
      cy.visit('http://localhost:5173/settings/account')
      accountSettingsPage.profile
      accountSettingsPage. addSocialLinksButton
      accountSettingsPage.chooseTypeInsta
      accountSettingsPage.displyTextField.type('sdfghg')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.chooseTypeface
      accountSettingsPage.displyTextField.type('sdfg')
      accountSettingsPage.displyUrlField.type('vfdfsg')
      cy.wait(2000)
      accountSettingsPage.displyUrlField.clear().type('https //www.facebook.com ')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.backButton
      cy.wait(1000)
      accountSettingsPage.chooseTypeyou
      accountSettingsPage.displyTextField.type('sdfg')
      accountSettingsPage.displyUrlField.type('vfdfsg')
      cy.wait(2000)
      accountSettingsPage.displyUrlField.clear().type('https://www.website.com/')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.backButton
      cy.wait(1000)
      accountSettingsPage.chooseTypespot
      accountSettingsPage.displyTextField.type('sdfghg')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.chooseTypetik
      accountSettingsPage.displyTextField.type('sama')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.chooseTypetwit
      accountSettingsPage.displyTextField.type('maram')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.chooseTypeInsta
      accountSettingsPage.displyTextField.type('sfefdg')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.chooseTypeInsta
      accountSettingsPage.displyTextField.type('wfgbb')
      accountSettingsPage.saveTheLink
      cy.wait(1000)
      accountSettingsPage.socialCloseButton 
    })

    it('uploadAvatarImage',()=>{
      const accountSettingsPage = new AccountSettingsPage(); 
      cy.visit('http://localhost:5173/settings/account')
      accountSettingsPage.profile
       accountSettingsPage.uploadAvatarImageButton
    })

    it('uploadBannerImage',()=>{
      const accountSettingsPage = new AccountSettingsPage(); 
      cy.visit('http://localhost:5173/settings/account')
      accountSettingsPage.profile
       accountSettingsPage.uploadBannerImageButton
    })
  it('nsfwSwitch',()=>{
   const accountSettingsPage = new AccountSettingsPage(); 
      cy.visit('http://localhost:5173/settings/account')
      accountSettingsPage.profile
      accountSettingsPage.nsfwSwitch
  cy.wait(2000)
      accountSettingsPage.nsfwSwitch
  })
  it('allowPeopleToFollowYou',()=>{
    const accountSettingsPage = new AccountSettingsPage(); 
      cy.visit('http://localhost:5173/settings/account')
      accountSettingsPage.profile
      accountSettingsPage.allowPeopleToFollowYouSwitch
  cy.wait(2000)
      accountSettingsPage.allowPeopleToFollowYouSwitch
  })
   it('contentVisibility',()=>{
   const accountSettingsPage = new AccountSettingsPage(); 
  cy.visit('http://localhost:5173/settings/account')
  accountSettingsPage.profile
  accountSettingsPage.contentVisibilitySwitch
  cy.wait(2000)
  accountSettingsPage.contentVisibilitySwitch
   })
  it('activeInCommunitiesVisibility',()=>{
    const accountSettingsPage = new AccountSettingsPage(); 
    cy.visit('http://localhost:5173/settings/account')
    accountSettingsPage.profile
    accountSettingsPage.activeInCommunitiesVisibilitySwitch
    cy.wait(2000)
    accountSettingsPage.activeInCommunitiesVisibilitySwitch
  })
  it('clearHistory',()=>{
    const accountSettingsPage = new AccountSettingsPage(); 
   cy.visit('http://localhost:5173/settings/account')
  accountSettingsPage.profile
  accountSettingsPage.clearHistoryButton
  })
})