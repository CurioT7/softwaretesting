export class Notification{
get message(){
    return cy.get('.notifications-messages-text').click()
}    get notificationButton() { return cy.get('.notif > .right-item-option').click()}
    get upvotenotificationButton() {return cy.get('.read > .notifications-item-link > .notifications-item-content').click()  }
    get listButton() { return cy.get('#popover-trigger-\\:r1h\\:').click();}
    get seeallButton(){return cy.get('.see-all-text-inner').click({force:true})}
    get viewvotedpost(){return cy.get(':nth-child(14) > [style="display: flex; gap: 0.5em;"] > .notification-details > .notifications-item-message > .notifications-item-message-text').click()}
    get hidenotification() {
        return cy.get('#popover-content-\\:r4p\\: > :nth-child(2)').click();
    }
    
    get down2menunotification() {
        return cy.get('#popover-trigger-\\:r4t\\:').click({ force: true });
    }
    
    get hidecomment() {
        return cy.get('#popover-content-\\:r31\\: > :nth-child(2)').click();
    }
    
    get hide2notification() {
        return cy.get('#popover-content-\\:r4t\\: > :nth-child(2)').click();
    }
    
    get commentdownmenu() {
        return cy.get('#popover-trigger-\\:r31\\:').click();
    }
    
    get disableupdate() {
        return cy.get('#popover-content-\\:r25\\: > :nth-child(3)').click({ force: true });
    }
    
    
    
    get comment2menu() {
        return cy.get('#popover-trigger-\\:r25\\:').click();
    }
    
    get viewcomment(){return cy.get(':nth-child(2) > [style="display: flex; gap: 0.5em;"] > .notification-details > .notifications-item-message > .notifications-item-message-text').click()} 
    get profilemenu(){return cy.get('li.sub-right-navbar > .right-item-option').click()}
    get viewprofile(){return cy.get('.drop-down-profile-description').click()}
    get viewfollowers(){return cy.get('[style="display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 0.5fr); gap: 0.3rem 1rem;"] > a').click({force:true})}
    get downmenuButton() {
        return cy.get('#popover-trigger-\\:r4p\\:').click({ force: true });
    }
    
    
}
export default new Notification();