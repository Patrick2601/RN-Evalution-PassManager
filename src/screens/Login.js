/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {signIn} from '../services/Auth';
import Buttons from '../components/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Context/AuthContext';

const Login = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          source={require('../../src/images/Robosoftimg.png')}
          style={{marginBottom: 50}}
        />
      </View>
      <View style={{marginBottom: 40}}>
        <Text style={{fontSize: 30, color: 'black'}}>Welcome to Robosoft</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={{color: 'black'}}>Login Screen</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={async values => {
            console.log(values);
            const response = await signIn({
              email: values.email,
              password: values.password,
            });
            console.log(response);
            if (response.user) {
              login(response.token);
              // navigation.navigate('LoggedIn');
            } else {
              // eslint-disable-next-line no-alert
              alert('Enter correct username and password');
            }

            // try {
            //   const jsonValue = await AsyncStorage.getItem(values.email);
            //   console.log(jsonValue.email);
            //   return jsonValue != null ? JSON.parse(jsonValue) : null;
            // } catch (e) {
            //   // error reading value
            // }

            // //navigation.navigate('LoggedIn')
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                name="email"
                placeholder="Email Address"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                name="password"
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Buttons onPress={handleSubmit} name="LOGIN" />
            </>
          )}
        </Formik>
      </View>
      <View style={{marginTop: 20}}>
        <Buttons onPress={() => navigation.navigate('SignUp')} name="SIGN UP" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    // backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 30,
  },
  textInput: {
    height: 40,
    width: '90%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    color: 'black',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export default Login;
