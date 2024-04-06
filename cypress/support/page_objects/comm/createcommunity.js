export class Createcommunity{
    
    
    ///////// join Community ////////////////
    // get jonCommunity(){return cy.get("button")}
    // get selectedcom(){return cy..get("selector")}

    //////// Create Community //////////////
    get createCommunityButton(){
        return cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"]').click()
    }
    get addCommunityButton(){
        return cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > .ps-menuitem-root > [data-testid="ps-menu-button-test-id"]').click()
    }   
    get nameField(){
        return cy.get('#floatingInput')
    }
    get typeOptions(){
        return cy.contains('type')
    }
    get matureSwitch(){
        return cy.contains('mature')
    }
    get createCommunityButtonSave(){
        return cy.get('.btn-lg').click()
    }
    get cancelButton(){
        return cy.get("button","cancel")
    }


}
