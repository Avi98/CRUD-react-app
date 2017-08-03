import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ConfigureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory} from 'react-router';
import {loadCourse} from './actions/courseAction';
import {loadAuthore} from './actions/authoreActions';
import routes from'./routes';
import 'bootstrap/dist/css/bootstrap.css';

const store = ConfigureStore(); 
store.dispatch(loadCourse());
store.dispatch(loadAuthore());

ReactDOM.render( 
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider> , document.getElementById('app'));
registerServiceWorker();
