
import {FollowPage} from '../../../support/page_objects/follow/follow'
import { login1 } from '../../../utils/login'
describe('Follow test site', () => {
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

  

    it('follow and unfollow a user', () => {
        const followpage = new FollowPage();
        cy.wait(2000)
        followpage.searchforuser.type('maramtarek2')
        cy.wait(2000)
        cy.get(':nth-child(2) > .search-body > .chakra-card__body > .searchBy-details > .search-user').click()
        cy.wait(2000)
        // followpage.followButton
        // cy.wait(2000)
        login1('maramtarek2', 'sama1212');
        followpage.viewprofile
        cy.wait(2000)
        followpage.profile
        cy.wait(9000)
        cy.wait(9000)
        cy.wait(9000)
        cy.get('[style="display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 0.5fr); gap: 0.3rem 1rem;"] > a').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .ms-3').should('be.exist')
  
    })
    
})