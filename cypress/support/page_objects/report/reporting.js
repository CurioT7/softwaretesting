class ReportProfile{
    //reporting account
    get dotButton(){
        return cy.contains('button', 'select')
    }
    get reportUserButton(){
        return cy.contains('button', 'report')
    }
    //report user from profile
    get checkReason(){
        return cy.get('select')
    }
    get moreOptiions(){
        return cy.get('[data-testid="more Options"]')
    }
    get nextButton(){
        return cy.contains('button', 'next')
    }
    get reportingReason(){
        return cy.contains('button', 'report')
    }
    // get reportMessage(){
    //     return cy.get('[]')
    // }
    //report reasons;
    //get report username, comment, post, message in chat, private message
}