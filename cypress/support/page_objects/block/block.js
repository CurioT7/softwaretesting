class BlockPage{
    get settingsPage(){
        return cy.get('[data-testid="Settings"]')
    }
    get safetyAndPrivacy(){
        return cy.get('[data-testid="safetyAndPrivacy"]').first()
    }
    get blocknewUser(){
        return cy.get('[data-testid="blockUser"]')
    }
    get addBlockButton(){
        return cy.contains('button', 'Add')
    } 
    //shows blocked people
    get blockedAccounts(){
        return cy.get('[data-testid="/Blocked"]')
    }
    get removeBlockButton(){
        return cy.contains('button', 'Remove')
    }
    get assertblock(){
        return cy.get('[data-testid="Block"]')
    }
    get assertunblock(){
        return cy.get('[data-testid="unBlock"]')
    }
    //get blockMessage hna wala fl notifications ??
    
}   

export default new BlockPage();