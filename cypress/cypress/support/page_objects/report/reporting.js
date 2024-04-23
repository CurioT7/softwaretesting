export class ReportProfile{
    //reporting account
    get viewUser(){
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .css-0 > .community-post-name').click()
    }
    get setButton(){cy.get('.ellipsis-btn').click()}
    get reportUserButton(){
        return cy.get('.last-item').click()
    }
    //report user from profile
    get checkReason(){
        return cy.get(':nth-child(2) > ._input_1tsbh_211').click({forec: true})
    }
    get moreOptiions(){
        return cy.get('._flex-container_1tsbh_265 > :nth-child(3)').click({forec: true})
    }
    get nextButton(){
        return cy.get('._next-button_1tsbh_413').click()
    }
    get savereportingReason(){
        return cy.get('._main-button_1tsbh_413').click()
    }
    get doneButton(){return cy.get('.done-button').click()}
    
}
export default new ReportProfile();