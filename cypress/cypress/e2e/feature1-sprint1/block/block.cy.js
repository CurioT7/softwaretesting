
import { login1 } from '../../../utils/login'
import {BlockPage} from '../../../support/page_objects/block/block'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('blockuser', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    // it('block user from profile', () => {
    //     const block = new BlockPage();
    //     cy.wait(4000)
    //     block.searchforuser.type('vanela')
    //     cy.wait(2000)
    //     cy.get(':nth-child(2) > .search-body > .chakra-card__body > .searchBy-details > .search-user').click()
    //     cy.wait(2000)
    //     // block.downmenu
    //     // cy.wait(4000)
    //     // block.blocknewUser
    //     // cy.wait(4000)
    //     block.profilemenu
    //     cy.wait(4000)
    //     block.setting
    //     cy.wait(4000)
    //     block.safety
    //     cy.get(':nth-child(5) > .settings-link > .chakra-text').should('contain.text', 'vanela');
        
    // })

   
})