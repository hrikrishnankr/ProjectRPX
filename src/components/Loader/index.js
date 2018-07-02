import React, { Component } from 'react';
import './index.css';

class Loader extends Component {
	constructor(props) {
        super(props);
    }

    render() {
		return (
			<div className='app-loader'></div>
		)
	}
}

export default Loader;