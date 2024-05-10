// import { data } from 'cypress/types/jquery'
import {AccountSettingsPage} from '../../../support/page_objects/setting/accountsetting'
import { login1 } from '../../../utils/login'
// Set viewport to 375px x 667px

describe('account setting', () => {

    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });
    
    // it('changing email', () => {
    //    const accountSettingsPage = new AccountSettingsPage(); 
    //   accountSettingsPage.setButton
    //   accountSettingsPage.settButton
    //   accountSettingsPage.accountSet
    //   accountSettingsPage.changeEmailAddressButton
    //   accountSettingsPage.currentPasswordField.type("1234")
    //   accountSettingsPage.newEmailField.type( "maramtaek3777gmail.com")
    //   accountSettingsPage.saveEmailButton
    //   cy.wait(2000)
    //   accountSettingsPage.currentPasswordField.clear().should('be.visible').type("sama1212")
    //   accountSettingsPage.newEmailField.clear().should('be.visible').type( "Maram.mohamed01@eng-st.cu.edu.eg")
    //   accountSettingsPage.saveEmailButton
    //   accountSettingsPage.gotitButton
   
    // })

    // it('changing Password', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
        
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.accountSet
    //     cy.wait(2000)
    //     accountSettingsPage.changePasswordButton
    //     cy.wait(2000)
    //     accountSettingsPage.oldPasswordField.should('be.visible').type("1234567y")
    //     accountSettingsPage.newPasswordField.should('be.visible').type("1234")
    //     accountSettingsPage.confirmPasswordField.should('be.visible').type("1234")
    //     cy.wait(3000)
    //     accountSettingsPage.savePasswordButton
    //     cy.wait(2000)
    //     accountSettingsPage. oldPasswordField.should('be.visible').type("sama1212")
    //     accountSettingsPage.newPasswordField.should('be.visible').clear().type("123")
    //     accountSettingsPage.confirmPasswordField.should('be.visible').type("1234")
    //     accountSettingsPage.savePasswordButton
    //     cy.wait(3000)
    //     accountSettingsPage.newPasswordField.clear().should('be.visible').clear().type("sama1212")
    //     accountSettingsPage.confirmPasswordField.should('be.visible').clear().type("sama1212")
    //     accountSettingsPage.savePasswordButton
    //     cy.wait(3000)
    //     accountSettingsPage.xPasswordButton

    // })

//     it('select gender', () => {
//         const accountSettingsPage = new AccountSettingsPage(); 
//         accountSettingsPage.setButton
//         accountSettingsPage.settButton
//         accountSettingsPage.accountSet
//         accountSettingsPage. genderSelection.should('be.visible')
//    cy.get('.css-1s33dmy > :nth-child(2) > .chakra-select__wrapper > .chakra-select').should('contain.text', 'WOMAN');
//         cy.wait(2000)
      
//      })

    // it('select your location', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //      accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.accountSet
    //     accountSettingsPage. locationCustomization  
    //     cy.wait(2000)
    //     cy.get('.css-cyzh8z > .chakra-select__wrapper > .chakra-select').should('contain.text', 'Egypt');
    // })

    // it('shows google login button', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.accountSet
    //     accountSettingsPage.connectToGoogle
    //     accountSettingsPage. googlePass.should('be.visible').type("123")
    //     accountSettingsPage.googleContinueButton
    //     cy.wait(2000)
    //     accountSettingsPage. googlePass.should('be.visible').clear().type("sama1212")
    //     accountSettingsPage.googleContinueButton
    //     cy.wait(2000)
    //      accountSettingsPage.googleClose
    // })

    //  it('delete your account', () => {
    //     const accountSettingsPage = new AccountSettingsPage(); 
    //     accountSettingsPage.setButton
    //     accountSettingsPage.settButton
    //     accountSettingsPage.accountSet
    //     cy.wait(2000)
    //     accountSettingsPage.deleteAccountButton
    //     cy.wait(2000)
    //     accountSettingsPage.deleteReason.type("Reason")
    //     cy.wait(2000)
    //     accountSettingsPage.deleteUsername.type('maramtaek2')
    //     cy.wait(2000)
    //     accountSettingsPage.deletePass.type('123')
    // //     accountSettingsPage.deleteCheck
    // //     accountSettingsPage.deleteRemoveButton
    // //     cy.wait(2000)
    // //     accountSettingsPage.deleteCancelButton
    // //     cy.wait(1000)
    // //     accountSettingsPage.deleteUsername.clear().type('maramtarek2')
    // //     accountSettingsPage.deletePass.clear().type('maram1212')
    // //     accountSettingsPage.deleteRemoveButton
    // //     cy.wait(2000)
    // //     accountSettingsPage.deleteRemoveButton
    // })
})