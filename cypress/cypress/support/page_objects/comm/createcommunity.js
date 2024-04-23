export class Createcommunity{
    
    
    ///////// join Community ////////////////
    // get jonCommunity(){return cy.get("button")}
    // get selectedcom(){return cy..get("selector")}

    //////// Create Community //////////////
    get createCommunityButton(){return cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"]').click()}
    get addcommunity(){return cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(1) > [data-testid="ps-menu-button-test-id"] > .ps-menu-icon').click()}      
    get nameField(){ return cy.get('#floatingInput') }
    get createCommunityButtonSave(){return cy.get('.btn-lg').click()}
    get cancelButton(){ return cy.get('.py-3').click()}
    get privateButton(){ return cy.get(':nth-child(2) > :nth-child(3) > .ms-auto').click()}
    get restrictedButton(){ return cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .ms-auto').click()}
    get matureSwitch(){return cy.get('form > :nth-child(5)').click()}
}
