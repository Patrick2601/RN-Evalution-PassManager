/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Buttons from '../components/Buttons';
import {useRoute} from '@react-navigation/native';
import {getLoggedInUserVaiToken} from '../services/Auth';
import {AuthContext} from '../Context/AuthContext';

function LoggedIn({navigation}) {
  const {logout} = useContext(AuthContext);

  const [userData, setUserData] = useState(null);
  const getAsyncData = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      return token;
    } catch (error) {
      alert('display failed');
    }
  };

  useEffect(() => {
    const loadTokens = async () => {
      const tokenValue = await getAsyncData();
      // console.log(tokenValue);
      const response = await getLoggedInUserVaiToken(tokenValue);
      // console.log(response);
      if (response._id) {
        setUserData(response);
        console.log(response);
      }
    };
    loadTokens();
  }, []);

  return (
    <View style={styles.main}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.textInput}>Welcome </Text>
        <View style={styles.container}>
          <Text style={styles.text}>Name: {userData?.name}</Text>
          <Text style={styles.text}>Email: {userData?.email}</Text>
          <Text style={styles.text}>Age: {userData?.age}</Text>
        </View>
        <Buttons onPress={logout} name="Sign Out" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#94b6b9',
  },
  textInput: {
    fontSize: 30,
  },
  container: {
    borderRadius: 20,
    backgroundColor: '#f6ff89',
    marginVertical: 20,
    width: '90%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '000000',
    borderWidth: 5,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    marginVertical: 10,
  },
});
export default LoggedIn;
