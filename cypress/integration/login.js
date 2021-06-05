// Test login with credentials in const.json

import LoginService from "../util/service/LoginService";
import consts from "../util/consts";

context('Login', () => {


    it('Domain path', () => {
        LoginService.login();

        cy.url().should('eq', consts.homeUrl + "/home/games/all");
    });
});