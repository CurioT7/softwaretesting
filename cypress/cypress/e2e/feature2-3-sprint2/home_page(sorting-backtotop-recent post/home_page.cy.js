
import {login1} from '../../../utils/login'
import { HomePO } from '../../../support/page_objects/home/home'
//sorting post+post category
//back to top
//recent post as sidebar
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
    //     cy.get(':nth-child(3) > .flex-column > :nth-child(2) > .post-header').should('contain.text', 'Unraveling Cinematic Masterpieces');//->n8yer al path 2bl ma nrn
    //    // cy.wait(2000)
    //     //homepage.clearButton
    //    // cy.get('.flex-column > :nth-child(1) > .d-flex').should('not.exist')

    // })

    // it('sort by hot/post category ', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.hotButton
       
    //     cy.get(':nth-child(4) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring the Latest Tech Trends');
     
       
    // })

    // it('sort by top /post category', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.topButton
    //     cy.get(':nth-child(8) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Appreciating Creative Expressions');//->n8yer al path awel lmah al post t7amel
       
       
    // })

    // it('sort by best /post category', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.bestButton
    
    //    cy.get(':nth-child(10) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes');;
 
    // })

    // it('sort by random /post category', () => {
    //     const homepage= new HomePO();
    //     homepage.dropdownButton
    //     homepage.randomButton
    //     cy.get('.col-9 > :nth-child(2)')
    //    // cy.get(':nth-child(6) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring Melodic Landscapes');//->n8yer al path awel lmah al post t7amel
     
       
    // })



   
})