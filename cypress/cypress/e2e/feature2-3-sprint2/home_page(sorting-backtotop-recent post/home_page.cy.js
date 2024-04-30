
import {login1} from '../../../utils/login'
import { HomePO } from '../../../support/page_objects/home/home'

describe('Home page', ()=>{

    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1500, 1400)
          
        login1('maramtarek2', 'sama1212');
    });

    // it('back to top',()=>{
    //     cy.wait(5000)
    //     cy.scrollTo(0, 1000)
    //     cy.wait(3000)
    //     cy.get('.back-to-top > button').click()
    // })

    // it('Recent Posts',()=>{
    //     const homepage= new HomePO();
    //     cy.wait(5000)
    //     homepage.userPost
    //     cy.wait(2000)
    //     homepage.backButton
    //     cy.get('.flex-column > :nth-child(1) > .d-flex').should('contain.text', 'Radiant_Adventure_1776');//->n8yer al path 2bl ma nrn
    //     cy.wait(2000)
    //     homepage.clearButton
    //     cy.get('.flex-column > :nth-child(1) > .d-flex').should('not.exist')

    // })

    // it('sort by hot ', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.hotButton
       
    //    // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes').should('be.first');;
     
       
    // })

    // it('sort by top ', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.topButton
    //    // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes');//->n8yer al path awel lmah al post t7amel
    //    
       
    // })
    // it('sort by best ', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.bestButton
    
    //    // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes');;
 
       
    // })
    // it('sort by random ', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.randomButton
    //   
    //    // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes');//->n8yer al path awel lmah al post t7amel
    //  
       
    // })



   
})