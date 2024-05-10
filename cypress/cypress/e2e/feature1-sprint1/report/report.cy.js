import { login1 } from '../../../utils/login'
import {ReportProfile}from '../../../support/page_objects/report/reporting'
describe('report', () => {
    
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('report user from profile',()=>{
        const report= new ReportProfile();
        cy.wait(2000)
        report.searchforuser.type('zain')
        cy.wait(2000)
        cy.get('.search-user').click()
        cy.wait(2000)
        report.viewUser
        cy.wait(2000)
        report.reportUserButton
        cy.wait(2000)
        report.checkReason
        cy.wait(2000)
        report.nextButton
        cy.wait(2000)
        report.moreOptiions
        cy.wait(2000)
        report.doneButton
        report.close
   
        
        
    })


})    