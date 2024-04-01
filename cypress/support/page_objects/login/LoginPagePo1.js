export class LoginPagePo {
    get gotitButton(){return cy.get('.signup-button > .dropdown-toggle').click()}
    get loginRestButton() {return cy.get('.dropdown-menu > .d-flex').click()}
    get loginButton() {return cy.get('.pb-5 > a').click()}
    get logbutton(){return cy.get('.login_buttons').click()}
    get googleLoginButton() {  return cy.get('.continue-with-google').click()}
    get appleLoginButton() {  return cy.contains('button', 'connect to apple')}
    get inputFieldLoginUsername() { return cy.get(':nth-child(5) > input') }
    get inputFieldLoginPassword() { return cy.get(':nth-child(6) > input') }
    get forgotButtonUsername() {  return cy.get('.forgot > :nth-child(2)').click() }
    get inputFieldUserEmail() { return cy.get('.loginInput > input') }
    get errorMessageBox() { return cy.get('.loginInput > input')}
    get emailmeButton() {  return cy.get('.login_buttons').click() }
    get xButton() {  return cy.contains('button', 'close')}
    get forgotButtonPassword() {  return cy.get('.forgot > :nth-child(4)').click()}
    get forgotPasswordScreen() { return cy.get("") }
    get inputFieldPassUsername() { return cy.get('form > :nth-child(1) > input')}
    get inputFieldPassUsernameError() { return cy.get()}
    get inputFieldPassEmail() { return cy.get(':nth-child(2) > input') }
    get resetPassButton() {  return cy.get('.login_buttons').click() }
    get inputFieldNewPass() { return cy.get('form > :nth-child(1) > input') }
    get contfirmPass() {  return cy.get('.loginBox > form > :nth-child(2)')}
    get resetDoneButton() {  return cy.get('.resetPass > button').click()}
}

export default new LoginPagePo()