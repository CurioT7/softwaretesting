export class Edit{
   
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
    get commentButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__footer > .css-8owaep > .px-1').click();
    }
    
    get viewButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click({force:true});
    }
    get openmenu(){return cy.get(':nth-child(4) > .col-md-3 > .post-dropdown-control').click({force:true})}
    get add(){return cy.get(':nth-child(4) > .col-md-3 > .post-dropdown-control').click()}
}
export default new Edit();