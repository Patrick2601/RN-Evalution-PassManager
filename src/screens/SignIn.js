/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Buttons} from '../components/Buttons';
import LinearGradient from 'react-native-linear-gradient';

const SignIn1 = ({navigation}) => {
  const [number, setNumber] = useState();
  const [pin, setPin] = useState();

  const onSubmit = () => {
    setNumber(number);
    setPin(pin);
    console.log(number);
    console.log(pin);
    navigation.navigate('PASS MANAGER');
    // if (number === '1234567890' && pin === '0000') {
    // } else {
    //   console.log('Failed....');
    // }
  };

  const loginValidationSchema = yup.object().shape({
    mobile: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid Mobile Number')
      .max(10, ({max}) => `Password must be at least ${max} characters`)
      .required('Mobile Number is Required'),
    password: yup
      .string()
      .max(4, ({max}) => `Password must be at least ${max} characters`)
      .required('Password is required'),
  });
  return (
    <LinearGradient
      colors={['#20BBFF', '#0E85FF']}
      style={styles.linearGradient}>
      <View style={styles.main}>
        <View style={styles.loginContainer}>
          <Formik
            // validationSchema={loginValidationSchema}
            initialValues={{mobile: '', password: ''}}
            // onSubmit={alert('kkk')}
          >
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
                  name="mobile"
                  placeholder="   Mobile Number"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  onChangeText={num => setNumber(num)}
                  onBlur={handleBlur('mobile')}
                />
                {errors.mobile && touched.mobile && (
                  <Text style={styles.errorText}>{errors.mobile}</Text>
                )}
                <TextInput
                  name="password"
                  placeholder="   Mpin"
                  placeholderTextColor="grey"
                  style={styles.textInput}
                  onChangeText={pass => setPin(pass)}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
                <Image
                  source={require('../images/02/Group/Password/eye/eyeon.png')}
                  style={styles.imgEye}
                />

                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <Text style={styles.forgotText}>Forgot your password?</Text>
                <View style={styles.button}>
                  <Buttons onPress={onSubmit} name="SIGN IN" />
                </View>
              </>
            )}
          </Formik>
          <Image
            source={require('../images/02/fingerprint.png')}
            style={styles.imgFinger}
          />
          <View style={styles.bottonText}>
            <Text style={styles.textOR}>OR</Text>
            <Text style={styles.bottomText}>USE YOUR FINGERPRINT TO LOGIN</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    height: 54,
    width: 300,
    backgroundColor: '#FFFFFF',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    color: 'black',
    marginBottom: 30,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  forgotText: {
    color: '#ffffff',
    fontSize: 14,
    marginRight: 155,
    width: 147,
    height: 17,
  },
  button: {
    marginTop: 40,
    marginRight: 170,
  },
  linearGradient: {
    flex: 1,
  },
  imgFinger: {width: 52.31, height: 54, marginTop: 150},
  bottonText: {
    flexDirection: 'row',
    marginTop: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imgEye: {width: 24, height: 15,left:125,bottom:63},
  textOR: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    height: 24,
    width: 40,
  },
  bottomText: {
    fontSize: 13,
    lineHeight: 25,
    color: '#FFFFFF',
    height: 21,
    width: 219,
  },
});

export default SignIn1;
