export class Add{
   
    
    get commentButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__footer > .css-8owaep > .px-1').click();
    }
    
    get viewButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click({force:true});
    }
    get comment(){return cy.get('.form-control')}
    get add(){return cy.get('[data-testid="comment-confirm"]').click()}
}
export default new Add();