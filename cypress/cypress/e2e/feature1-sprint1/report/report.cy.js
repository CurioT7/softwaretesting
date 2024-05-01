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
       report.viewUser
       report.reportUserButton
       report.checkReason
       report.nextButton
    //    report.moreOptiions
  
       report.doneButton
       report.close
    //    cy.url().should('eq', 'http://localhost:5173/user/Radiant_Adventure_1776');
        
        
    })


})    