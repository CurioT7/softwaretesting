
import { login1 } from '../../../utils/login'
import {Vote} from '../../../support/page_objects/vote/vote'



describe('share', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('share link', () => {
        const vote = new Vote();
        cy.wait(7000)
        vote.voteButton
        cy.wait(2000)
        vote.downvoteButton
        //vote.voteButton
       
        
     })

   
})