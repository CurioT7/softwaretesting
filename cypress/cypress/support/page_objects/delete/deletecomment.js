export class Comment{
   
    
    get commentButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__footer > .css-8owaep > .px-1').click();
    }
    
    get viewButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click({force:true});
    }
    get openmenu(){return cy.get(':nth-child(28) > .col-md-3 > .post-dropdown-control').click({force:true})}
    get deleteButton(){return cy.get('.drop-down-list > :nth-child(3)').click()}
}
export default new Comment();