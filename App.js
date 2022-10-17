/* eslint-disable react/react-in-jsx-scope */

import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import TopNav from './src/Navigation/TopNav';
import LinearGradient from 'react-native-linear-gradient';
import StackNavigation from './src/Navigation/StackNavigation';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  return <StackNavigation />;
};

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   linearGradient: {
//     flex: 1,
//   },
//   img: {width: 179, height: 68, marginTop: 20},
//   view: {
//     flex: 1,
//     width: '100%',
//   },
// });

export default App;
