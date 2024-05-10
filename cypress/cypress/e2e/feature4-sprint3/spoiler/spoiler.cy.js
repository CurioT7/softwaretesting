
import { login1 } from '../../../utils/login'
import {Spoiler} from '../../../support/page_objects/spoiler/spoiler'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('spoiler', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    it('spoiler', () => {
        const spoiler= new Spoiler();
        cy.wait(7000)
        cy.get(':nth-child(6) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(3) > .post-dropdown-control').click()
       cy.wait(2000)
       cy.get(':nth-child(5) > div > .mt-3').click()
       cy.wait(2000)
       cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-text > p').should('be.blur')
        
      })

   

   
})