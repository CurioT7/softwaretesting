import { login1 } from '../../../utils/login'
import {Comment} from '../../../support/page_objects/delete/deletecomment'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('delete post', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

     it('delete comment', () => {
        const comment= new Comment();
        cy.wait(3000)
        comment.searchforuser.type('zain')
        cy.wait(2000)
        cy.get('.search-user').click()
        cy.wait(2000)
        cy.get(':nth-child(36) > .chakra-card > .chakra-card__body > .chakra-heading').click()
        cy.wait(2000)
        comment.openmenu
        cy.wait(2000)
        cy.get(':nth-child(3) > div > .mt-3').should('not.exist');
        cy.wait(2000)
        comment.open2menu
        cy.wait(2000)
        //comment.deleteButton
        cy.wait(2000)
        //cy.get(':nth-child(10) > :nth-child(2) > .post-details-content').should('not.exist');
      })

   
})