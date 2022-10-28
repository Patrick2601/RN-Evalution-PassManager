import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PassManager from '../screens/PassManager';
import SiteDetails from '../screens/SiteDetails';
import AddSite from '../screens/AddSite';
import EditSite from '../screens/EditSite'
const Stack = createNativeStackNavigator();

const SiteManager = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PASS MANAGER"
        component={PassManager}
        options={{headerShown: false}}
      />
      <Stack.Screen
          name="Site Details"
          component={SiteDetails}
          options={() => ({
            headerShown: false,
          })}
        />
          <Stack.Screen
          name="Add Site"
          component={AddSite}
          options={() => ({
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitleStyle: {fontSize: 20},
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitleAlign: 'left',
            headerTintColor: 'white',
          })}
        />
        <Stack.Screen
          name="Edit Site"
          component={EditSite}
          options={() => ({
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitleStyle: {fontSize: 20},
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTitleAlign: 'left',
            headerTintColor: 'white',
          })}
        />
    </Stack.Navigator>
  );
};

export default SiteManager;

const styles = StyleSheet.create({});
