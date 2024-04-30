export class FollowPage{
    get user(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .css-0 > .community-post-name').click()} 
    get followUnfollowButton(){return cy.get('.follow-button').first().should('be.visible').click()}
    get movetoprofuleButton(){return cy.get(':nth-child(5) > a > .profileImg').click()}
    get home(){return cy.get('.pt-3').click()}
    get followerappear(){return cy.get('[style="display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr); gap: 0.3rem 1rem;"]')}
    get followersList(){return cy.get('[data-testid="followersList"]')}
    get followers(){ return cy.get('[data-testid="followers"]')}
    get followersCount(){return cy.get('[data-testid="followersCount"]')}
    get profilePage(){return cy.get('[data-testid="Profile"]') }
    get followersUsers(){return cy.get('[data-testid="followers"]')}
    get followingUsers(){return cy.get('[data-testid="following"]')}
    get followerTab(){return cy.get('[data-testid="followingTab"]')}
    get viewprofile() {
        return cy.get('.right-item-option > .profileImg').click({ force: true });
      }
get profile(){return cy.get('.drop-down-profile-description').click()}      
get follower(){return cy.get('a > .profileItem').click()}
get unfollow(){return cy.get(':nth-child(3) > .FollowBtn').click()}
    
 
}

export default new FollowPage();