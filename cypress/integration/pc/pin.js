// Test login with credentials

import LoginService from "../../util/service/LoginService";
import consts from "../../util/consts";

context('Pin', () => {
    beforeEach(() => {
        LoginService.login();
    });

    it('Get 500 COP', () => {
        // Click accounts
        cy.get('div.button-up.header-panel-hide-in-mobile > .subacc-panel').click();
        cy.url().should('eq', consts.homeUrl + "/home/account/finances");


        // Set COP account, if not active
        cy.get(".rt-tr-group .rt-td").contains(/COP$/).then($elem => {
            if ($elem) {
                const activeButton = $elem.parent().find(".rt-td .gh-wrapper.change-color-button");

                if (activeButton.length) {
                    cy.get(".rt-tr-group .rt-td").contains(/COP$/).parent().find(".rt-td .gh-wrapper.change-color-button").click();
                }
            }
        });

        // Active state
        expect(cy.get(".rt-tr-group .rt-td").contains(/COP$/).parent().find(".rt-td .subacc-panel__active-button"));

        // Pin withdraw section
        cy.get('[href="/home/account/withdraw"]').click();

        // Other sum
        cy.get('.button-grid > :nth-child(6)').click();
        cy.get('.form-input').type("1000");

        cy.get('.modal__content__buttons > :nth-child(1)').click();

        expect(cy.get('#pinInArea'));
    });
});