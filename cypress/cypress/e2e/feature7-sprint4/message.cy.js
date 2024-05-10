
import { login1 } from '../../utils/login'
import {Message} from '../../support/page_objects/message/message'



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('message', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
    })

    // it('sent private Message', () => {
    //     const message = new Message();
    //     cy.wait(7000)
    //     message.notificationButton
    //     cy.wait(2000)
    //     message.messageButton
    //     cy.wait(2000)
    //     message.sendprivatemessage
    //     cy.wait(2000)
    //     message.sentto.type('vanela')
    //     cy.wait(2000)
    //     message.subject.type('here is the data12')
    //     cy.wait(2000)
    //     message.message.type('software data22')
    //     cy.wait(2000)
    //     message.sendButton
    //        cy.wait(2000)
    //        message.sent
    //        cy.wait(3000)
    //        cy.get(':nth-child(1) > .sent_message_table > .sent_message_table_content > .subject_sent_messages').should('be.exist')
        
    //  })

    //  it('usermention', () => {
    //     const message = new Message();
    //     cy.wait(7000)
    //     message.notificationButton
    //     cy.wait(2000)
    //     message.messageButton
    //     cy.wait(2000)
    //     message.usermention
    //     cy.wait(2000)
    //     cy.get('.username-mentions-header-messages').should('contain','username mention:new post')
    //     cy.wait(2000)  
    //   })

    // it('postreplies', () => {
    //          const message = new Message();
    //         cy.wait(7000)
    //         message.notificationButton
    //         cy.wait(2000)
    //        message.messageButton
    //         cy.wait(2000)
    //         message.postreplies
    //         cy.wait(2000)
    //         cy.get(':nth-child(2) > .username-mentions-message-table > .username-mentions-table > [style="display: flex; flex-direction: row; gap: 0.5rem;"] > .username-mention-details > .dwc > a').should('be.exist')
    //         cy.wait(2000)
            
    //       })

    // it('all', () => {
    //     const message = new Message();
    //    cy.wait(7000)
    //    message.notificationButton
    //    cy.wait(2000)
    //   message.messageButton
    //    cy.wait(2000)
    //    message.all
    //    cy.wait(2000)
    //    cy.get(':nth-child(5) > .username-mentions-table > [style="display: flex; flex-direction: row; gap: 0.5rem;"] > .username-mention-details > .dwc > a').should('be.exist')
    //    cy.wait(2000)    
    //    cy.get(':nth-child(4) > .username-mentions-table > [style="display: flex; flex-direction: row; gap: 0.5rem;"] > .username-mention-details > .dwc > a').should('be.exist')
    //  })
    
    // it('message', () => {
    //     const message = new Message();
    //    cy.wait(7000)
    //    message.notificationButton
    //    cy.wait(2000)
    //   message.messageButton
    //    cy.wait(2000)
    //    message.messagetab
    //    cy.wait(2000)
    //    cy.get(':nth-child(1) > .message-from > :nth-child(2) > p').should('be.exist')
    //    })

    // it('unread', () => {
    //     const message = new Message();
    //    cy.wait(7000)
    //    message.notificationButton
    //    cy.wait(2000)
    //   message.messageButton
    //    cy.wait(2000)
    //    message.messagetab
    //    cy.wait(2000)
    //   // cy.get(':nth-child(4) > .message-from > .d-flex > :nth-child(2)').click()
    //   message.unread
    //   cy.wait(2000)
    //   //    //    cy.get(':nth-child(2) > p').should('be.exist')
    //    })
    
   
})