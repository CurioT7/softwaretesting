export class Vote{
   
    
    get voteButton() {
        return cy.get(':nth-child(6) > .chakra-card > .chakra-card__footer > .css-8owaep > .d-flex > [data-testid="upvotes"] > svg').click({force:true});
    }
    
    get downvoteButton() {
        return cy.get(':nth-child(6) > .chakra-card > .chakra-card__footer > .css-8owaep > .d-flex > [data-testid="downvotes"] > svg > path').click({force:true});
    }
}
export default new Vote();