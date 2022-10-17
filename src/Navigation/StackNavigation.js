/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RegisterLogin from '../screens/AuthScreen';
import PassManager from '../screens/PassManager';
import TopNav from './TopNav';
import AuthScreen from '../screens/AuthScreen';
import SignIn1 from '../screens/SignIn1';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TopNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth Screen" component={AuthScreen} />
        <Stack.Screen name="PASS MANAGER" component={PassManager} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
