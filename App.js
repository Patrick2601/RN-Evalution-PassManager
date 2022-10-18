/* eslint-disable react/react-in-jsx-scope */

import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import TopNav from './src/Navigation/TopNav';
import LinearGradient from 'react-native-linear-gradient';
import StackNavigation from './src/Navigation/StackNavigation';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  return <StackNavigation />;
};


export default App;
