import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {Buttons} from '../components/Buttons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';

const SignUp = ({navigation}) => {
  const signUpValidationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid Mobile Number')
      .required('Mobile Number is required'),
    pin: yup
      .string()
      .min(4, ({min}) => `Pin must be at least ${min} characters`)
      .max(4, ({max}) => `Pin must be at least ${max} characters`)
      .required('Pin is required'),
    confirmpin: yup
      .string()
      .oneOf([yup.ref('pin')], 'Pin do not match')
      .required('Confirm Pin is required'),
  });
  const [icon, setIcon] = useState('eye');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <>
      <LinearGradient
        colors={['#20BBFF', '#0E85FF']}
        style={styles.linearGradient}>
          <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.signupContainer}>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                mobile: '',
                pin: '',
                confirmpin: '',
              }}
              onSubmit={async (values, {resetForm}) => {
                try {
                  const jsonValue = JSON.stringify(values);
                  console.log(jsonValue);
                  await AsyncStorage.setItem(values.mobile, jsonValue);
                  resetForm({values: ''});
                  Toast.show('Congrats!!!Success\nSignin to access the vault');
                  navigation.navigate('SIGN IN');
                } catch (err) {
                  console.log(err);
                }
              }}>
              {({handleSubmit, values, isValid}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="mobile"
                    placeholder=" Enter Mobile Number"
                    placeholderTextColor="grey"
                    style={styles.field}
                    value={values.mobile}
                  />
                  <Field
                    component={CustomInput}
                    name="pin"
                    placeholder="  Enter 4 digit Mpin"
                    placeholderTextColor="grey"
                    secureTextEntry={secureTextEntry}
                    style={styles.field}
                    value={values.pin}
                  />
                  <Field
                    component={CustomInput}
                    name="confirmpin"
                    placeholder="  Re-Enter 4 digit Mpin"
                    placeholderTextColor="grey"
                    secureTextEntry={secureTextEntry}
                    style={styles.field}
                    value={values.confirmpin}
                  />
                  <View style={{left: 120, bottom: 68}}>
                    <Icon
                      name={icon}
                      size={25}
                      color="grey"
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                        secureTextEntry ? setIcon('eye-off') : setIcon('eye');
                      }}
                    />
                  </View>
                  <View style={styles.button}>
                    <Buttons onPress={handleSubmit} name="SIGN IN" />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </SafeAreaView>
        </ScrollView>
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
    borderColor: 'grey',
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
