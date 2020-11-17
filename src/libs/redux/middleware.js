import {applyMiddleware, compose} from 'redux';

const createMiddleware = (clientMiddleware) => {
  const middleware = applyMiddleware(clientMiddleware);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return composeEnhancers(middleware);
};

export default createMiddleware;
