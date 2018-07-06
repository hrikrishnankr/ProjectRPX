import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import APP from './app';
// import './styles/index.css';

export default function Root({ store, history }) {
    return (
        <Provider store={store}>
            <div style={{ height: '100%' }}>
                <ConnectedRouter history={history}>
                    <BrowserRouter>
                        <Route path="/" component={APP} />
                    </BrowserRouter>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};