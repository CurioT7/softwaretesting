
import { login1 } from '../../../utils/login'
import {Vote} from '../../../support/page_objects/vote/vote'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('vote', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    // it('vote', () => {
    //     const vote = new Vote();
    //     cy.wait(7000)
    //     vote.searchforuser.type('zain')
    //     cy.wait(2000)
    //     cy.get('.search-user').click()
    //     cy.wait(2000)
    //     vote.voteButton
    //     cy.wait(4000)
    //     cy.get(':nth-child(6) > .chakra-card > .chakra-card__footer > .css-8owaep > .d-flex > [data-testid="upvotes"] > svg').should('be.exist')
        
       
        
    //  })

    //  it('downvote', () => {
    //     const vote = new Vote();
    //     cy.wait(7000)
    //     vote.searchforuser.type('zain')
    //     cy.wait(2000)
    //     cy.get('.search-user').click()
    //     cy.wait(2000)
    //     vote.downvoteButton
    //     cy.wait(4000)
    //     cy.get(':nth-child(6) > .chakra-card > .chakra-card__footer > .css-8owaep > .d-flex > [data-testid="downvotes"] > svg > path').should('be.exist')
        
      
       
        
    //  })

   
})