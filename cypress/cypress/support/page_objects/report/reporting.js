export class ReportProfile{
    //reporting account
    get viewUser(){
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click()
    }
    get reportUserButton(){
        return cy.get('.drop-down-list > :nth-child(3)').click()
    }
    //report user from profile
    get checkReason(){
        return cy.get('.flex-column > :nth-child(2) > :nth-child(3)').click({forec: true})
    }
    get moreOptiions(){
        return cy.get('._flex-container_1tsbh_265 > :nth-child(3)').click({forec: true})
    }
    get nextButton(){
        return cy.get('.report-reason-next-button-enabled').click()
    }
    get close(){
        return cy.get('.signup-close-button').click({force:true})
    }
    get doneButton(){return cy.get('.report-reason-next-button-enabled').click({force:true})}
    
}
export default new ReportProfile();