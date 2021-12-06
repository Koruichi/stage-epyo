
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import searchMiddleware from './middlewares/userMiddleware';
import dataMiddleware from './middlewares/dataMiddleware'
import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(
    // on applique tous les middleware avec un seul applyMiddleware
    // afin que les actions repartent du début de la chaine
    applyMiddleware(searchMiddleware, dataMiddleware),
  ),
  // eslint-disable-next-line no-underscore-dangle
);

export default store;