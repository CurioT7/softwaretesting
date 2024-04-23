import { login1 } from '../../../utils/login'
import {Save}from '../../../support/page_objects/save-unsave/save'
describe('save', () => {
    
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('save user post',()=>{
        const save= new Save();
        cy.wait(9000)
        save.openMenu
        cy.wait(2000)
        save.userButton
        cy.wait(2000)
        save.profileButton
        cy.wait(2000)
        save.savetab
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain.text', 'Exploring Melodic Landscapes');
   
        
    })


})    