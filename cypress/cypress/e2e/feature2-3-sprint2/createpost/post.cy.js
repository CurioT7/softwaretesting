import {Post} from '../../../support/page_objects/createposts/posts'
import { login1 } from '../../../utils/login'
describe('create post', () => {
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'sama1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

//     it(' Input text many time post created  ', () => {
//         const post  = new Post();
//        post.createButton
//        cy.wait(2000)
//     post.title.should('be.visible').type('sprint220{enter}')
//      cy.wait(2000)
//     post.discription.type('create ')
//     cy.wait(2000)
//      post.ibutton
//      cy.wait(2000)
//      post.boldButton
//     cy.wait(2000)
//     post.shutButton
//     cy.wait(2000)
//     post.shutButton
//     cy.wait(2000)
//     post.putLink
//      post.discription.should('be.visible').type('https://www.facebook.com/share/p/NywtDsnrJZakdhGq/?mibextid=cR73hX ')
//      cy.wait(2000)
//      post.ibutton
//     post.saveButton
//     cy.get('.post-content-header').should('contain.text', 'sprint220');
//      post.selectButton
//      cy.wait(2000)
//      post.nameselected
//      cy.wait(2000)
//        cy.wait(2000)
//        post.boldButton
//        post.putLink
//        cy.wait(2000)
//        post.shutButton
//        cy.wait(2000)
//        post.shutButton
//        cy.wait(2000)
//        post.discription.should('be.visible').type(' post check')
//        cy.wait(2000)
//        post.spaceButton
//        cy.wait(2000)
//        post.ocButton
//        cy.wait(2000)
//        post.spoilerButton
//        cy.wait(2000)
//        post.mhsfButton
//        cy.wait(2000)
 
//        cy.wait(2000)
//       // cy.url().should('eq', 'http://localhost:5173/');
//    })
    // it(' Input text post created  ', () => { 
    //    const post  = new Post();
    //   post.createButton
    //    cy.wait(2000)
    // post.title.should('be.visible').type('sprint27fg20{enter}')
    //  cy.wait(2000)
    //  post.discription.should('be.visible').type(' post check')
    //  cy.wait(2000)
    //    post.spaceButton
    //    post.discription.should('be.visible').type(' yalahwaaaaaaaaaaaay')
    //    cy.wait(2000)
    //    post.ocButton
    //    cy.wait(2000)
    //    post.spoilerButton
    //    cy.get('.spoilerButton')
    //    .should('have.css', 'background-color')
    //    .and('eq', 'rgb(255, 165, 0)');
    //    cy.wait(2000)
       
       
    // //    post.discription.clear().should('be.visible').type(' post check')
    // //    cy.wait(2000)
    // //    post.selectButton
    // //    post.nameselected
    //    //post.saveButton
    //  //cy.wait(2000)
   

    
    
    
    // })


    // it(' avatar  ', () => {
    //     const post  = new Post();
    //     post.createButton
    //     cy.wait(2000)
    //     //post.selectButton
    //    // cy.wait(2000)
    //     //post.nameselected
    //     post.title.should('be.visible').type('sprint34220{enter}')
    //     cy.wait(2000)
    //     post.avatar
    //     cy.wait(2000)
    //     post.upload
    //     cy.wait(2000)
    //     post.ocButton
    //     cy.wait(2000)
    //     post.mhsfButton
    //     cy.wait(2000)
    //     post.saveButton
    //     cy.wait(2000)
    //     cy.get('.post-content-header').should('contain.text', 'sprint34220');
    // })

    // it(' link  ', () => {
    //     const post  = new Post();
    //     post.createButton
    //     cy.wait(2000)
    //     // post.selectButton
    //     // cy.wait(2000)
    //     // post.nameselected
    //     cy.wait(2000)
    //     post.link
    //     post.name.should('be.visible').type('reddit post')
    //     cy.wait(2000)
    //     post.url.should('be.visible').type('https://www.reddit.com/user/tinyBuildGAMES/comments/1bvxbvb/ok_hear_me_out_diablo_but_in_first_person/?p=1&impressionid=4307039758133160806&utm_source=share&utm_medium=web2x&context=3')
    //     post.ocButton
    //     cy.wait(2000)
    //     post.spoilerButton
    //     cy.wait(2000)
    //     post.mhsfButton
    //     cy.wait(2000)
    //     post.saveButton
    //     cy.wait(2000)
    //     cy.url().should('eq', 'http://localhost:5173/');
    // })
    
})