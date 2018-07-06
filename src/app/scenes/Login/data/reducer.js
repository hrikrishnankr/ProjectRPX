import {
    handle
} from 'redux-pack';

import {
    LOGIN
} from './constants'

const initialState = {
    isLoading: false,
    error: null,
    data: {}
};

const loginReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case LOGIN:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isLoading: true,
                    error: null,
                    data: {}
                }),
                finish: prevState => ({ ...prevState,
                    isLoading: false
                }),
                failure: prevState => ({ ...prevState,
                    error: payload
                }),
                success: prevState => ({ ...prevState,
                    data: payload
                }),
            });
        default:
            return state;
    }
}

export default loginReducer;