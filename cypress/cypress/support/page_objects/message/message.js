export class Message{
   
    
    get notificationButton() {
        return cy.get('#menu-button-\\:rt\\:').click({ force: true });
    }
    
    
    
    get messageButton() {
        return cy.get('.notifications-messages-text').click({ force: true });
    }
    get sendprivatemessage() {
        return cy.get('#tabs-\\:rf\\:--tab-0').click();
    }
    get sentto() {
        return cy.get('.to_message_container > .chakra-input');
    }
    get subject() {
        return cy.get('.subject_message_container > .chakra-input');
    }
    get message() {
        return cy.get('.chakra-textarea');
    }
    get sendButton() {
        return cy.get('.private_message_body > .chakra-button').click();
    }
    get sent() {
        return cy.get('#tabs-\\:r57\\:--tab-2').click();
    }
    
    get usermention() {
        return cy.get('#tabs-\\:rh\\:--tab-4').click();
    }
    get viewmention() {
        return cy.get('[href="/r/manora"]').click();
    }
    get viewpost() {
        return cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').click();
    }
    get postreplies() {
        return cy.get('#tabs-\\:rh\\:--tab-3').click();
    }
    get all() {
        return cy.get('#tabs-\\:rh\\:--tab-0').click();
    }
    get messagetab() {
        return cy.get('#tabs-\\:rh\\:--tab-2').click({force:true});
    }
    get unread() {
        return cy.get('#tabs-\\:rh\\:--tab-1').click({ force: true });
    }
    
    
    
}    
export default new Message();