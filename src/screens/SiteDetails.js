import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import CustomInput from '../components/CustomInput';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const SiteDetails = ({navigation}) => {
  const route = useRoute();
  const [edit, setEdit] = useState(false);
  const siteDetails = route.params.item;
  const [icon, setIcon] = useState('eye');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Formik>
          {({handleSubmit, isValid, values}) => (
            <>
              <View style={styles.topbar}>
                <Icon
                  name="arrow-left"
                  size={25}
                  color="white"
                  style={styles.icon}
                  onPress={() => {
                    navigation.navigate('PASS MANAGER', {siteDetails});
                  }}
                />
                <Text style={styles.text2}> Site Details</Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Edit Site', {siteDetails});
                  }}>
                  <Text style={styles.text3}>Edit</Text>
                </Pressable>
              </View>
              <ScrollView style={{width: 324, height: '100%'}}>
                <Text style={styles.text}>URL</Text>
                <Field
                  component={CustomInput}
                  name="url"
                  value={siteDetails.url}
                  style={styles.field}
                  editable={edit}
                />
                <Text style={styles.text}>Site Name</Text>

                <Field
                  component={CustomInput}
                  name="siteName"
                  value={siteDetails.siteName}
                  style={styles.field}
                  editable={edit}
                />
                <Text style={styles.text}>Sector/Folder</Text>

                <Field
                  component={CustomInput}
                  name="folder"
                  value={siteDetails.folder}
                  style={styles.field}
                  editable={edit}
                />
                <Text style={styles.text}>User Name</Text>

                <Field
                  component={CustomInput}
                  name="userName"
                  value={siteDetails.userName}
                  style={styles.field}
                  editable={edit}
                />

                <Text style={styles.text}>Site Password</Text>

                <Field
                  component={CustomInput}
                  name="sitePassword"
                  value={siteDetails.sitePassword}
                  style={styles.field}
                  editable={edit}
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
                <View style={styles.notesField}>
                  <Text style={styles.text}>Notes</Text>

                  <Field
                    component={CustomInput}
                    name="notes"
                    value={siteDetails.notes}
                    style={styles.field}
                    editable={edit}
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
  topbar: {
    width: '110%',
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    height: 60,
    bottom: 30,
    justifyContent: 'space-between',
  },
  text2: {
    height: 28,
    width: 110,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 60,
    color: '#FFFFFF',
  },
  text3: {
    height: 28,
    width: 103,
    fontSize: 20,
    marginTop: 20,
    left: 40,
    color: '#FFFFFF',
  },
  icon: {
    marginTop: 20,
    marginLeft: 20,
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
  eyeIcon: {
    left: 285,
    bottom: 54,
  },
});

export default SiteDetails;
