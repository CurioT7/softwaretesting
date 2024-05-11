import { login1 } from '../../../utils/login'
import {Notification} from '../../../support/page_objects/notification/notification'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Notification', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'maram1212');
    })

  
     it('Notification new follower', () => {
        const notification = new Notification();
        cy.wait(7000)
        notification.notificationButton
        cy.wait(2000)
       notification.message
       cy.wait(2000)
       cy.get('.message-title').should('contain', 'hello:')

        
     })
   
})