import { login1 } from '../../utils/login'
import {Search} from '../../support/page_objects/search/search'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('search', () => {
    
    beforeEach('login and open home page', () => {
        cy.viewport(1600, 1660)
          
        login1('samamostafa', 'maram1212');
    })

  
     it('search by user', () => {
        const search = new Search();
        cy.wait(7000)
        search.searchbarButton.type('maramtarek2')
        cy.wait(2000)
        cy.get(':nth-child(2) > .search-body > .chakra-card__body > .searchBy-details > .search-user').should('contain', 'u/maramtarek2')
        cy.wait(2000)
        search.visitusersearched
        cy.wait(4000)
        cy.get('.flex-column > .show-friend-header').should('contain','Mero')
     })

    
     it('search by post', () => {
          const search = new Search();
          cy.wait(7000)
          search.searchbarButton.type('new post')
          cy.wait(2000)
          search.postsearch
          cy.get('.chakra-heading').should('contain', 'new post')
          cy.wait(2000)
          search.viewsearchedpost
          cy.wait(2000)
          cy.get('.post-content-header').should('contain', 'new post')
        
      })

    
     it('search by comment', () => {
          const search = new Search();
          cy.wait(7000)
          search.searchbarButton.type('what')
          cy.wait(2000)
          search.commentsearch
          cy.wait(2000)
          search.commenttab
          cy.wait(2000)
          cy.get('.post-details-content').should('contain', 'what')
    
       })

    it('search by community', () => {
        const search = new Search();
        cy.wait(7000)
        search.searchbarButton.type('r/Art aliquid')
        cy.wait(2000)
        search.community
        cy.wait(2000)
        cy.get('.align-self-end').should('contain', 'r/Art aliquid')
     })

     it('search by trending', () => {
         const search = new Search();
         cy.wait(7000)
         search.searchbarButton
         cy.wait(2000)
         cy.get('.trending-header > span').should('contain', 'TRENDING TODAY')
         cy.wait(2000)
         cy.get(':nth-child(2) > .search-body > .chakra-card__body > :nth-child(1) > .trending-post-description').should('contain', 'Exploring the Latest Tech Trends')
         cy.wait(2000)
         search.trend
         cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring the Latest Tech Trends')
         cy.wait(2000)
         search.viewtrend
         cy.wait(2000)
         cy.get('.post-content-header').should('contain', 'Exploring the Latest Tech Trends')

     })

      it('search by hashing', () => {
          const search = new Search();
          cy.wait(7000)
          search.searchbarButton.type('content')
          cy.wait(2000)
          search.hashsearch
          cy.wait(2000)
          search.hashtab
          cy.wait(2000)
          cy.get('.chakra-card__body > .chakra-text').should('contain', '#content')
  
      })



    it('search by sorting', () => {
              const search = new Search();
              cy.wait(7000)
              search.searchbarButton
              cy.wait(2000)
              cy.get('.trending-header > span').should('contain', 'TRENDING TODAY')
              cy.wait(2000)
              cy.get(':nth-child(2) > .search-body > .chakra-card__body > :nth-child(1) > .trending-post-description').should('contain', 'Exploring the Latest Tech Trends')
              cy.wait(2000)
              search.trend
              cy.wait(2000)

            //   search.sortButton
            //   cy.wait(2000)
            //   search.hotsort
            //   cy.wait(2000)
            //   cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring the Latest Tech Trends')
            //   cy.wait(2000)
            //   search.sortButton
            //   cy.wait(2000)
            //   search.newsort
            //   cy.wait(2000)
            //   cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-text').should('contain', 'Exploring the impact of AI on various industries and its potential for reshaping the future.')
              
            search.sortButton
              cy.wait(2000)
              search.topsort
              cy.wait(3000)
              search.timesort
              cy.wait(2000)

            //   search.pastyeartime
            //   cy.wait(2000)
            //   cy.get(':nth-child(1) > .chakra-card > .chakra-card__body > .chakra-heading').should('contain', 'Exploring the Latest Tech Trends')
            //   cy.wait(2000)

            // search.pastmonth
            // cy.wait(2000)
            // cy.get(':nth-child(1) > .chakra-card > .chakra-card__header > .css-k008qs > .css-1fp7af3 > .community-post-name').should('contain', 'testUser2')
            // cy.wait(2000)

            //search.past24hr

           // search.pasthour



          })
   
})