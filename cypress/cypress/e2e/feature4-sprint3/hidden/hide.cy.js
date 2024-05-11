import { login1 } from '../../../utils/login'
import {Hide}from '../../../support/page_objects/hide/hide'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('hide test site', () => {
    
    beforeEach(() => {
        // Login before each test
        //lazem n7ot al path al gedid lma al post y7amel
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('hide user post',()=>{
        const hide= new Hide();
        cy.wait(5000)
        hide.searchforuser.type('zain')
        cy.wait(2000)
        cy.get('.search-user').click()
        cy.wait(2000)
        hide.openMenu
        cy.wait(2000)
        hide.hideButton
        cy.wait(2000)
       hide.userButton
       cy.wait(2000)
       hide.profileButton
       cy.wait(7000)
       hide.hidetab
       cy.wait(2000)
       cy.get('.justify-content-between > .d-flex').should('be.exist')
       cy.wait(2000)
       hide.unhideButton
       cy.wait(2000)
       cy.get('.justify-content-between > .d-flex').should('not.exist')
    })


})    