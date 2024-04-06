

describe('back to top', ()=>{
    it('top',()=>{
        cy.visit('http://localhost:5173/')
        cy.scrollTo(0, 1000)
        cy.wait(2000)
        cy.get('.back-to-top > button').click()
    })
})
