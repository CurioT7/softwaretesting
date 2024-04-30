import { login1 } from '../../../utils/login'
import {Hide}from '../../../support/page_objects/hide/hide'
describe('Follow test site', () => {
    
    beforeEach(() => {
        // Login before each test
        //lazem n7ot al path al gedid lma al post y7amel
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('hide user post',()=>{
        const hide= new Hide();
       hide.openMenu
       cy.wait(2000)
       hide.hideButton
       cy.wait(2000)
       hide.userButton
       cy.wait(2000)
       hide.profileButton
       cy.wait(2000)
       hide.hidetab
       cy.wait(2000)
       hide.unhideButton
        
    })


})    