
import { login1 } from '../../../utils/login'
import {Share} from '../../../support/page_objects/share/share'



describe('share', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('share link', () => {
        const share = new Share();
        cy.wait(7000)
        share.shareButton
        cy.wait(2000)
        share.copylinkButton
        cy.wait(2000)
        cy.visit('http://localhost:5173/post/post-details/6615aaaa579c935be54789ef')
        cy.wait(2000)
        cy.get('.post-content-header').should('contain.text', 'Unraveling Cinematic Masterpieces');
        
     })

   
})