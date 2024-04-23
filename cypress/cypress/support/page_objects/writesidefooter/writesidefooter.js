export class  Writesidefooter{
    get user(){return cy.get(':nth-child(5) > a > .profileImg').click()} 
    get profileview(){return cy.get('.pt-3').click()}
    get logoutButton(){return cy.get('.ms-3').click()}
    get settingButton(){return cy.get('a.sub-menu-link > .drop-down-description').click()}
    
}

export default new Writesidefooter();