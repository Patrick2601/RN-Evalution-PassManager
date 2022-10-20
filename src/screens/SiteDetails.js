import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import CustomInput from '../components/CustomInput';
import {useRoute} from '@react-navigation/native';

const SiteDetails = ({navigation}) => {
  const route = useRoute();
  const [edit, setEdit] = useState(false);
  const [siteDetails, setSiteDetails] = useState(route.params.item);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Formik
          onSubmit={() => {
            alert('navigate');
            navigation.navigate('PASS MANAGER');
          }}>
          {({handleSubmit, isValid}) => (
            <>
              <Text style={styles.text}>URL</Text>
              <Field
                component={CustomInput}
                value={siteDetails.url}
                style={styles.field}
                editable={edit}
              />
              <Text style={styles.text}>Site Name</Text>

              <Field
                component={CustomInput}
                value={siteDetails.siteName}
                style={styles.field}
                editable={edit}
              />
              <Text style={styles.text}>Sector/Folder</Text>

              <Field
                component={CustomInput}
                value={siteDetails.folder}
                style={styles.field}
                editable={edit}
              />
              <Text style={styles.text}>User Name</Text>

              <Field
                component={CustomInput}
                value={siteDetails.userName}
                style={styles.field}
                editable={edit}
              />
              <Text style={styles.text}>Site Password</Text>

              <Field
                component={CustomInput}
                value={siteDetails.sitePassword}
                style={styles.field}
                editable={edit}
              />
              <Text style={styles.text}>Notes</Text>

              <Field
                component={CustomInput}
                value={siteDetails.notes}
                style={styles.field}
                editable={edit}
              />
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
  text: {
    height: 24,
    width: 320,
    fontSize: 18,
    color: '#949CA5',
    marginBottom: 5,
  },
});

export default SiteDetails;
