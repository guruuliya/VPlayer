/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainApp from './src/index';
import {name as appName} from './app.json';
import Home from './src/home';

AppRegistry.registerComponent(appName, () => MainApp);
