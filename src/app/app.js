import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='fullHeight'>
            <section className='fullHeight'>
                {Routes}
            </section>
        </div>);
    }
}

const mapState = (state) => ({
    isLoading: state
});

const mapDispatch = (dispatch, props) => ({});
export default connect(mapState, mapDispatch)(App);