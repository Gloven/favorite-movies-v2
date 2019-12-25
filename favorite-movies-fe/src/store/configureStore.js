import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import reducers                         from '../reducers';


const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);


export default function configureStore() {
    const store = createStoreWithMiddleware(reducers);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
