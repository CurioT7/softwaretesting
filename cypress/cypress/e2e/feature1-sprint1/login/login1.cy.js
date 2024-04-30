import { LoginPagePo } from "../../../support/page_objects/login/LoginPagePo1"


describe('login page', () => {
   beforeEach(() => {
    // Login before each test
    
    cy.viewport(1600, 1660)
      
    
});

    it('login with user name and password', () => {
        const loginpagepo = new LoginPagePo();
         cy.visit('http://localhost:5173/login#')
         cy.wait(2000)
     loginpagepo.inputFieldLoginUsername.should('be.visible').type('ma')
     cy.wait(2000)
    loginpagepo.inputFieldLoginPassword.should('be.visible').type("12345678A")
    cy.wait(2000)
     loginpagepo.loginButton
    loginpagepo.inputFieldLoginUsername.should('be.visible').clear().type('maramtarek2')
     loginpagepo.inputFieldLoginPassword.should('be.visible').clear().type("12as")
    loginpagepo.loginButton
    loginpagepo.inputFieldLoginPassword.should('be.visible').clear().type("sama1212")
      loginpagepo.loginButton
      cy.wait(2000)
      cy.url().should('eq', 'http://localhost:5173/');
    })
    
   
   

//------->stub
// it('login with user name and password', () => {
//     cy.intercept('POST', '/api/login', (req) => {
//       if (req.body.username === 'maramtarek2' && req.body.password === 'maram1212') {
//         req.reply({ statusCode: 200, body: { message: 'Login successful' } });
//       } else {
//         req.reply({ statusCode: 401, body: { message: 'Incorrect username or password' } });
//       }
//     }).as('loginRequest');
  
//     const loginpagepo = new LoginPagePo();
//     cy.visit('http://localhost:5173/login#');
//     cy.wait(2000);
    
//     loginpagepo.inputFieldLoginUsername.should('be.visible').type('maramtarek2');
//     cy.wait(2000);
//     loginpagepo.inputFieldLoginPassword.should('be.visible').type('maram1212');
//     cy.wait(2000);
  
//     loginpagepo.loginButton.click();
  
//     cy.wait('@loginRequest').then((interception) => {
//       expect(interception.response.statusCode).to.equal(200); // Assuming 200 is success code
//       // Assert further as per your application's behavior after successful login
//       cy.url().should('eq', 'http://localhost:5173/'); // Example assertion after login
//     });
//   });
  







   
     
    
   

})
