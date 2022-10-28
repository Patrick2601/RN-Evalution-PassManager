import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Button2} from '../components/Buttons';
import StatusBar from '../components/StatusBar';
import SiteList from './SiteList';

const PassManager = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <SiteList navigation={navigation} />
      <Button2 onPress={() => navigation.navigate('Add Site')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PassManager;
