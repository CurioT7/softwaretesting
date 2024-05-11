
import {login1} from '../../../utils/login'
import { HomePO } from '../../../support/page_objects/home/home'
//sorting post+post category
//back to top
//recent post as sidebar
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Home page', ()=>{

    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1500, 1400)
          
        login1('maramtarek2', 'sama1212');
    });

    it('back to top',()=>{
        cy.wait(5000)
        cy.scrollTo(0, 1000)
        cy.wait(3000)
        cy.get('.back-to-top > button').click()
    })

    it('Recent Posts',()=>{
        const homepage= new HomePO();
        cy.wait(5000)
        homepage.userPost
        cy.wait(2000)
        homepage.backButton
        cy.get(':nth-child(2) > .flex-column > :nth-child(2) > .post-header').should('contain.text', 'sama');
       // cy.wait(2000)
        //homepage.clearButton
       // cy.get('.flex-column > :nth-child(1) > .d-flex').should('not.exist')

    })

    it('sort by hot/post category ', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        cy.wait(2000)
        homepage.hotButton
        cy.wait(2000)
        cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'new post'); 
    })

    it('sort by top /post category', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        cy.wait(2000)
        homepage.topButton
        cy.wait(2000)
        cy.get(':nth-child(4) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'cross');
        cy.wait(2000)
    })

    it('sort by best /post category', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        cy.wait(2000)
        homepage.bestButton
        cy.wait(2000)
        cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'new post');;
    })

    it('sort by random /post category', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        cy.wait(2000)
        homepage.randomButton
        cy.wait(2000)
       // cy.get('.col-9 > :nth-child(2)').should('be.exist')
           cy.get(':nth-child(2) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'new post');;
     
       
    })



   
})