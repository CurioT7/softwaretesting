export class Report{
   
    get openMenu(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click()}
    get reportButton(){return cy.get('.drop-down-list > :nth-child(3)').click()}
    get resoanButton(){return cy.get('.flex-column > :nth-child(2) > :nth-child(3)').click()}
    
    get submitButton(){return cy.get('.report-reason-next-button-enabled').click()}
    get doneButton() { return cy.get('.report-reason-next-button-enabled').click({force:true}); }
    
    
    
}
export default new Report();