export class Share{
   
    
    get shareButton() {
        return cy.get('#menu-button-\\:rv1\\:').click();
    }
    
    
    get copylinkButton() {
        return cy.get('#menu-list-\\:rv1\\:-menuitem-\\:rv3\\:').click();
    }
    
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
}
export default new Share();