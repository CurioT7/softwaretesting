import { Writesidefooter} from '../../../support/page_objects/writesidefooter/writesidefooter'
import { login1 } from '../../../utils/login'
describe('rightsidefooter', () => {
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it('drop down menu', () => {
        const  writesidefooter = new  Writesidefooter();
      writesidefooter.user
      cy.wait(2000)
      writesidefooter.profileview
      cy.wait(2000)
      cy.url().should('eq', 'http://localhost:5173/profile/maramtarek2');
      cy.wait(2000)
      writesidefooter.user
      cy.wait(2000)
      writesidefooter.profileview
      writesidefooter.settingButton
      cy.wait(2000)
      cy.url().should('eq', 'http://localhost:5173/settings/account');
      cy.wait(2000)
      writesidefooter.logoutButton
      //cy.url().should('eq', 'http://localhost:5173');
    })

   
    
})