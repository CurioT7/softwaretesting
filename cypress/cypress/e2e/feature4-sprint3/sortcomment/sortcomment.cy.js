
import { login1 } from '../../../utils/login'
import {Sort} from '../../../support/page_objects/sortcomment/sortcomment'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('sort comment', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    it('sort comment', () => {
        const sort = new Sort();
        cy.wait(7000)
        cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(2) > .post-details-content').should('contain','fg')
        cy.wait(2000)
        sort.sortmenuButton
        cy.wait(2000)
        sort.sortbynew
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(2) > .post-details-content').should('contain','why')
        cy.wait(2000)
        sort.sortmenuButton
        cy.wait(2000)
        sort.sortbytop
        cy.get(':nth-child(4) > :nth-child(2) > .post-details-content').should('contain','fg')
        cy.wait(2000)
        
        
     })

   
})