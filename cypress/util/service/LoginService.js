import consts from "../consts";


class  LoginService {

    login() {
        cy.visit(consts.homeUrl + "/home/account/sign-in");

        cy.get(".modal__content__buttons__button.modal__content__buttons__button__ok.change-color-button").click();
        cy.get(".button-up.button-up__signup").click();

        cy.get("[name=\"login\"]").type(consts.user);
        cy.get("[name=\"password\"]").type(consts.pass);

        cy.get(".form__row button.form-button.form-button__submit.change-color-button").click({timeout: consts.waitRequestMs});
    }
}

const loginService = new LoginService();

export default loginService;