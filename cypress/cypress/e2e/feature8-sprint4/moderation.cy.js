
import { login1 } from '../../utils/login'
import {Moderation} from '../../support/page_objects/moderation/moderation'



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('vote', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('hiam', 'maram1212');
    })

    // it('moderation schedule ', () => {
    //     const moderation = new Moderation();
    //     cy.wait(7000)
    //     cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"] > .ps-menu-label').click()
    //     cy.wait(2000)
    //     cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(2) > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click()
    //     cy.wait(2000)
    //     cy.get('a > .chakra-button').click()
    //     cy.wait(2000)
    //     moderation.scheduletabButton
    //     cy.wait(2000)
    //     moderation.scheduleButton
    //     cy.wait(2000)
    //     cy.get('.col-lg-8 > :nth-child(3) > :nth-child(3)').should('be.exist')
    //   })

      // it('moderation unmoderate', () => {
      //   const moderation = new Moderation();
      //   cy.wait(7000)
      //   cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"] > .ps-menu-label').click()
      //   cy.wait(2000)
      //   cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(2) > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click()
      //   cy.wait(2000)
      //   cy.get('a > .chakra-button').click()
      //   cy.wait(2000)
      //   moderation.unmoderatedbutton
      //   cy.wait(2000)
      //   cy.get(':nth-child(7) > .mt-2').should('be.exist')
      //   cy.wait(2000)
      //   cy.get(':nth-child(3) > .row > .col-11 > :nth-child(6) > .mt-2').should('be.exist')
      // })

      // it('moderation approve,remove ', () => {
      //   const moderation = new Moderation();
      //   cy.wait(7000)
      //   cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"] > .ps-menu-label').click()
      //   cy.wait(2000)
      //   cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(2) > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click()
      //   cy.wait(2000)
      //   cy.get('a > .chakra-button').click()
      //   cy.wait(2000)
      //   moderation.unmoderatedbutton
      //   cy.wait(2000)
      //   //moderation.approve
      //   //cy.wait(2000)
      //   //moderation.remove
      //   //cy.wait(2000)
      // })

      it('moderation ban w uban ', () => {
        const moderation = new Moderation();
        cy.wait(7000)
        cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"] > .ps-menu-label').click()
        cy.wait(2000)
        cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(2) > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click()
        cy.wait(2000)
        cy.get('a > .chakra-button').click()
        cy.wait(2000)
        moderation.usermanagement
        cy.wait(2000)
        moderation.banuser
        cy.wait(2000)
        moderation.namefield.type('u/vanela')
        cy.wait(2000)
        moderation.reasonfield.type('noisy')
        cy.wait(2000)
        moderation.banButton
      })

   
    
   
})