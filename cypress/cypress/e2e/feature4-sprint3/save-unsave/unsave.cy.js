import { login1 } from '../../../utils/login'
import {UnSave}from '../../../support/page_objects/save-unsave/unsave'
describe('unsave', () => {
    //lazem n7ot al path al gedid lma al post y7amel
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('unsave user post',()=>{
        const unsave= new UnSave();
        cy.wait(9000)
        unsave.openMenu
        cy.wait(2000)
        unsave.saveButton
        cy.wait(2000)
        unsave.userButton
        cy.wait(2000)
        unsave.profileButton
        cy.wait(2000)
        unsave.savetab
        cy.wait(2000)
        //cy.get(':nth-child(1) > :nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('not.contain.text', 'Exploring Melodic Landscapes');

        
    })


})    