
import { login } from '../../../utils/login'
import {BlockPage} from '../../../support/page_objects/block/block'



describe('blockuser', () => {
    
    beforeEach('login and open home page', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        login(data.user.username, data.user.password)
        cy.wait(3000)
    })

    it('block user from profile', () => {
        BlockPage.blockedAccounts.should('be.visible').click()
        cy.wait(1000)
        BlockPage.asserblock.should('be.visible').click({force:true})
        BlockPage.blockMessage.should('User blocked')
    })

    it('remove block from user profile', () => {
        BlockPage.blockedAccounts.should('be.visible').click()
        cy.wait(1000)
        BlockPage.asserunblock.should('be.visible').click({force:false})
        BlockPage.blockMessage.should('User unblocked')
    })


    it('blocked user should be in blocked list', () => {
        BlockPage.settingsPage.click()
        BlockPage.privacyAndSafety.should('be.visible').click()
        BlockPage.blockedAccounts.should('be.visible')
    })

    it('block user via username', () => {
        BlockPage.settingsPage.click()
        BlockPage.privacyAndSafety.should('be.visible').click()
        BlockPage.blocknewUser.should('be.visible').type('username')
        BlockPage.addBlockButton.should('be.visible').click()
    })

    it('remove users from block list in settings', () => {
        BlockPage.settingsPage.click()
        BlockPage.privacyAndSafety.should('be.visible').click()
        BlockPage.blockedAccounts.should('be.visible').click()
        BlockPage.removeBlockButton.each(($el) => {
            cy.wrap($el).click()
        })
        BlockPage.blockMessage.should('User unblocked')
    })
})