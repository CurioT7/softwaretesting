import { login1 } from '../../../utils/login'
import {Post} from '../../../support/page_objects/delete/deletepost'



describe('delete post', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('delete post', () => {
        const post= new Post();
        cy.wait(7000)
        post.viewButton
        cy.wait(2000)
        post.profile
        cy.wait(6000)
        //post.openButton
        //post.openmenu
        cy.wait(2000)
        //post.delete
        cy.wait(2000)
        // add.comment.should('be.visible').type('what')
        // cy.wait(2000)
        // add.add
        // cy.wait(2000)
        // cy.get(':nth-child(22) > :nth-child(2) > .post-details-content').should('contain.text', 'what')
        
     })

   
})