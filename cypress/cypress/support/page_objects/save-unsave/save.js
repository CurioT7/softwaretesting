export class Save{
   
    get openMenu(){return cy.get(':nth-child(4) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click()}
    get saveButton() {
        return cy.get(':nth-child(1) > .align-items-center > .mt-3').click({ force: true });
    }
    
    get userButton(){return cy.get('li.sub-right-navbar > .right-item-option').click()}
    
    get profileButton(){return cy.get('.drop-down-profile-description').click()}
    get savetab() {
        return cy.get('#tabs-\\:r14l\\:--tab-3').click({ force: true });
    }
    
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
    
    
}
export default new Save();