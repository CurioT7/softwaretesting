import { login1 } from '../../../../utils/login'
import {Lock}from '../../../../support/page_objects/lock-unlock/lock'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Lock post', () => {
    
    beforeEach(() => {
        
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('lock post',()=>{
        
        const lock= new Lock();
        //cy.wait(5000)
        // cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"] > .ps-menu-label').click()
        // cy.wait(2000)
        // lock.viewcommunities
        // cy.wait(4000)
        // cy.get('#popover-trigger-\\:rvp\\:').should('exist');
        // cy.wait(2000)
        //lock.lockmenu
       // cy.wait(5000)
       // lock.lockButton
        cy.wait(2000)
        login1('zain', 'maram1212');
        lock.searchforuser.type('samra')
        cy.wait(2000)
        cy.get('.search-footer > span').click()
        cy.wait(2000)
        lock.peopletab
        cy.wait(2000)
        cy.get('.user-results').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click()
        cy.wait(2000)
        lock.addcomment.type('help')
        cy.wait(2000)
        lock.commentButton
        cy.wait(2000)
        cy.get(':nth-child(9) > :nth-child(2) > .post-details-content').should('not.exist')
        // //lock.lockButton
        // //cy.wait(2000)
        
    })


})    