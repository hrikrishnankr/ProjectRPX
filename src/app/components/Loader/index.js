import React, { Component } from 'react';
import './index.scss';

class Loader extends Component {
	constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {
    	console.log(this.props.type);
    }

    render() {
		return (
			<div className='app-loader'>
				<div className="animated-background">
					<div className="background-masker header-top"></div>
		            <div className="background-masker header-left"></div>
		            <div className="background-masker header-right"></div>
		            <div className="background-masker header-bottom"></div>
		            <div className="background-masker subheader-left"></div>
		            <div className="background-masker subheader-right"></div>
		            <div className="background-masker subheader-bottom"></div>
		            <div className="background-masker content-top"></div>
		            <div className="background-masker content-first-end"></div>
		            <div className="background-masker content-second-line"></div>
		            <div className="background-masker content-second-end"></div>
		            <div className="background-masker content-third-line"></div>
		            <div className="background-masker content-third-end"></div>
				</div>
			</div>
		)
	}
}

export default Loader;