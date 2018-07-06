import { LOGIN } from './constants'

const login = (username, password) => {
    let req = {
        'data': {
            'email': username,
            'password': password
        }
    }
    
    return {
        message : 'Success'
    };
};

export default login;