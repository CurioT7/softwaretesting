export class HomePO {
    get userPost(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').click()}
    get userAccFromPost(){return cy.get(':nth-child(2) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .css-0')}
    get backButton(){return cy.get('.back-button-post-content').click()}
    get clearButton(){return cy.get('.col-2 > button').click()}
    get dropdownButton(){return cy.get('.dropbtn').click()}
    get hotButton(){return cy.get('[href="/Hot"]').click() }
    get topButton(){return cy.get('[href="/Top"]').click()}
    get bestButton(){return cy.get('[href="/Best"]').click() }
    get random() {
        return cy.get('[href="/Random"]').click({ force: true });
    }
}    
export default new HomePO();