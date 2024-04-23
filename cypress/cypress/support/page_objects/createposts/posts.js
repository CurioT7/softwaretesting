export class Post{

    get createButton(){ return cy.get('.ps-menu-root > :nth-child(1) > :nth-child(4) > [data-testid="ps-menu-button-test-id"]').click() }
    get selectButton(){return cy.get('.inner-div').click()}
    get nameselected(){ return cy.get('[style="border-bottom: 1px solid rgb(135, 138, 140); margin-bottom: 0px;"] > :nth-child(1) > [style="display: flex; align-items: center; margin-top: 7px;"] > div').click({force:true}) }
    
    get title(){return cy.get('.custom-textarea')}
    get discription(){ return cy.get('.Text-optional-textarea') }
    get boldButton(){ return cy.get(':nth-child(1) > .chakra-button > .fa-solid').click()}
    get ibutton(){return cy.get(':nth-child(2) > .chakra-button').click()}
    get putLink(){return cy.get(':nth-child(3) > .chakra-button > .fa-solid').click()}
    get shutButton(){return cy.get(':nth-child(4) > .chakra-button > .fa-solid').click()}
    get spaceButton(){return cy.get(':nth-child(5) > .chakra-button').click()}
    get smalllargecharButton(){return cy.get(':nth-child(6) > .chakra-button').click()}
    get ocButton(){return cy.get('.button-group-edit > :nth-child(1)').click()}
    get spoilerButton(){return cy.get('.button-group-edit > :nth-child(2)').click()}
    get mhsfButton(){return cy.get('.button-group-edit > :nth-child(3)').click()}
    get saveButton(){return cy.get('.save-buttons > .chakra-button').click()}
    get avatar(){return cy.get('.post-methods > :nth-child(2)').click()}
    get upload(){return cy.get('.upload-text > .chakra-button').click({force:true})}
    get link(){return cy.get('.post-methods > :nth-child(3)').click()}
    get name(){return cy.get('.custom-textarea')}
    get url(){return cy.get('.url-input__input')}
}
export default new Post();