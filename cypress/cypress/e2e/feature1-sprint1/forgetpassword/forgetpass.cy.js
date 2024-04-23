import { LoginPagePo } from "../../../support/page_objects/login/LoginPagePo1"

describe('forget password', () => {
   
  

    it('forgot password screen', () => {
        const loginpagepo = new LoginPagePo();
        cy.visit('http://localhost:5173/login#');
        cy.wait(2000);
        loginpagepo.inputFieldLoginUsername.should('be.visible').type('konoz1212');
        loginpagepo.inputFieldLoginPassword.should('be.visible').type("12345678A");
        cy.log('Password entered'); // Log a message to check if password entry is successful
        loginpagepo.loginbutton; // Corrected to use .click() to actually click the button
        cy.log('Login button clicked'); // Log a message to check if login button is clicked
        cy.wait(2000); // Wait for 2 seconds (adjust as needed)
        loginpagepo.forgotButtonPassword; // Corrected to use .click() to actually click the button
        loginpagepo.inputFieldPassUsername.clear().should('be.visible').type("konoz1212");
        cy.wait(2000);
        loginpagepo.inputFieldUserEmail.should('be.visible').type("maramtarek377@gmail.com");
        cy.wait(2000);
        loginpagepo.resetPassButton; // Corrected to use .click() to actually click the button
        cy.wait(2000);
        loginpagepo.inputFieldUserEmail.clear().should('be.visible').type("maramtarek377@gmail.com");
        cy.wait(2000);
        loginpagepo.resetPassButton.click(); // Corrected to use .click() to actually click the button
    
    //     cy.intercept('POST', '**/reset-password-endpoint').as('resetPasswordRequest');
    //     cy.wait('@resetPasswordRequest').then((interception) => {
    //         const requestBody = interception.request.body;
    //         // Log the request body for debugging purposes
    //         cy.log('Reset password email triggered:', requestBody);
        
    //         // Assertions
    //         expect(interception.response.statusCode).to.equal(200); // Check response status
    //         expect(requestBody).to.have.property('recipient', 'maramtarek377@gmail.com'); // Check recipient email address
    //         expect(requestBody).to.have.property('subject').that.contains('Reset Your Password'); // Check email subject
    //         expect(requestBody).to.have.property('body').that.contains('Reset your password using the link below:'); // Check email body content
    //         // Add more assertions as needed for your specific email content and structure
    //     });
        
    });
    
    
     
 })
