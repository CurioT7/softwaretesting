export class Hide{
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
    get openMenu(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click({ force: true })}
    get hideButton(){return cy.get(':nth-child(2) > div > .mt-3').click()}
    get userButton(){return cy.get('li.sub-right-navbar > .right-item-option').click()}
    
    get profileButton(){return cy.get('.drop-down-profile-description').click()}
    get hidetab() {
        return cy.get('#tabs-\\:r14p\\:--tab-4').click({ force: true });
    }
    
    
    
    get unhideButton() {
        return cy.get('.undo-button').click();
    }
    
    
    
}
export default new Hide();