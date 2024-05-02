
import { login1 } from '../../../utils/login'
import {Unfollow} from '../../../support/page_objects/unfollowfrompost/unfollow'



describe('unfollow user from post', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('unfollow user from post', () => {
        const unfollow = new Unfollow();
        cy.wait(7000)
        unfollow.UsertabButton
        cy.wait(2000)
        unfollow.followButton
      
       
        
     })

   
})