import{AccountSettingsPage} from '../../support/page_objects/setting/accountsetting'

describe('feedSettings', () => {
    
    it('showMatureContent', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
       cy.visit('http://localhost:5173/settings/feeding')
       cy.wait(2000)
       accountSettingsPage.showMatureContentSwitch
       cy.wait(2000)
       accountSettingsPage.showMatureContentSwitch
    })
    it('autoplayMedia', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/feeding')
        cy.wait(2000)
        accountSettingsPage.autoplayMediaSwitch
        cy.wait(2000)
        accountSettingsPage.autoplayMediaSwitch
     })
     
    it('communityThemes', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/feeding')
        cy.wait(2000)
       accountSettingsPage. communityThemesSwitch
       cy.wait(2000)
       accountSettingsPage. communityThemesSwitch
     })
     it('communityContentSort', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/feeding')
        cy.wait(3000)
       accountSettingsPage.communityContentSortCheck
     })
     it(' globalContentView', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
            cy.visit('http://localhost:5173/settings/feeding')
            cy.wait(3000)
        accountSettingsPage. globalContentViewCheck
     })
    it('openPostsInNewTabSwitch', () => {
        const accountSettingsPage = new AccountSettingsPage(); 
        cy.visit('http://localhost:5173/settings/feeding')
        cy.wait(2000)
        accountSettingsPage.openPostsInNewTabSwitch
        cy.wait(2000)
        accountSettingsPage.openPostsInNewTabSwitch
    })
    
})