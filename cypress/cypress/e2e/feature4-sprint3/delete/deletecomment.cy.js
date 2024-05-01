import { login1 } from '../../../utils/login'
import {Comment} from '../../../support/page_objects/delete/deletecomment'



describe('delete post', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    // it('delete comment', () => {
    //     const comment= new Comment();
    //     cy.wait(7000)
    //     comment.viewButton
    //     cy.wait(2000)
    //     comment.openmenu
    //     cy.wait(2000)
    //     comment.deleteButton
       
        
    //  })

   
})