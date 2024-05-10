export class Post{
   
    
    // get openButton() {
    //     return cy.get('#tabs-\\:r4h\\:--tabpanel-0 > :nth-child(2) > :nth-child(1) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click();
        
    // }
    
    
    get viewButton() {
        return cy.get('.right-item-option > .profileImg').click({force:true});
    }
    get profile(){return cy.get('.drop-down-profile-description').click({force:true})}
    get openmenu() {
        return cy.get('#tabs-\\:rv5\\:--tabpanel-0 > :nth-child(4) > :nth-child(1) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control')
            .click();
    }
    
    get deletePost() {
        return cy.get(':nth-child(4) > div > .mt-3').click();
    }
    
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
}//cy.get('.drop-down-list > :nth-child(4) > div')
export default new Post();