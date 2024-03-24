export const createCommunity= ()=> {
    // Return objects containing Cypress commands
    return {
        createCommunityButton: () => cy.contains('[data-testid=" createCommunity"]').click,
        createCommunityScreen: () => cy.get('[data-testid="createCommunity"]'),
        nameField: () => cy.contains('[data-testid="name"]').invoke('text'),
        typeOptiions: () => cy.contains('[data-testid="  type"]').select('options'),
        matureSwitch: () => cy.contains('mature'),
        createCommunityButtonSave: () => cy.get('[data-testid=" createCommunityButtonSave"]').click(),
    };
}
