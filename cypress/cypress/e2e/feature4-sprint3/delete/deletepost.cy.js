import { login1 } from '../../../utils/login'
import {Post} from '../../../support/page_objects/delete/deletepost'


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

    it('delete post', () => {
        const post= new Post();
        cy.wait(7000)
        post.viewButton
        cy.wait(2000)
        post.profile
        cy.wait(6000)
        post.openmenu
        cy.wait(2000)
        // //post.delete
        // cy.wait(2000)
        //cy.get('#tabs-\\:rv5\\:--tabpanel-0 > :nth-child(4) > :nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('not.exist');

     })

   
})