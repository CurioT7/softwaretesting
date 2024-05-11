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

  
     it('Notification new follower hide', () => {
        const notification = new Notification();
        cy.wait(7000)
        notification.notificationButton
        cy.wait(2000)
        notification.seeallButton
        cy.wait(2000)
        cy.get(':nth-child(28) > [style="display: flex; gap: 0.5em;"] > .notification-details > .notifications-item-message > .notifications-item-message-text').should('be.exist')
        cy.wait(2000)
        notification.downmenuButton
        cy.wait(2000)
        // notification.hidenotification

        
     })

     it('Notification vote hide', () => {
        const notification = new Notification();
        cy.wait(7000)
        notification.notificationButton
        cy.wait(2000)
        notification.seeallButton
        cy.wait(2000)
        cy.get(':nth-child(29) > [style="display: flex; gap: 0.5em;"] > .notification-details > .notifications-item-message > .notifications-item-message-text').should('be.exist')
        cy.wait(2000)
        notification.down2menunotification
        cy.wait(2000)
        // notification.hide2notification

        
     })


    it('Notification comment hide', () => {
            const notification = new Notification();
            cy.wait(7000)
            notification.notificationButton
            cy.wait(2000)
            notification.seeallButton
            cy.wait(2000)
            cy.get(':nth-child(14) > [style="display: flex; gap: 0.5em;"] > .notification-details > .notifications-item-message').should('be.exist')
            cy.wait(2000)
            notification.commentdownmenu
            cy.wait(2000)
            //notification.hidecomment
    
            
         })

     it('Notification disable community for vote , comment ,newfollower', () => {
            const notification = new Notification();
        cy.wait(7000)
        notification.notificationButton
        cy.wait(2000)
        notification.seeallButton
        cy.wait(2000)
       
        notification.comment2menu
        cy.wait(2000)
        notification.disableupdate
       // Check that the element does not exist based on the specified selector
       //cy.get(':nth-child(1) > [style="display: flex; gap: 0.5em;"] > .notification-details > .notifications-item-message > .notifications-item-message-text')
       //.should('not.exist');
 
            
        })

})