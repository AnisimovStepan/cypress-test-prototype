import consts from "../consts";


class  LoginService {

    login() {
        cy.visit(consts.homeUrl)

        // cy.get()
    }
}

const loginService = new LoginService();

export default loginService;