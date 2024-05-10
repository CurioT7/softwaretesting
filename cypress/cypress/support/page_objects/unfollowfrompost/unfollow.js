export class Unfollow{
   
    
    get UsertabButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .community-post-name')
            .trigger('mouseover');
    }
    

    
    get followButton() {
        return cy.get('.popoverFollow').click({force:true});
    }
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
}
export default new Unfollow();