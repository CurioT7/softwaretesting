// ../login/login1.cy.js

//import { LoginPagePo } from "../support/page-objects";

// export function login() {
//     const loginpagepo = new LoginPagePo();
//     cy.visit('http://localhost:5173/login#');
//     loginpagepo.inputFieldLoginUsername.type('maramtarek2');
//     loginpagepo.inputFieldLoginPassword.type('maram1212');
//     loginpagepo.loginButton.click(); // You need to add .click() to actually click the button
//    // Make sure the URL matches after successful login
// }
// login file
export function login1(username, password) {
    cy.visit('http://localhost:5173/login');
    cy.get(':nth-child(5) > input').type(username); // Assuming this is the username input field selector
    cy.get(':nth-child(6) > input').type(password); // Assuming this is the password input field selector
    cy.get('.login_buttons').click(); // Assuming this is the login button selector
}

