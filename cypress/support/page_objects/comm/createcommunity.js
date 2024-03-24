export class Createcommunity{
    
    get resourceButton() {return cy.get('[menuitemstyles="[object Object]"]').click()}
    get comButton() {return cy.get(':nth-child(8) > [data-testid="ps-menu-button-test-id"]').click()}
    
    // get createCommunityButton(){return cy.get("button","create")}
    // get nameField(){return cy.get('enterName').invoke('text')}
    // get typeOptiions(){return cy.contains('type')}
    // get matureSwitch(){return cy.contains('mature')}
    // get createCommunityButtonSave(){return cy.get("button","create")}
    // get cancelButton(){return cy.get("button","cancel")}

}