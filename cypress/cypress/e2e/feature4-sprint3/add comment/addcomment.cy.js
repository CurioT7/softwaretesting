import { login1 } from '../../../utils/login'
import {Add} from '../../../support/page_objects/addcomment/addcomment'



describe('share', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('share link', () => {
        const add = new Add();
        cy.wait(7000)
        add.viewButton
        cy.wait(2000)
        add.comment.type('what')
        cy.wait(2000)
        add.add
        cy.wait(2000)
        cy.get(':nth-child(22) > :nth-child(2) > .post-details-content').should('contain.text', 'what')
        
     })

   
})