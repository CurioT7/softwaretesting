
import { login1 } from '../../../utils/login'
import {BlockPage} from '../../../support/page_objects/block/block'



describe('blockuser', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

   // it('block user from profile', () => {
        const block = new BlockPage();
        cy.wait(4000)
        // block.viewuser
        //cy.wait(4000)
        // block.downmenu
       // cy.wait(4000)
        // block.blocknewUser
        //cy.wait(4000)
        //block.profilemenu
        // cy.wait(4000)
        // block.setting
        // cy.wait(4000)
        // block.safety
        //cy.get('.settings-link > .chakra-text')..should('contain.text', 'Julio11');
        
   // })

   
})