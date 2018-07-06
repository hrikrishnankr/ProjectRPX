import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
    compose,
    createStore,
    applyMiddleware
} from 'redux'
import {
    middleware
} from 'redux-pack'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './app/reducers';
export const history = createHistory();

const store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            thunk,
            middleware,
            logger
        ),
    ),
)

export default store