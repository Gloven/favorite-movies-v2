import '@babel/polyfill';
import 'isomorphic-fetch';

import React            from 'react';
import ReactDOM         from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider }     from 'react-redux';
import locales          from '../lang';
import configureStore   from './store/configureStore.js';
import i18n             from './i18n';
import App              from  './containers/App';

const store = configureStore();

function render(Component) {
    const locale    = localStorage.getItem('language') || 'en';
    const i18nTools = new i18n.Tools({ locale, localeData: locales[locale] });

    ReactDOM.render(
        <Provider store={store}>
            <i18n.Provider i18n={i18nTools}>
                <AppContainer>
                    <Component />
                </AppContainer>
            </i18n.Provider>
        </Provider>,
        document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept(App, () => render());
}

