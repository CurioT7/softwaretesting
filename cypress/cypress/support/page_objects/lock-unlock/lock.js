export class Lock{
    //reporting account
    get viewcommunities(){
        return cy.get('.css-1g8m9e5 > [menuitemstyles="[object Object]"]').click()
    }
    get opencommunityButton(){
        return cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(3) > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click()
    }
    //report user from profile
    get lockmenu(){
        return cy.get('#popover-trigger-\\:r4n\\:').click({force: true})
    }
    
    get lockButton(){
        return cy.get('.chakra-text > div').click({forec: true})
    }
    get commentButton(){
        return cy.get('.px-1').click()
    }
   
    
}
export default new Lock();