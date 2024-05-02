import { login1 } from '../../../../utils/login'
import {Lock}from '../../../../support/page_objects/lock-unlock/lock'
describe('Lock post', () => {
    
    beforeEach(() => {
        
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('lock post',()=>{
        
        const lock= new Lock();
        cy.wait(5000)
        lock.viewcommunities
        cy.wait(4000)
        lock.opencommunityButton
        cy.wait(4000)
        lock.lockmenu
        cy.wait(5000)
        lock.lockButton
        cy.wait(2000)
        lock.commentButton
        //lock.lockButton
        //cy.wait(2000)
        
    })


})    