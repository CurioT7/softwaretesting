import { login1 } from '../../../utils/login'
import {Edit} from '../../../support/page_objects/editcomment/editcomment'



describe('edit comment', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('edit comment', () => {
        const edit= new Edit();
        cy.wait(7000)
        edit.viewButton
        cy.wait(2000)
        edit.openmenu
        // add.comment.should('be.visible').type('what')
        // cy.wait(2000)
        // add.add
        // cy.wait(2000)
        // cy.get(':nth-child(22) > :nth-child(2) > .post-details-content').should('contain.text', 'what')
        
     })

   
})