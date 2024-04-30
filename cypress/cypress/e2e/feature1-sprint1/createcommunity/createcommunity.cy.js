
import {Createcommunity} from '../../../support/page_objects/comm/createcommunity'
import {  login1 } from '../../../utils/login'
// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })

describe('Communities', () => {

    
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1500, 1400)
          
        login1('maramtarek2', 'sama1212');
        // cy.visit('http://localhost:5173')
    });


    // it('create Community', () => {
    //     const createcommunity = new Createcommunity();
    //     // // cy.visit('http://localhost:5173/')
    //     cy.wait(5000)

    //     createcommunity.createCommunityButton
    //     cy.wait(2000)
    //     createcommunity.addcommunity
    //     createcommunity.nameField.type("community44public")
    //     createcommunity.createCommunityButtonSave
    //     createcommunity.cancelButton
    //     //Createcommunity
    // })


 it('view Community', () => {
     const createcommunity = new Createcommunity();
    //     // // cy.visit('http://localhost:5173/')
     cy.wait(5000)

     createcommunity.createCommunityButton
    cy.wait(2000)
    createcommunity.view
    cy.url().should('eq', 'http://localhost:5173/r/community2public');
    
     })




    // it('create private Community', () => {
    //     const createcommunity = new Createcommunity();
    //     cy.wait(5000)

    //     createcommunity.createCommunityButton
    //     createcommunity.addcommunity
    //     createcommunity.nameField.type("community23priv")
    //     createcommunity.privateButton
    //     createcommunity.matureSwitch
    //     createcommunity.createCommunityButtonSave
    // })

    //  it('view private Community', () => {
    //  const createcommunity = new Createcommunity();
    // //     // // cy.visit('http://localhost:5173/')
    //  cy.wait(5000)

    //  createcommunity.createCommunityButton
    // cy.wait(2000)
    // createcommunity.view2
    // cy.url().should('eq', 'http://localhost:5173/r/community23priv');
    
    //  })

    // it('create private Community', () => {
    //     const createcommunity = new Createcommunity();
    //     cy.wait(3000)

    //     createcommunity.createCommunityButton
    //     createcommunity.addcommunity
    //     createcommunity.nameField.type("community1rest")
    //     createcommunity.restrictedButton.click()
    //     createcommunity.createCommunityButtonSave
    // })
})