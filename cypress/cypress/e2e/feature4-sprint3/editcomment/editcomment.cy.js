import { login1 } from '../../../utils/login'
import {Edit} from '../../../support/page_objects/editcomment/editcomment'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('edit comment', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    it('edit comment', () => {
        const edit= new Edit();
        cy.wait(5000)
        cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').click()
        cy.wait(2000)
        edit.openmenu
        cy.get(':nth-child(4) > div > .mt-3').should('be.exist')
        
     })

   
})