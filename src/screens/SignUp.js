/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
// SignUp.js
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {signUp} from '../services/Auth';
import Buttons from '../components/Buttons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const signUpValidationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid Mobile Number')
      .required('Mobile Number is required'),
    password: yup
      .string()
      .min(4, ({min}) => `Pin must be at least ${min} characters`)
      .max(4, ({max}) => `Pin must be at least ${max} characters`)
      .required('Pin is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Pin do not match')
      .required('Confirm Pin is required'),
  });
  return (
    <>
      <LinearGradient
        colors={['#20BBFF', '#0E85FF']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                mobile: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={() => navigation.navigate('SIGN IN')}>
              {({handleSubmit, isValid}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="mobile"
                    placeholder=" Enter Mobile Number"
                    placeholderTextColor="grey"
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="password"
                    placeholder="  Enter 4 digit Mpin"
                    placeholderTextColor="grey"
                    secureTextEntry
                    style={styles.field}
                  />
                  <Field
                    component={CustomInput}
                    name="confirmPassword"
                    placeholder="  Re-Enter 4 digit Mpin"
                    placeholderTextColor="grey"
                    secureTextEntry
                    style={styles.field}
                  />
                  <View style={styles.button}>
                    <Buttons onPress={handleSubmit} name="SIGN IN" />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    color: 'black',
    fontSize: 16,
    height: 54,
    width: 300,
    backgroundColor: '#FFFFFF',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    marginTop: 70,
  },
  button: {
    marginTop: 40,
    marginRight: 170,
  },
  linearGradient: {
    flex: 1,
  },
});
export default SignUp;
