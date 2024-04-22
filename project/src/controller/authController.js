import BaseController from './baseController';

class AuthController extends BaseController {
    constructor() {
        super();
    }

    login(credentials) {
        return credentials;
    }

    register(credentials) {
        return credentials;
    }

    getAllUsers() {
        try {
            const response = super.query();
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    getUserById(id) {
        try {
            const response = super.getById(id);
            return response;
        } catch(e) {
            console.log(e);
        }
    }
}

export default AuthController;
