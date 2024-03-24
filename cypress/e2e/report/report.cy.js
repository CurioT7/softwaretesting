import {data} from '../../fixtures/data.json'
import {ReportProfile} from '../../support/page_objects/reporting'

describe('Follow test site', () => {
    
    beforeEach('login and open home page', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        login(data.user.username, data.user.password)
        cy.wait(3000)
    })

    it('report user from profile',()=>{
        cy.visit()
        ReportProfile.reportAccount.should('be.visible').click()
        cy.wait(1000)
        ReportProfile.moreOptions.should('be.visible').click()
        ReportProfile.reportUserButton.click()
        
    })


})    