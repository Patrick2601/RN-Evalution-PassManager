import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ImageBackground,
  Pressable,
} from 'react-native';

import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {update} from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Update = ({navigation}) => {
  const signUpValidationSchema = yup.object().shape({
    age: yup
      .string()
      .matches(/\d\d/, 'Enter a valid age')
      .required('Age is required')
      .max(2, ({max}) => `Password must be at least ${max} characters`),
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={{fontSize: 20, color: 'black'}}> Update Screen</Text>

          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              age: '',
            }}
            onSubmit={async values => {
              console.log('clicked');
              try {
                const data = await AsyncStorage.getItem('userToken');
                //const output = JSON.parse(data)
                console.log(data);
                const response = await update(
                  {
                    age: values.age,
                  },
                  data,
                );

                let account = response.data;

                if (response.data) {
                  alert('succefully Updated');
                } else {
                  alert('Update Failed');
                }
              } catch (err) {
                console.log(err);
              }
            }}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={CustomInput}
                  name="age"
                  placeholder="Age"
                  keyboardType="numeric"
                  style={styles.field}
                />

                <Pressable style={styles.loginButton}>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: 'center',
                      color: 'white',
                      marginTop: 8,
                    }}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    Update
                  </Text>
                </Pressable>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',

    padding: 10,
    elevation: 10,
  },
  field: {
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    width: 150,
    height: 40,
    textAlign: 'center',
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'orange',
    marginVertical: 10,
    height: 35,
    width: 80,
    borderRadius: 5,
  },
});
export default Update;
