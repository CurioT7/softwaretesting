// import {data} from '../../fixtures/data.json'
// import { login } from '../../utils/login'
import {FollowPage} from '../../../support/page_objects/follow/follow'
import { login1 } from '../../../utils/login'
describe('Follow test site', () => {
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('follow and unfollow a user', () => {
        const followpage = new FollowPage();
        followpage.user 
        followpage.followUnfollowButton
        cy.wait(2000)
        followpage.movetoprofuleButton
        followpage.home
        //followpage.followerappear().should('exist');
    })

   
    
})