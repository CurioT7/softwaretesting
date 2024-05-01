import { login1 } from '../../../utils/login'
import {Report}from '../../../support/page_objects/reportpost/reportpost'
describe('report', () => {
    
    beforeEach(() => {
        // Login before each test
        //lazem n7ot al path al gedid lma al post y7amel
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('report user post',()=>{
        const report= new Report();
        cy.wait(5000)
        report.openMenu
        cy.wait(2000)
        report.reportButton
        report.resoanButton
        report.submitButton
        report.submitButton
        report.doneButton
        cy.url().should('eq', 'http://localhost:5173/');
    })


})    