//import FollowPage from '../support/page-objects/follow';
import BlockPage from '../support/page-objects/block';

module.exports.blockedUserProfile = () => {
        //hovering over profile? Q
        BlockPage.settingsPage.click()
        BlockPage.safetyAndPrivacy.should('be.visible').click()
        BlockPage.blocknewUser.should('be.visible')
        .invoke('text')
        .then((text) => {
            expect(text.toLowerCase()).to.include('username')
        })
        BlockPage.addBlockButton.should('be.visble').click()
        //expect the user to get added to blocked accounts
        BlockPage.blocknewUser.should('be.visible')
}
