export const blockPage= ()=> {
    // Return objects containing Cypress commands
    return {
        settingsPage: () => cy.get('[data-testid="Settings"]'),
        safetyAndPrivacy: () => cy.get('[data-testid="safetyAndPrivacy"]').first(),
        blockAndPermission: () => cy.get('[data-testid="blockAndPermission"]'),
        blocknewUser: () => cy.get('[data-testid="blockUser"]'),
        addBlockButton: () => cy.contains('button', 'Add'),
        blockedAccounts: () => cy.get('[data-testid="/Blocked"]'),
        removeBlockButton: () => cy.contains('button', 'Remove'),
        assertblock:() => cy.contains('button', 'block'),
        assertunblock:() => cy.contains('button', 'unblock'),
    };
}


