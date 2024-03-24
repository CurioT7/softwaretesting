export class SignUpPage{
   get goButton(){
    return cy.get('.signup-button > .dropdown-toggle').click()
   }
    get loginButton(){  
        cy.get('.ms-3').click()
    }
    get signUpButton(){
        return cy.contains('Button', 'Signup')
    }
    get signUpWithGoogle(){
        return cy.get('[data-testid="google-signup"]')
    }
    get signUpWithApple(){
        return cy.get('[data-testid="Apple-signup"]')
    }
    get xButton(){
        return cy.get('Button', 'close')
    }
    get emailFieldErrorMessage(){
        return cy.get('.p-2')
    }
    get emailField(){
        return cy.get('[data-testid="email"]')
    }
    get emailEnter(){
        return cy.get('.signup-info').click()
    }
    get continueButton(){
        return cy.get('.pb-4 > .w-100').should('exist')
        .click()
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
        return cy.get('.modal-body > .d-flex > :nth-child(2)').click()
    }
    get selectgenderButton2(){
        return cy.get('.d-flex > :nth-child(3)').click
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
        return cy.get(':nth-child(3) > :nth-child(4)').click()
    }
}

export default new SignUpPage();