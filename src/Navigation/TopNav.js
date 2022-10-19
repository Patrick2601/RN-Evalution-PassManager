import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn1 from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tab = createMaterialTopTabNavigator();

const TopNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#00B4FF'},
        tabBarIndicatorStyle: {
          backgroundColor: 'orange',
          marginLeft: 50,
          width: 100,
          height: 4.5,
        },
        tabBarLabelStyle: {color: 'white', fontSize: 20, fontWeight: 'bold'},
      }}>
      <Tab.Screen name="SIGN IN" component={SignIn1} />
      <Tab.Screen name="SIGN UP" component={SignUp} />
    </Tab.Navigator>
  );
};

export default TopNav;
