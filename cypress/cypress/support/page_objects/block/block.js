export class BlockPage{
    get viewuser(){
        return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .community-post-name').click()
    }
    get downmenu(){
        return cy.get('.ellipsis-btn').click()
    }
    get blocknewUser(){
        return cy.get(':nth-child(3) > :nth-child(2) > .text-text').click()
    }
    get profilemenu(){
        return cy.get('li.sub-right-navbar > .right-item-option').click()
    } 
    //shows blocked people
    get setting(){
        return cy.get('.drop-down-description').click()
    }
    get safety(){
        return cy.get('#safety-privacy-link').click({force:true})
    }
    get searchforuser() {
        return cy.get('#popover-trigger-\\:r3\\:').click();
      }
    
}   

export default new BlockPage();