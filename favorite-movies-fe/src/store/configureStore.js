import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import logger                           from 'redux-logger';
import reducers                         from '../reducers';

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(logger),
        applyMiddleware(thunkMiddleware)
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
