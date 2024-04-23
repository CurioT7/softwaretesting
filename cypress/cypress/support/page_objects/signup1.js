export class SignUpPage{
   get goButton(){
    return cy.get('div.align-items-center > .link-offcanvas > .dropdown-toggle').click()
   }
    get loginButton(){  
       return cy.get('.dropdown-menu > .d-flex').click()
    }
    get signUpButton(){
        return cy.get('.sign-up > button').click()
    }
    get signUpWithGoogle(){
        return cy.get('.justify-content-center > .continue-with-google').should('be.visible').click()
    }
    
    get xButton(){
        return cy.get('Button', 'close')
    }
    get emailFieldErrorMessage(){
        return cy.get('[data-testid="email"]')
    }
    get emailField(){
        return cy.get('[data-testid="email"]')
    }
    get emailEnter(){
        return cy.get('.signup-info').click()
    }
    get continue1(){
      return   cy.get('.pb-4').click()
    }
    get continueButton(){
        return cy.get('.pb-4 > .w-100')
        .click({force: true})
    }
    get usernameField(){
        return cy.get('[data-testid="username"]')
    }
    get usernameFieldMessage(){
        return cy.get('[data-testid="username"]')
    }
    get usernameFieldErrorMessageValid(){
        return cy.get(':nth-child(3) > .p-2')
    }
    get usernameFieldEnter(){
        return cy.get('.signup-header').click()
    }
    get passwordField(){
        return cy.get('[data-testid="password"]')
    }
   get passwordFieldMessage(){
    return cy.get(':nth-child(3) > .p-2')
   }
   get passwordFieldEnter(){
    return cy.get('.signup-header').click()
}
    get continue4Button(){
        return cy.get('.pb-4 > .w-100').click({force:true})
    }
    get continue2Button(){
        return cy.get('.pb-4').click()
    }
    get selectgenderButton(){
        return cy.get('.modal-body > .d-flex > :nth-child(3)').click({force: true});
    }
   
    get continue3Button(){
        return cy.get('.pb-4 > .w-100').click()
    }
    get backButton(){
        return cy.get('.signup-back-button').click()
    }
    get skipButton(){
        return cy.get('.skip-button').click()
    }
    get intrestButton(){
        return cy.get(':nth-child(3) > :nth-child(9)').click({force: true});
    }
}

export default new SignUpPage();