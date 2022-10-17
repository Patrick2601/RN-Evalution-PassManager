import React, {useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';
import {AuthContext} from '../Context/AuthContext';

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <TabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
};
export default AppNav;
