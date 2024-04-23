export class UnSave{
   
    get openMenu(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click()}
    get saveButton(){return cy.get('.drop-down-list > :nth-child(1)').click()}
    get userButton(){return cy.get(':nth-child(5) > a > .profileImg').click()}
    
    get profileButton(){return cy.get('.drop-down-profile-description').click()}
    get savetab() { return cy.get('#tabs-\\:r2id\\:--tab-3').click({ force: true }); }
    
  
}
export default new UnSave();