export class Comment{
   
    
    get commentButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__footer > .css-8owaep > .px-1').click();
    }
    
    get viewButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click({force:true});
    }
    get openmenu(){return cy.get(':nth-child(7) > .col-md-3 > .post-dropdown-control').click({force:true})}
    get open2menu(){return cy.get(':nth-child(10) > .col-md-3 > .post-dropdown-control').click({force:true})}
    get deleteButton(){return cy.get(':nth-child(3) > div > .mt-3').click()}
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
}
export default new Comment();