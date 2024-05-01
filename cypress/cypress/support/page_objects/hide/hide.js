export class Hide{
   
    get openMenu(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click({ force: true })}
    get hideButton(){return cy.get('.drop-down-list > :nth-child(2)').click()}
    get userButton(){return cy.get('li.sub-right-navbar > .right-item-option').click()}
    
    get profileButton(){return cy.get('.drop-down-profile-description').click()}
    get hidetab() { return cy.get('#tabs-\:r4l\:--tab-4').click({ force: true }); }
    
    get unhideButton(){return cy.get('#tabs-\:r2ih\:--tabpanel-4 > .flex-column > .justify-content-between > .undo-button')}
    
    
}
export default new Hide();