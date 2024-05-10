import { login1 } from '../../../utils/login'
import {Add} from '../../../support/page_objects/addcomment/addcomment'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('add comment', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    // it('add comment on post inside community', () => {
    //     const add = new Add();
    //     cy.wait(3000)
    //     add.searchforuser.type('zain')
    //     cy.wait(2000)
    //     cy.get('.search-user').click()
    //     cy.wait(2000)
    //     cy.get(':nth-child(27) > .chakra-card > .chakra-card__body > .chakra-heading').click()
    //     cy.wait(2000)
    //     // add.comment.type('what')
    //     // cy.wait(2000)
    //     // add.add
    //     // cy.wait(2000)
    //     cy.get(':nth-child(5) > :nth-child(2) > .post-details-content').should('contain.text', 'what')
        
    //  })

    // it('add comment on post ', () => {
    //     const add = new Add();
    //     cy.wait(3000)
    //     add.searchforuser.type('zain')
    //     cy.wait(2000)
    //     cy.get('.search-user').click()
    //     cy.wait(2000)
    //     cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').click()
    //     cy.wait(2000)
    //     add.comment.type('what')
    //     cy.wait(2000)
    //     add.add
    //     cy.wait(2000)
    //     cy.get(':nth-child(5) > :nth-child(1) > .post-details-content').should('contain.text', 'what')
        
    //  })

   
})