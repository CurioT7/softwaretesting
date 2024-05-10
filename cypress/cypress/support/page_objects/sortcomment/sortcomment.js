export class Sort{
   
    
    get viewpostButton() {
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click({force:true});
    }
    
    get sortmenuButton() {
        return cy.get('.sortbtn').click({force:true});
    }
    get sortbytop(){return cy.get('#sortComments > :nth-child(3) > div > span').click({force:true})}
    
    get sortbynew(){return cy.get('#sortComments > :nth-child(4) > div > span').click({force:true})}
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
}
export default new Sort();