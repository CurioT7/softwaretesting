import {Createcommunity} from '../../support/page_objects/comm/createcommunity'
// import accountsetting from '../../support/page-objects/accountsetting'
// import { login } from '../../utils/login'
// const data = require('../../fixtures/data.json')
// import{data} from '../../fixtures/data.json'


describe('Communities', () => {

   
    // beforeEach('login and open home page', () => {
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     login(data.user.username, data.user.password)
    //     cy.wait(3000)
    // })
    
    it('Join Community', () => {
        const createcommunity = new Createcommunity();
        cy.visit('http://localhost:5173/')
        createcommunity.resourceButton
        cy.wait(1000)
        createcommunity.comButton
    //    createcommunity.createCommunityButton.should('be.visible').click()
    //     cy.wait(1000)
    //    createcommunity.nameField.should('be.visible').should('be.empty').type(data.createcommunity.invalname)
    //    cy.get("li[role='status']").should('contain.text', "Please lengthen this text to 3 characters or more")
    //    cy.wait(1000)
    //    createcommunity.nameField.should('be.visible').should('be.empty').type(data.createcommunity.valname)
    //    createcommunity.typeOptiions.should('be.visible').select('option')
    //    createcommunity. matureSwitch.should('be.visible').click({force:true})
    //    cy.wait(1000)
    //    createcommunity.createCommunityButtonSave.should('be.visible')
    })
   
  
})