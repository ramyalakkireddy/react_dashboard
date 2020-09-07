import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
        <div>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/signin" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>,
document.getElementById('root'));
