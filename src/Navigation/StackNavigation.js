/* eslint-disable react/react-in-jsx-scope */
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PassManager from '../screens/PassManager';
import AuthScreen from '../screens/AuthScreen';
import AddSite from '../screens/AddSite';
import EditSite from '../screens/EditSite';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth Screen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth Screen" component={AuthScreen} />
        <Stack.Screen
          name="PASS MANAGER"
          component={PassManager}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Add Site"
          component={AddSite}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitleStyle: {fontSize: 20},
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitleAlign: 'left',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Edit Site"
          component={EditSite}
          options={({navigation}) =>({
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitle: 'Site Details',
            headerTitleStyle: {fontSize: 20},
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitleAlign: 'left',
            headerTintColor: 'white',
            headerRight: () => (
              <Button
                onPress={() => navigation.push('Edit Site')}
                title="Edit"
                color="#ffffff"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
