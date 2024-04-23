//import { describe } from "mocha";
import {login1} from '../../../utils/login'
import { HomePO } from '../../../support/page_objects/home/home'

describe('Home page', ()=>{

    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1500, 1400)
          
        login1('samamostafa', 'sama1212');
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
    //     cy.get('.flex-column > :nth-child(1) > .d-flex').should('contain.text', 'Radiant_Adventure_1776');
    //     cy.wait(2000)
    //     homepage.clearButton
    //     cy.get('.flex-column > :nth-child(1) > .d-flex').should('not.exist')

    // })

    it('sort by hot ', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        homepage.hotButton
        cy.get('.col-md-6 > :nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading')
        .contains('Exploring Melodic Landscapes')
        .parent()
        .should('have.attr', '.col-md-6 > :nth-child(1)', '1');
       // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes').should('be.first');;
       ///cy.get('.col-md-6 > :nth-child(6)')
       //cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading')
       
    })

    it('sort by top ', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        homepage.topButton
        cy.get('.col-md-6 > :nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading')
        .contains('Exploring Melodic Landscapes')
        .parent()
        .should('have.attr', '.col-md-6 > :nth-child(1)', '1');
       // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes').should('be.first');;
       ///cy.get('.col-md-6 > :nth-child(6)')
       //cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading')
       
    })
    it('sort by best ', () => {
        const homepage= new HomePO();
        homepage.dropdownButton
        homepage.bestButton
        cy.get('.col-md-6 > :nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading')
        .contains('Exploring Melodic Landscapes')
        .parent()
        .should('have.attr', '.col-md-6 > :nth-child(1)', '1');
       // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes').should('be.first');;
       ///cy.get('.col-md-6 > :nth-child(6)')
       //cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading')
       
    })


   
})