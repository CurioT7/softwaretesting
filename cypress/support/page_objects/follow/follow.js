class FollowPage{
    
    get followUnfollowButton(){return cy.get('[data-testid="followUnfollow"]')}
    get followersList(){return cy.get('[data-testid="followersList"]')}
    get followers(){ return cy.get('[data-testid="followers"]')}
    get followersCount(){return cy.get('[data-testid="followersCount"]')}
    get profilePage(){return cy.get('[data-testid="Profile"]') }
    get followersUsers(){return cy.get('[data-testid="followers"]')}
    get followingUsers(){return cy.get('[data-testid="following"]')}
    get followerTab(){return cy.get('[data-testid="followingTab"]')}
    get assertUnfollow(){return cy.get('[data-testid="Unfollow"]')}
    get unfollowMessage(){ return cy.get('[data-testid="UnfollowMessage"]') }
    // get userrsWhoFollowing(){
    //     return cy.get('[data-testid="userToFollow"]')
    // }
    // get usersToFollow(){
    //     return cy.get('[data-testid="userToFollow"]')
    // }    
 
}

export default new FollowPage();