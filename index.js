/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);

const AppContainer = () => 
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent(appName, () => AppContainer);
