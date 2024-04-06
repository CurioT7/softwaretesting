import { LoginPagePo } from "../../support/page_objects/login/LoginPagePo"
//import { loginPage } from "./login.const"
// const data = require('../../fixtures/data.json')

describe('login page', () => {
   
    // beforeEach('load fixture', () => {
    //     cy.visit('http://localhost:5173/login#')
    //     cy.fixture("data").then((data) => {
    //         globalThis.data = data
    //     })
    // })
    
    
    it('login with google', () => {
        const loginpagepo = new LoginPagePo();
        cy.visit('http://localhost:5173/login#')
        loginpagepo.googleLoginButton
        // cy.url().then(url => {
        //             expect(url).to.eq('https://accounts.google.com/v3/signin/identifier?opparams=%253Fenable_granular_consent%253Dtrue&dsh=S-754955891%3A1711994389482069&client_id=549893774349-guomvhcf9bm2krskfacaii5ccc3ksdh3.apps.googleusercontent.com&ddm=0&gsiwebsdk=3&include_granted_scopes=true&o2v=2&prompt=select_account&redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A5173%3Fid%3Dauth146838&response_type=token&scope=openid+profile+email&service=lso&theme=mn&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOD0DZYtK2qY1NvFhIGYqTKvWl5Sf4LS1rQ47YbeGTozebnbNr5WS-e6Z0rQIj0LOcdaLGIfokV-ZfOv-WW-OnGff9XBNgx8JJgTZyFr6Xwozn_XAUyDZMnMnOvn7DenyVkkspGeCTyidWOJJu3rC6AfzNSZ61ha201vdETsS9_8OwRpQxNn84kcMSSXwTwsUvsuvQoA6n0_KStQaPKl6fiEn5Z5XKKJx18nFx3_ZgGlCUzRVsL0nCg-_223prqXk88uJRWOwlpAX6EYys6Fv4B6LRBrcGWlN_6kQBJkRZECpFJrNlvi1v3yptERbymnsTZTLerL3oRNyOKd-MpT5qoeWle5_3hv48-jynN8q8dHawQYpY0xmkAOlIOm0H_ydCB5izEhgA9GRT-SFH1OpqUJN5COeQbfpSk819wDaiXXL3-_kKZZrJrAsRnLSCbHwiCIoPBNlImtqQRPnfvtqtEQHdRqQ%26flowName%3DGeneralOAuthFlow%26as%3DS-754955891%253A1711994389482069%26client_id%3D549893774349-guomvhcf9bm2krskfacaii5ccc3ksdh3.apps.googleusercontent.com%26theme%3Dmn%23&app_domain=http%3A%2F%2Flocalhost%3A5173&rart=ANgoxcfZExuXesxvaB2-DzWBpYm_b8KHB5xwO9dkR19PYM_-ywoRyKBMos7sL7Eu3Q5C7EveYiNLL81QwbKFy5m26dLBxagSPx0o3fMKJECVUawxtrBAzYg');
        //                 });
        // cy.get(loginPage.loginselector)
        //     LoginPagePo.loginButton.should('be.visible').click()
        //     LoginPagePo.googleLoginButton.should('be.visible').click()
        //     LoginPagePo.xButton.should('be.visible').click()
        //     cy.url().should('include', '/Home')
        //     //LoginPagePo.logoutbutton.should('be.visible').click()
    })


    it('login with username and  valid password', () => {
        const loginpagepo = new LoginPagePo();
        cy.visit('http://localhost:5173/login#')
        loginpagepo.inputFieldLoginUsername.type('m3')
        cy.wait(2000)
        loginpagepo.inputFieldLoginPassword.type("12345678A")
        cy.wait(2000)
        loginpagepo.loginButton
        cy.wait(3000)
        loginpagepo.inputFieldLoginUsername.clear().type('maram123')
        cy.wait(2000)
        loginpagepo.inputFieldLoginPassword.clear().type("12345678A")
        loginpagepo.loginButton

            //  cy.url().then(url => {
            //      expect(url).to.eq('http://localhost:5173/');
            //   });
       
    })

    it('forgot password  screen', () => {
        const loginpagepo = new LoginPagePo();
        cy.visit('http://localhost:5173/login#')
        cy.wait(2000)
        loginpagepo.forgotButtonPassword
        loginpagepo.inputFieldPassUsername.should('be.visible').type("du") 
        cy.wait(2000)
        loginpagepo.inputFieldPassEmail.should('be.visible').type("dubdgamil.com")
        loginpagepo.resetPassButton
        loginpagepo.inputFieldPassUsername.clear().should('be.visible').type("dusg123") 
        cy.wait(2000)
        loginpagepo.inputFieldPassEmail.clear().should('be.visible').type("dubd@gamil.com")
        cy.wait(2000)
        loginpagepo.resetPassButton
        // cy.url().then(url => {
        //          expect(url).to.eq('http://localhost:5173/');
        //          });
        
    
    })

    it ('forgot username screen', () => {
        const loginpagepo = new LoginPagePo(); 
        cy.visit("http://localhost:5173/login#")
        loginpagepo.forgotButtonUsername
        loginpagepo.inputFieldUserEmail.clear().should('be.visible').type("dummydummy.com")
         cy.wait(1000); // Wait for the error message to appear (adjust the wait time as needed)
         loginpagepo.emailmeButton
        loginpagepo.inputFieldUserEmail.clear().should('be.visible').type("dummydummy@gmail.com")
        loginpagepo.emailmeButton
        // cy.url().then(url => {
        //  expect(url).to.eq('http://localhost:5173/');
        //  });
     })
    
   

   
})
