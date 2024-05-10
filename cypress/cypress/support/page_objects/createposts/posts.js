export class Post{

    get createButton(){ return cy.get('.css-1iujvyu > [data-testid="ps-menu-button-test-id"] > .ps-menu-label').click() }
    get selectButton(){return cy.get('.chakra-input').click()}
    get nameselected(){ return cy.get(':nth-child(2) > .username-section > .dropdown-community').click() }
    get nameofcommunity(){return cy.get(':nth-child(2) > .username-section > .dropdown-community').click()}
    
    get title(){return cy.get('.custom-textarea')}
    get discription(){ return cy.get('.ql-editor')}
    get boldButton(){ return cy.get('.ql-bold').click()}
    get ibutton(){return cy.get('.ql-italic').click()}
    get putLink(){return cy.get('.ql-link').click()}
    get shutButton(){return cy.get('.ql-strike').click()}
    get spaceButton(){return cy.get('.ql-script').click()}
    get smalllargecharButton(){return cy.get(':nth-child(6) > .chakra-button').click()}
    get ocButton(){return cy.get('.button-group-edit > :nth-child(1)').click()}
    get spoilerButton(){return cy.get('.css-ez23ye').click({force:true})}
    get mhsfButton(){return cy.get('.button-group-edit > :nth-child(3)').click()}
    get saveButton(){return cy.get('.rounded-start').click()}
    get avatar(){return cy.get('.post-methods > :nth-child(2)').click({force:true})}
    get upload(){return cy.get('.upload-text > .chakra-button').click({force:true})}
    get link(){return cy.get('.post-methods > :nth-child(3)').click()}
    get name(){return cy.get('.custom-textarea')}
    get url(){return cy.get('.url-input__input')}
}
export default new Post();