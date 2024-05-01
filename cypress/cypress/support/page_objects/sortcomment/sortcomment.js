export class Sort{
   
    
    get viewpostButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click({force:true});
    }
    
    get sortmenuButton() {
        return cy.get('.sortbtn').click({force:true});
    }
    get sortbytop(){return cy.get('#sortComments > :nth-child(3)').click({force:true})}
    get sortbybest(){return cy.get('#sortComments > :nth-child(2)').click({force:true})}
    get sortbynew(){return cy.get('#sortComments > :nth-child(4)').click({force:true})}
}
export default new Sort();