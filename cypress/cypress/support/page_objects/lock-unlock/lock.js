export class Lock{
    //reporting account
    get viewcommunities(){
        return cy.get('.css-1g8m9e5 > [data-testid="ps-submenu-content-test-id"] > .css-ewdv3l > :nth-child(2) > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click()
    }
    
    get lockmenu() {
        return cy.get('#popover-trigger-\\:r103\\:').click({ force: true });
    }
    
    
    
    get lockButton() {
        return cy.get('#popover-body-\\:r103\\: > .chakra-text > div > span').click({ force: true });
    }
    get addcomment(){return cy.get('.form-control')}
    get commentButton(){
        return cy.get('[data-testid="comment-confirm"]').click()
    }
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
   
      get peopletab() {
        return cy.get('#tabs-\\:rf\\:--tab-3').click();
    }
    
}
export default new Lock();