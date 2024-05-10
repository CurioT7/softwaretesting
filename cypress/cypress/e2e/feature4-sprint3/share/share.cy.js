
import { login1 } from '../../../utils/login'
import {Share} from '../../../support/page_objects/share/share'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('share', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samra', 'maram1212');
    })

    // it('share link', () => {
    //     const share = new Share();
    //     cy.wait(7000)
    //     share.shareButton
    //     cy.wait(2000)
    //     share.copylinkButton
    //     cy.wait(2000)
    //     cy.visit('http://localhost:5173/post/post-details/663e25c7b50613329bcc7a24')
    //     cy.wait(2000)
    //     cy.get('.post-content-header').should('contain.text', 'sdfghj');
        
    //  })

   
})