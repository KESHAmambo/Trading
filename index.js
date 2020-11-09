/**
 * @format
 */

import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './redux_store/store'
import { Provider } from 'react-redux'

const provideAppWithStore = (WrappedComponent, store) => {
  return () => {
    return (
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    )
  }
}

const ReduxApp = provideAppWithStore(App, store);

AppRegistry.registerComponent(appName, () => ReduxApp);
