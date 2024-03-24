import { LoginPagePo } from "../support/page-objects";

export function login(username, password) {
    cy.visit('')
    LoginPagePo.inputFieldLoginUsername.type(username)
    LoginPagePo.inputFieldLoginPassword.type(password)
    LoginPagePo.loginButton.click()
    cy.url().should('include', '/home')
}