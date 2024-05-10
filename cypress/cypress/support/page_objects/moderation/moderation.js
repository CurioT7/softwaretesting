export class Moderation{
   
    
    get scheduletabButton() {
        return cy.get('[href="/r/many/about/scheduledposts"] > .ps-menuitem-root > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click({ force: true });
    }
    
    
    
    get scheduleButton() {
        return cy.get('.fixed > .chakra-button').click({ force: true });
    }
    get unmoderatedbutton() {
        return cy.get('.col-7 > :nth-child(3)').click();
    }
    get approve() {
        return cy.get(':nth-child(7) > .row > .col-11 > .d-flex > .me-3').click();
    }
    get remove() {
        return cy.get(':nth-child(6) > .row > .col-11 > .d-flex > .RemoveButton').click();
    }
    get usermanagement() {
        return cy.get('[href="/r/many/about/usermanagement"] > .ps-menuitem-root > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click();
    }
    get banuser() {
        return cy.get('.BanUserBtn').click();
    }
    get namefield() {
        return cy.get('[placeholder="u/username"]').click();
    }
    get reasonfield() {
        return cy.get('[placeholder="Reason"]').click();
    }
    get banButton() {
        return cy.get('.chakra-modal__footer > .BanUserBtn').click();
    }
   
    
}    
export default new Moderation();