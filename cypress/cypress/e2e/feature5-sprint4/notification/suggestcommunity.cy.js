
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
          
        login1('samra', 'maram1212');
    })

    it('suggest community', () => {
      const notification = new Notification();
         cy.wait(7000)
         notification.notificationButton
         cy.wait(2000)
 // Wait for the element to exist and check its content
cy.get(':nth-child(2) > .notifications-item-link > .notifications-item-content > .notifications-item-details > .notifications-item-message > .notifications-item-message-text', { timeout: 10000 }) // Increase timeout as needed
.should('be.exist')


//         cy.wait(2000)
//         notification.viewvotedpost
//         cy.wait(2000)
        
    
    })
  
   
 })