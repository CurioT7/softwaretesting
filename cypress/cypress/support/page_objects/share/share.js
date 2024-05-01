export class Share{
   
    
    get shareButton() {
        return cy.get('#menu-button-\\:r2l\\:').click();
    }
    
    get copylinkButton() {
        return cy.get('#menu-list-\\:r2l\\:-menuitem-\\:r2n\\:').click();
    }
}
export default new Share();