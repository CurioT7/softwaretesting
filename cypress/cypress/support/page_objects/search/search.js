export class Search{
   
    get searchbarButton() {
        return cy.get('#popover-trigger-\\:r3\\:').click({ force: true });
    }
    
    get visitusersearched() {
        return cy.get(':nth-child(2) > .search-body > .chakra-card__body > .searchBy-details > .search-user').click();
    }
    get postsearch() {
        return cy.get('.search-footer > span').click();
    }
    get viewsearchedpost() {
        return cy.get('.chakra-heading').click();
    }
    get commentsearch() {
        return cy.get('.search-footer > span').click();
    }
    get commenttab() {
        return cy.get('#tabs-\\:rf\\:--tab-2').click();
    }
    get community() {
        return cy.get(':nth-child(1) > :nth-child(2) > .search-body > .chakra-card__body > .searchBy-details > .search-user').click();
    }
    get trend() {
        return cy.get(':nth-child(2) > .search-body > .chakra-card__body > :nth-child(1) > .trending-post-description').click();
    }
    get viewtrend() {
        return cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').click();
    }
    get sortButton() {
        return cy.get('#popover-trigger-\\:rj\\: > .fw-normal').click();
    }
    get hotsort() {
        return cy.get('#popover-body-\\:rj\\: > :nth-child(2) > .search-sorting-item').click();
    }
    get newsort() {
        return cy.get(':nth-child(4) > .search-sorting-item').click();
    }
    get topsort() {
        return cy.get('#popover-body-\\:rj\\: > :nth-child(3) > .search-sorting-item').click();
    }
    
    get timesort() {
        return cy.get('#popover-trigger-\\:rn\\: > .fw-normal').click();
    }
    
    
    get pastyeartime() {
        return cy.get('#popover-body-\\:rn\\: > :nth-child(2) > .search-sorting-item').click();
    }
    get pastmonth() {
        return cy.get('#popover-body-\\:rn\\: > :nth-child(3) > .search-sorting-item > span').click();
    }
    get past24hr() {
        return cy.get('#popover-body-\\:rn\\: > :nth-child(4) > .search-sorting-item').click();
    }
    
    get pasthour() {
        return cy.get('#popover-body-\\:rn\\: > :nth-child(5) > .search-sorting-item > span').click();
    }
    get hashsearch() {
        return cy.get('.search-footer > span').click();
    }
    get hashtab() {
        return cy.get('#tabs-\\:rf\\:--tab-4').click();
    }
    
    
    
    
    
}    
export default new Search();