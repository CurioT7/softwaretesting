
import { login1 } from '../../../utils/login'
import {Sort} from '../../../support/page_objects/sortcomment/sortcomment'



describe('sort comment', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
    })

    it('sort comment', () => {
        const sort = new Sort();
        cy.wait(7000)
        sort.viewpostButton
        cy.wait(2000)
        sort.sortmenuButton
        cy.wait(2000)
        sort.sortbytop
        cy.wait(2000)
        cy.get(':nth-child(4) > .mb-3 > .d-flex > .username-comments-section').should('contain', 'Khalid_Hansen72')
        cy.wait(2000)
        sort.sortbybest
        cy.wait(2000)
        cy.get(':nth-child(4) > .mb-3 > .d-flex > .username-comments-section').should('contain', 'Wondrous_Island_1285')
        cy.wait(2000)
        sort.sortbynew
        cy.wait(2000)
        cy.get(':nth-child(4) > .mb-3 > .d-flex > .username-comments-section').should('contain', 'samamostafa')
       
       
        
     })

   
})