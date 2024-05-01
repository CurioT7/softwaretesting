import { login1 } from '../../../utils/login'
import {Save}from '../../../support/page_objects/save-unsave/save'
describe('save', () => {
    
    beforeEach(() => {
        // Login before each test
        //lazem n7ot al path al gedid lma al post y7amel
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('save user post',()=>{
        const save= new Save();
        cy.wait(9000)
        save.openMenu
        save.saveButton
        cy.wait(2000)
        save.userButton
        cy.wait(2000)
        save.profileButton
        cy.wait(2000)
       // save.savetab
        // cy.wait(2000)
        // cy.get('.flex-column > :nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain.text', 'Unraveling Cinematic Masterpieces');
   
        
    })


})    