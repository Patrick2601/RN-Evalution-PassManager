import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {addSite} from '../Redux/Reducers/Slice';
import Facebook from '../images/06/01/Bitmap.png';
import {Button1} from '../components/Buttons';
import CustomInput from '../components/CustomInput';
import {useSelector, useDispatch} from 'react-redux';

const AddSite = ({navigation}) => {
  const siteData = useSelector(state => state.site.value);
  const dispatch = useDispatch();
  const signUpValidationSchema = yup.object().shape({
    url: yup
      .string()
      .required('URL is required'),
    // siteName: yup
    //   .string()
    //   .required('Site Name is required'),
    //   folder: yup
    //   .string()
    //   .required('URL is required'),
    // userName: yup
    //   .string()
    //   .required('Site Name is required'),
    //   sitePassword: yup
    //   .string()
    //   .required('URL is required'),
      
    
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            id: siteData.length + 1,
            url: '',
            siteName: '',
            folder: '',
            userName: '',
            sitePassword: '',
            notes: '',
            icon: Facebook,
          }}
          onSubmit={values => {
            alert('Saved Successfully');
            dispatch(addSite(values));
            navigation.navigate('PASS MANAGER');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <Text style={styles.text}>URL</Text>
              <Field
                component={CustomInput}
                name="url"
                placeholderTextColor="grey"
                style={styles.field}
                onChangeText={handleChange('url')}
                onBlur={handleBlur('url')}
                value={values.url}
              />
              <Text style={styles.text}>Site Name</Text>

              <Field
                component={CustomInput}
                name="siteName"
                placeholderTextColor="grey"
                style={styles.field}
                onChangeText={handleChange('siteName')}
                onBlur={handleBlur('siteName')}
                value={values.siteName}
              />
              <Text style={styles.text}>Sector/Folder</Text>

              <Field
                component={CustomInput}
                name="folder"
                placeholderTextColor="grey"
                style={styles.field}
                onChangeText={handleChange('folder')}
                onBlur={handleBlur('folder')}
                value={values.folder}
              />
              <Text style={styles.text}>User Name</Text>

              <Field
                component={CustomInput}
                name="userName"
                placeholderTextColor="grey"
                style={styles.field}
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
              />
              <Text style={styles.text}>Site Password</Text>

              <Field
                component={CustomInput}
                name="sitePassword"
                placeholderTextColor="grey"
                style={styles.field}
                onChangeText={handleChange('sitePassword')}
                onBlur={handleBlur('sitePassword')}
                value={values.sitePassword}
              />
              <Text style={styles.text}>Notes</Text>

              <Field
                component={CustomInput}
                name="notes"
                placeholderTextColor="grey"
                style={styles.field}
                onChangeText={handleChange('notes')}
                onBlur={handleBlur('notes')}
                value={values.notes}
              />
              <View style={styles.buttons}>
                <Button1 name="RESET" />
                <Button1
                  onPress={handleSubmit}
                  disabled={!isValid}
                  name="SAVE"
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  field: {
    color: 'black',
    fontSize: 16,
    height: 41,
    width: 321,
    backgroudColor: '#FFFFFF',
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 125 : 70,
  },
  text: {
    height: 24,
    width: 320,
    fontSize: 18,
    color: '#949CA5',
    marginBottom: 5,
  },
});

export default AddSite;
