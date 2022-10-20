import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Formik, Field} from 'formik';
import {Button3} from '../components/Buttons';
import CustomInput from '../components/CustomInput';

const EditDetails = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Formik
          onSubmit={() => {
            alert('navigate');
            navigation.navigate('PASS MANAGER');
          }}>
          {({handleSubmit}) => (
            <>
              <Text style={styles.text}>URL</Text>
              <Field
                component={CustomInput}
                name="URL"
                placeholderTextColor="grey"
                style={styles.field}
              />
              <Text style={styles.text}>Site Name</Text>

              <Field
                component={CustomInput}
                name="Site Name"
                placeholderTextColor="grey"
                style={styles.field}
              />
              <Text style={styles.text}>Sector/Folder</Text>

              <Field
                component={CustomInput}
                name="Sector"
                placeholderTextColor="grey"
                style={styles.field}
              />
              <Text style={styles.text}>User Name</Text>

              <Field
                component={CustomInput}
                name="User Name"
                placeholderTextColor="grey"
                style={styles.field}
              />
              <Text style={styles.text}>Site Password</Text>

              <Field
                component={CustomInput}
                name="Site Password"
                placeholderTextColor="grey"
                style={styles.field}
              />
              <Text style={styles.text}>Notes</Text>

              <Field
                component={CustomInput}
                name="Notes"
                placeholderTextColor="grey"
                style={styles.field}
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
});

export default EditDetails;