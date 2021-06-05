// Test login with credentials

import consts from "../../util/consts";

context('Login', () => {
    beforeEach(() => {
        // Change view port to iPhone X
        cy.viewport(375, 812);
        cy.visit(consts.homeUrl);
    });

    it('Domain home path', () => {
        cy.url().should('eq', consts.homeUrl + "/home/games/all");
    });

    it('Sign in', () => {
        // Cover Error
        // cy.get(".button-up.button-up__signup").click();

        // Click ok on modal button
        cy.get(".modal__content__buttons__button.modal__content__buttons__button__ok.change-color-button").click();
        // Click sign in
        cy.get(".button-up.button-up__signup").click();

        cy.url().should('eq', consts.homeUrl + "/home/account/sign-in");

        cy.get("[name=\"login\"]").type(consts.user);
        cy.get("[name=\"password\"]").type(consts.pass);

        cy.get(".form__row button.form-button.form-button__submit.change-color-button").click();

        cy.url().should('eq', consts.homeUrl + "/home/games/all");
        cy.get(".button-up.logged__pc-user-info__nick.header-panel__logged__text.change-color").contains(consts.user);
    });
});