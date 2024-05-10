export class  Show{
    get overview(){return cy.get('.flex-lg-row > :nth-child(1)').click()} 
    get post(){return cy.get('.flex-lg-row > :nth-child(2)').click()}
    get comment(){return cy.get('.flex-lg-row > :nth-child(3)').click()}
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
    
}

export default new Show();