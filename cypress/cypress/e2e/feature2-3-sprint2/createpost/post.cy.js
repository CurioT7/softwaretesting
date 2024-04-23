import {Post} from '../../../support/page_objects/createposts/posts'
import { login1 } from '../../../utils/login'
describe('create post', () => {
    beforeEach(() => {
        // Login before each test
        
        cy.viewport(1600, 1660)
          
        login1('maramtarek2', 'maram1212');
       // cy.visit('http://localhost:5173/settings/account')
    });

    it(' Input text  ', () => {
        const post  = new Post();
       post.createButton
       cy.wait(2000)
       post.selectButton
       cy.wait(2000)
       post.nameselected
       cy.wait(2000)
       post.title.should('be.visible').type('sprint2{enter}')
       cy.wait(2000)
       post.discription.should('be.visible').type('create ')
       cy.wait(2000)
       post.ibutton
       cy.wait(2000)
       post.boldButton
       cy.wait(2000)
       post.shutButton
       cy.wait(2000)
       post.shutButton
       cy.wait(2000)
       post.putLink
       post.discription.should('be.visible').type('https://www.facebook.com/share/p/NywtDsnrJZakdhGq/?mibextid=cR73hX ')
       cy.wait(2000)
       post.ibutton
       cy.wait(2000)
       post.boldButton
       post.putLink
       cy.wait(2000)
       post.shutButton
       cy.wait(2000)
       post.shutButton
       cy.wait(2000)
       post.discription.should('be.visible').type(' post check')
       cy.wait(2000)
       post.spaceButton
       cy.wait(2000)
       post.ocButton
       cy.wait(2000)
       post.spoilerButton
       cy.wait(2000)
       post.mhsfButton
       cy.wait(2000)
       post.saveButton
       cy.wait(2000)
       cy.url().should('eq', 'http://localhost:5173/');
    })

    it(' avatar  ', () => {
        const post  = new Post();
        post.createButton
        cy.wait(2000)
        post.selectButton
        cy.wait(2000)
        post.nameselected
        cy.wait(2000)
        post.avatar
        cy.wait(2000)
        post.upload
        cy.wait(2000)
        post.ocButton
        cy.wait(2000)
        post.spoilerButton
        cy.wait(2000)
        post.mhsfButton
        cy.wait(2000)
        post.saveButton
        cy.wait(2000)
        cy.url().should('eq', 'http://localhost:5173/');
    })

    it(' link  ', () => {
        const post  = new Post();
        post.createButton
        cy.wait(2000)
        post.selectButton
        cy.wait(2000)
        post.nameselected
        cy.wait(2000)
        post.link
        post.name.should('be.visible').type('reddit post')
        cy.wait(2000)
        post.url.should('be.visible').type('https://www.reddit.com/user/tinyBuildGAMES/comments/1bvxbvb/ok_hear_me_out_diablo_but_in_first_person/?p=1&impressionid=4307039758133160806&utm_source=share&utm_medium=web2x&context=3')
        post.ocButton
        cy.wait(2000)
        post.spoilerButton
        cy.wait(2000)
        post.mhsfButton
        cy.wait(2000)
        post.saveButton
        cy.wait(2000)
        cy.url().should('eq', 'http://localhost:5173/');
    })
    
})