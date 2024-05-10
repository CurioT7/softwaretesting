import { login1 } from '../../../utils/login'
import {Report}from '../../../support/page_objects/reportpost/reportpost'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('report', () => {
    
    beforeEach(() => {
        // Login before each test
        //lazem n7ot al path al gedid lma al post y7amel
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('report user post',()=>{
        const report= new Report();
        cy.wait(5000)
        report.searchforuser.type('zain')
        cy.wait(2000)
        cy.get('.search-user').click()
        cy.wait(2000)
        report.openMenu
        cy.wait(2000)
        report.reportButton
        cy.wait(2000)
        report.resoanButton
        cy.wait(2000)
        report.submitButton
        cy.wait(2000)
        report.doneButton
    })


})    