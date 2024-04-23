import { LoginPagePo } from "../../../support/page_objects/login/LoginPagePo1"


describe('login page', () => {
   
    
    it('login with google', () => {
        const loginpagepo = new LoginPagePo();
        cy.visit('http://localhost:5173/login#')
        cy.wait(2000)
        loginpagepo.googleLoginButton.should('be.visible').click()
   
    })

 
    // it('login with google', () => {
    //     const loginpagepo = new LoginPagePo();
    //     cy.visit('http://localhost:5173/login#');
    //     cy.wait(2000);
    //     loginpagepo.googleLoginButton.should('be.visible').click();

    //     // Wait for the iframe to load and become accessible
    //     cy.get('iframe[src*="accounts.google.com"]').should('be.visible').then($iframe => {
    //         const iframeDoc = $iframe.contents();
    //         const emailInput = iframeDoc.find('input[type="email"]');
    //         const passwordInput = iframeDoc.find('input[type="password"]');
    //         const connectButton = iframeDoc.find('#passwordNext');

    //         // Enter email and password
    //         emailInput.type('maramtarek377@gmail.com');
    //         passwordInput.type('Mtarek377');

    //         // Click "Next" button to proceed
    //         connectButton.click();

    //         // Wait for the login process to complete (adjust timeout as needed)
    //         cy.wait(5000);

    //         // Assert that you're back on the home page
    //         cy.url().should('eq', 'http://localhost:5173/');
    //     });
    // });

    //--------------------------->stubing
    // it('login with google', () => {
    //     const loginpagepo = new LoginPagePo();

    //     // Stub the network requests for Google login
    //     cy.intercept('GET', 'https://accounts.google.com/*').as('googleLogin');

    //     cy.visit('http://localhost:5173/login#');
    //     cy.wait(2000);
    //     loginpagepo.googleLoginButton.should('be.visible').click();

    //     // Wait for the Google login network request to complete
    //     cy.wait('@googleLogin').then(interception => {
    //         const { request, response } = interception;

    //         // Check if the intercepted request is for Google login
    //         if (request.url.includes('https://accounts.google.com/*')) {
    //             // Simulate successful login response
    //             response.body = { success: true };

    //             // Continue with the rest of your test logic
    //             // For example, assert that you're back on the home page
    //             cy.url().should('eq', 'http://localhost:5173/');
    //         }
    //     });
    // });



    
   

   
})