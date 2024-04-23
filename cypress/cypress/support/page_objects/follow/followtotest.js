export const followPage= ()=> {
    // Return objects containing Cypress commands
    return {
        followUnfollowButton: () => cy.get('[data-testid="Settings"]'),
        followersList: () => cy.get('[data-testid="followersList"]').first(),
        Followers: () => cy.get('[data-testid="Followers"]'),
        followersCount: () => cy.get('[data-testid=" followersCount"]'),
        profilePage: () => cy.contains('button', 'profilePage'),
        followingUsers: () => cy.get('[data-testid="  followingUsers"]'),
        followersUsers: () => cy.contains('button', 'followersUsers'),
        followersTab: () => cy.get('[data-testid=" followersTab"]'),
        assertUnfollow: () => cy.get('[data-testid="Unfollow"]'),
        unfollowMessage: () => cy.get('[data-testid="user unfollowed sucessfully"]')
    };
}
