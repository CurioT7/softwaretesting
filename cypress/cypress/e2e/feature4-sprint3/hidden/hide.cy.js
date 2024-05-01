import { login1 } from '../../../utils/login'
import {Hide}from '../../../support/page_objects/hide/hide'
describe('hide test site', () => {
    
    beforeEach(() => {
        // Login before each test
        //lazem n7ot al path al gedid lma al post y7amel
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('hide user post',()=>{
        const hide= new Hide();
        cy.wait(5000)
       hide.openMenu
       
       hide.hideButton
       cy.wait(2000)
       hide.userButton
       cy.wait(2000)
       hide.profileButton
       cy.wait(7000)
       //hide.hidetab
       //cy.wait(2000)
    //    hide.unhideButton
        
    })


})    