export class Post{
   
    
    // get openButton() {
    //     return cy.get('#tabs-\\:r4h\\:--tabpanel-0 > :nth-child(2) > :nth-child(1) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control').click();
        
    // }
    
    
    get viewButton() {
        return cy.get('.right-item-option > .profileImg').click({force:true});
    }
    get profile(){return cy.get('.drop-down-profile-description').click({force:true})}
    get openmenu(){
        return cy.get('[id^="tabs-"][id$="-tabpanel-0"] > :nth-child(21) > :nth-child(1) > .chakra-card > .chakra-card__header > .css-k008qs > :nth-child(2) > .post-dropdown-control')
            .click();
    }
    get delete(){return cy.get('.drop-down-list > :nth-child(4) > div').click()}
    
}//cy.get('.drop-down-list > :nth-child(4) > div')
export default new Post();