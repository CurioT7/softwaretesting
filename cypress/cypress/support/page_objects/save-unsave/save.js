export class Save{
   
    get openMenu(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click()}
    get saveButton(){return cy.get('.drop-down-list > :nth-child(1) > .align-items-center').click({ force: true })}
    get userButton(){return cy.get('li.sub-right-navbar > .right-item-option').click()}
    
    get profileButton(){return cy.get('.drop-down-profile-description').click()}
    get savetab() {
        return cy.get('#tabs-\:r4l\:--tab-3').select('Saved');
    }
    
    
    
    
}
export default new Save();