import React, {Component} from 'react';
import {connect} from 'react-redux';

import login from './data/actions';

class Login extends Component {
	constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
    	
    }

    render() {
		return (
			<div>Login</div>
		)
	}
}

const mapState = (state) => ({
    isLoading: state.loginReducer.isLoading,
    loginData: state.loginReducer.data,
    loginError: state.loginReducer.error
});

const mapDispatch = (dispatch, props) => ({
    login: (userName, password) => dispatch(login(userName, password))
});

export default connect(mapState, mapDispatch)(Login);