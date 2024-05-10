export class ReportProfile{
    //reporting account
    get viewUser(){
        return cy.get('.ellipsis-btn').click()
    }
    get reportUserButton(){
        return cy.get('.last-item > :nth-child(2) > .text-text').click()
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
    get close(){
        return cy.get('.btn-close').click({force:true})
    }
    get doneButton(){return cy.get('._main-button_1tsbh_413').click({force:true})}
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
}
export default new ReportProfile();