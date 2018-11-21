import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configuteStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const appRoot = document.getElementById("app");
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, appRoot);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, appRoot);
});
