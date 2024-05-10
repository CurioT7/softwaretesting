
import { login1 } from '../../../utils/login'
import {Unfollow} from '../../../support/page_objects/unfollowfrompost/unfollow'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('unfollow user from post', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    it('unfollow user from post', () => {
        const unfollow = new Unfollow();
        cy.wait(7000)
        unfollow.UsertabButton
        cy.wait(2000)
        cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .community-post-name').should('be.exist')
           
        
     })

   
})