/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import simpleApiScreen from './src/screens/simpleApiScreen';

AppRegistry.registerComponent(appName, () => simpleApiScreen);
