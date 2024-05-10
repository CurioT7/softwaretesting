import { login1 } from '../../../utils/login'
import {Show}from '../../../support/page_objects/showinfo/showinfo'
describe('report', () => {
    
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('cy.get(':nth-child(1) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3')')
    });

    it('report user from profile',()=>{
        const show= new Show();
        show.searchforuser.type('vanela')
        cy.wait(2000)
        cy.get(':nth-child(2) > .search-body > .chakra-card__body > .searchBy-details > .search-user').click()
        cy.wait(2000)
        show.overview
        cy.wait(2000)
        cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain','sama')
        cy.wait(2000)
        show.post
        cy.wait(5000)
        cy.get('.pt-2').should('be.exist')
        cy.wait(5000)
        show.comment
        // cy.get(':nth-child(1) > :nth-child(2) > .post-details-content').should('contain','samya');

        
    })


})    