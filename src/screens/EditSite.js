import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import {Button3} from '../components/Buttons';
import CustomInput from '../components/CustomInput';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {editSite} from '../Redux/Reducers/Slice';
import Toast from 'react-native-simple-toast';
import SelectList from 'react-native-dropdown-select-list';

const EditDetails = ({navigation}) => {
  const route = useRoute();
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

  const siteDetails = route.params.siteDetails;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Formik
          initialValues={{
            id: siteDetails.id,
            url: siteDetails.url,
            siteName: siteDetails.siteName,
            folder: siteDetails.folder,
            userName: siteDetails.userName,
            sitePassword: siteDetails.sitePassword,
            notes: siteDetails.notes,
          }}
          onSubmit={values => {
            const obj = {
              id: siteDetails.id,
              url: values.url,
              siteName: values.siteName,
              folder: selected,
              userName: values.userName,
              sitePassword: values.sitePassword,
              notes: values.notes,
            };
            dispatch(editSite(obj));
            navigation.navigate('PASS MANAGER');
            Toast.show('Updated Successfully', Toast.SHORT);
          }}>
          {({handleSubmit, handleChange, values}) => (
            <>
              <Text style={styles.text}>URL</Text>
              <Field
                component={CustomInput}
                name="url"
                onChangeText={handleChange('url')}
                style={styles.field}
                value={values.url}
              />
              <Text style={styles.text}>Site Name</Text>

              <Field
                component={CustomInput}
                name="siteName"
                onChangeText={handleChange('siteName')}
                placeholderTextColor="grey"
                style={styles.field}
                value={values.siteName}
              />
              <Text style={styles.text}>Sector/Folder</Text>
              <SelectList
                data={data}
                setSelected={setSelected}
                name="folder"
                value={selected}
                boxStyles={styles.boxStyle}
                inputStyles={styles.inputStyles}
                maxHeight={100}
              />
              <Text style={styles.text}>User Name</Text>

              <Field
                component={CustomInput}
                name="userName"
                onChangeText={handleChange('userName')}
                placeholderTextColor="grey"
                style={styles.field}
                value={values.userName}
              />
              <Text style={styles.text}>Site Password</Text>

              <Field
                component={CustomInput}
                name="sitePassword"
                onChangeText={handleChange('sitePassword')}
                placeholderTextColor="grey"
                style={styles.field}
                value={values.sitePassword}
              />
              <Text style={styles.text}>Notes</Text>

              <Field
                component={CustomInput}
                name="notes"
                onChangeText={handleChange('notes')}
                placeholderTextColor="grey"
                style={styles.field}
                value={values.notes}
              />
              <View style={styles.buttons}>
                <Button3 onPress={handleSubmit} name="UPDATE" />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E85FF',
    top: Platform.OS === 'ios' ? 120 : 60,
  },
  text: {
    height: 24,
    width: 320,
    fontSize: 18,
    color: '#949CA5',
    marginBottom: 5,
  },

  text2: {
    height: 28,
    width: 110,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 120,
    color: '#FFFFFF',
  },
  boxStyle: {
    width: 321,
    height: 44,
    marginBottom: 20,
  },
  inputStyles: {
    width: 200,
    height: 44,
  },
});

export default EditDetails;
