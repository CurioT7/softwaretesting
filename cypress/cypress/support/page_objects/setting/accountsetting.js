export class AccountSettingsPage{
    ///////////// Account Settings /////////////////////////
    get setButton(){ return cy.get('li.sub-right-navbar > .right-item-option').click()}
    get settButton(){return cy.get('.drop-down-description').click()}
    get accountSet(){return cy.get('.active').click()}
    get signEmail(){return cy.get('[data-testid="email"]')}
    get conButton(){return cy.get('.pb-4 > .w-100').click()}
    get con1Button(){return cy.get('.pb-4 > .w-100').click()}
    get signusername(){return cy.get('[data-testid="username"]')}
    get signpass(){return cy.get('[data-testid="password"]')}
    get signButton(){return cy.get('.sign-up > button').click()}
    get skipButton(){return cy.get('.skip-button').click()}
    get intrest(){return cy.get('.pt-3 > :nth-child(3) > :nth-child(1)').click()}
    get account(){ return cy.get('#account-link').click()}
    get changeEmailAddressButton(){return cy.get('.css-s6zbcz > .account-button > .css-0 > .chakra-button').click()}
    get newEmailField(){ return cy.get('.css-dn3ifq')}
    get currentPasswordField(){return cy.get('.css-1uliq0')}
    get saveEmailButton(){ return cy.get('.chakra-modal__footer > .chakra-button').click({force: true})}
    get gotitButton(){return cy.get('.chakra-modal__close-btn').click()}
    get discription(){return cy.get('.css-pfs9vx > .col-10 > .headings-description').should('have.text', 'Maram.mohamed01@eng-st.cu.edu.eg');}
    get changePasswordButton(){return cy.get('.css-6m33xd > :nth-child(3) > .chakra-button').click()}
    get oldPasswordField(){return cy.get('[placeholder="OLD PASSWORD"]')}
    get newPasswordField(){return cy.get('[placeholder="NEW PASSWORD"]')}
    get confirmPasswordField(){return cy.get('[placeholder="CONFRIM NEW PASSWORD"]')}
    get savePasswordButton(){return cy.get('.css-j7qwjs > .chakra-button').click()}
    get xPasswordButton(){return cy.get('.chakra-modal__close-btn').click()}
    get genderSelection(){return cy.get('.css-1s33dmy > :nth-child(2) > .chakra-select__wrapper > .chakra-select').select('WOMAN')}
    get locationCustomization(){return cy.get('.css-cyzh8z > .chakra-select__wrapper > .chakra-select').select('Egypt')}
    get deleteAccountButton(){return cy.get('.mb-5 > .css-0 > .chakra-button').click()}
    get deleteReason(){return cy.get('.chakra-textarea')}
    get deleteUsername(){return cy.get('.css-1w5rbni')}
    get deletePass(){return cy.get('.css-1uliq0')}
    get deleteCheck(){return cy.get('.chakra-checkbox__control').click()}
    get deleteCancelButton(){return cy.get('.css-17e40sj').click()}
    get deleteRemoveButton(){return cy.get('.css-41aesz').click()}
    get connectToGoogle(){return cy.get('.css-vf76ml > :nth-child(3) > .chakra-button').click()}
    get googlePass(){return cy.get('.chakra-input')}
    get googleContinueButton(){return cy.get('.css-j7qwjs > .chakra-button').click()}
    get googleClose(){return cy.get('.chakra-modal__close-btn').click()}

    //////////Profile Settings ///////////////
    get profile(){return cy.get('[href="/settings/profile"]').click()}
    get displayNamefield (){return cy.get('#display-name-input')}
    get view(){return cy.get('.right-item-option > .profileImg').click()}
    get user(){return cy.get('.drop-down-profile-description').click()}
    get about(){return cy.get('#about-textarea')}
    get addSocialLinksButton (){return cy.get('.social-link-container > .chakra-button').click()}
    get chooseTypeInsta(){ return cy.get('.container-social > :nth-child(3)').click()}
    get instaText(){ return cy.get('.container-social > :nth-child(3)').click()}
    get chooseTypeface(){ return cy.get('.container-social > :nth-child(7)').click()}
    get chooseTypespot(){ return cy.get('.container-social > :nth-child(10)').click()}
    get chooseTypetik(){ return cy.get('.container-social > :nth-child(5)').click()}
    get chooseTypeyou(){ return cy.get('.container-social > :nth-child(8)').click()}
    get chooseTypetwit(){ return cy.get('.container-social > :nth-child(4)').click()}
    get displyTextField(){return cy.get('.display_text')}
    get displyUrlField(){return cy.get('.url_website')}
    get saveTheLink(){return cy.get('.justify-end > .chakra-button').click()}
    get backButton(){ return cy.get('.arrow-button').click()}
    get socialCloseButton(){ return cy.get('.chakra-modal__close-btn').click()}
    
    get uploadAvatarImageButton(){return cy.get('[data-testid="profile-image"] > label > .image-text > :nth-child(1)').click()}
    get uploadBannerImageButton(){ return cy.get('.banner-upload').click()}
    get nsfwSwitch(){return cy.get(':nth-child(8) > .chakra-switch > .chakra-switch__track').click({force:true})}
    get allowPeopleToFollowYouSwitch(){return cy.get(':nth-child(10) > .chakra-switch > .chakra-switch__track').click({force:true})}
    get contentVisibilitySwitch(){return cy.get(':nth-child(11) > .chakra-switch > .chakra-switch__track').click({force:true})}
    get activeInCommunitiesVisibilitySwitch(){return cy.get(':nth-child(12) > .chakra-switch > .chakra-switch__track').click({force:true})}
    get clearHistoryButton(){return cy.get('.clear-history-button > .chakra-button').click()}
    
    //////////////////////////safety settings/////////////////////
    get safetyAndPrivacy(){return cy.get('#safety-privacy-link').click()}
    get blockNewUserField(){return cy.get('#blockedUserInput')}
    get blockNewUserButton(){return cy.get('[data-testid="add-block-user"]').click()}
    get removeBlockedNewUserButton(){return cy.get(':nth-child(5) > .chakra-button').click()}
    get addNewCommunitiesYouWantToMuteField(){return cy.get('#mutedCommunityInput')}
    get addNewCommunitiesYouWantToMuteButton(){return cy.get('[data-testid="add-mute-community"]').click()}
    get removeNewCommunitiesYouWantToMuteButton(){return cy.get('[data-testid="remove-mute-community"]').click()}
    
    //////////////////////////Feed Settings////////////////////////
    get feed(){return cy.get('#feed-settings-link').click()}
    get showMatureContentSwitch(){return cy.get(':nth-child(3) > .css-12ccz81 > .chakra-switch > .chakra-switch__track').click()}
    get autoplayMediaSwitch(){return cy.get(':nth-child(4) > .col > .chakra-switch > .chakra-switch__track').click()}
    get communityThemesSwitch(){return cy.get(':nth-child(5) > .css-12ccz81 > .chakra-switch > .chakra-switch__track').click()}
    get communityContentSortCheck(){return cy.get(':nth-child(6) > .css-12ccz81 > .chakra-select__wrapper > .chakra-select').select('New')}
    get globalContentViewCheck(){return cy.get(':nth-child(7) > .css-12ccz81 > .chakra-select__wrapper > .chakra-select').select('Classic')}
    get openPostsInNewTabSwitch(){return cy.get(':nth-child(8) > .css-12ccz81 > .chakra-switch > .chakra-switch__track').click()}
    
    //////////////////////notification settings/////////////////
    get notification(){return cy.get('#notifications-link').click()}
    get mentionsofUsernameSwitch(){return cy.get(':nth-child(2) > .chakra-switch > .chakra-switch__track').click()}
    get commentsOnYourPostsSwitch(){return cy.get('.activity-section > :nth-child(3) > .chakra-switch > .chakra-switch__track').click()}
    get upvotesOnYourPostsSwitch(){return cy.get(':nth-child(4) > .chakra-switch > .chakra-switch__track').click()}
    get upvotesOnYourCommentsSwitch(){return cy.get(':nth-child(5) > .chakra-switch > .chakra-switch__track').click()}
    get repliesToYourCommentsSwitch(){return cy.get(':nth-child(6) > .chakra-switch > .chakra-switch__track').click()}
    get newFollowersSwitch(){return cy.get(':nth-child(7) > .chakra-switch > .chakra-switch__track').click() }
    get postsYouFollowSwitch(){return cy.get(':nth-child(8) > .chakra-switch > .chakra-switch__track').click()}

    ///////////////////////email settings///////////////////////
    get emails(){return cy.get('#emails-link').click()}
    get newFollowersEmailSwitch(){return cy.get(':nth-child(5) > .chakra-switch > .chakra-switch__track').click()}
    get chatRequestSwitch(){return cy.get('.user-settings-header > :nth-child(3) > .chakra-switch > .chakra-switch__track').click()}
    get unsubscripeFromAllEmailsSwitch(){ return cy.get(':nth-child(7) > .chakra-switch > .chakra-switch__track').click()}
   
}

export default new AccountSettingsPage();