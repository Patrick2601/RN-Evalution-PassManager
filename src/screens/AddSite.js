import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {addSite} from '../Redux/Reducers/Slice';
import Facebook from '../images/06/01/Bitmap.png';
import {Button1} from '../components/Buttons';
import CustomInput from '../components/CustomInput';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Feather';
import SelectList from 'react-native-dropdown-select-list';

const AddSite = ({navigation}) => {
  const siteData = useSelector(state => state.site.value);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  const data = [
    {
      key: 'Social Media',
      value: 'Social Media',
    },
    {
      key: 'Shopping Apps',
      value: 'Shopping Apps',
    },
  ];
  const [icon, setIcon] = useState('eye');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const initialValues = {
    id: siteData.length + 1,
    url: '',
    siteName: '',
    folder: '',
    userName: '',
    sitePassword: '',
    notes: '',
    icon: Facebook,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            if (values.siteName && values.url !== '') {
              const obj = {
                id: values.id,
                url: values.url,
                siteName: values.siteName,
                folder: selected,
                userName: values.userName,
                sitePassword: values.sitePassword,
                notes: values.notes,
                icon: Facebook,
              };
              console.log(obj);
              Toast.show('Saved Successfully');
              dispatch(addSite(obj));
              navigation.navigate('PASS MANAGER');
            } else {
              Toast.show('Enter the Details');
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm,
            errors,
            touched,
            values,
            isValid,
          }) => (
            <>
              <ScrollView style={{width: '90%'}}>
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

                <SelectList
                  data={data}
                  setSelected={setSelected}
                  name="folder"
                  onChangeText={handleChange('folder')}
                  value={selected}
                  boxStyles={styles.boxStyles}
                  inputStyles={styles.inputStyles}
                  dropdownTextStyles={styles.dropdownTextStyles}
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
                  secureTextEntry={secureTextEntry}
                />
                <View style={styles.eyeIcon}>
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
                <Text style={styles.text}>Notes</Text>
                <Field
                  component={CustomInput}
                  name="notes"
                  placeholderTextColor="grey"
                  style={styles.notesField}
                  onChangeText={handleChange('notes')}
                  onBlur={handleBlur('notes')}
                  value={values.notes}
                  multiline
                  numberOfLines={4}
                />

                <View style={styles.buttons}>
                  <Button1
                    name="RESET"
                    onPress={() => resetForm({initialValues})}
                  />

                  <Button1
                    onPress={handleSubmit}
                    disabled={!isValid}
                    name="SAVE"
                  />
                </View>
              </ScrollView>
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
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  field: {
    color: 'black',
    fontSize: 16,
    height: 41,
    width: '100%',
    backgroudColor: '#FFFFFF',
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    marginBottom: 20,
  },
  eyeIcon: {left: 290, bottom: 54},
  notesField: {
    color: 'black',
    fontSize: 16,
    height: 81,
    width: '100%',
    backgroudColor: '#FFFFFF',
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 60 : 10,
    justifyContent: 'center',
  },
  text: {
    height: 24,
    width: 320,
    fontSize: 18,
    color: '#949CA5',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    top: 20,
  },
  boxStyles: {width: '100%', height: 44, marginBottom: 20},
  inputStyles: {width: 200, height: 44, color: 'black'},
  dropdownTextStyles: {color: 'black'},
});

export default AddSite;
