/* eslint-disable react/react-in-jsx-scope */
import {Text, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from '../screens/AuthScreen';

import SiteManager from './SiteManager';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const state = useSelector(state => state.user.userState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth Screen"
        screenOptions={{headerShown: false}}>
        {!state ? (
          <Stack.Screen name="Auth Screen" component={AuthScreen} />
        ) : (
          <Stack.Screen
            name="Site Manager"
            component={SiteManager}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
