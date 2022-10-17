import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopNav from '../Navigation/TopNav';
import LinearGradient from 'react-native-linear-gradient';

const AuthScreen = () => {
  return (
    <LinearGradient
      colors={['#20BBFF', '#0E85FF']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.main}>
        <Image source={require('../images/02/logo.png')} style={styles.img} />
        <View style={styles.view}>
          <TopNav />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20BBFF',
  },
  imageLogo: {
    marginTop: 70,
    marginLeft: 98,
    marginRight: 83,
  },
  tabView: {
    flex: 1,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 34,
    height: 485,
    width: 300,
    alignSelf: 'center',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  linearGradient: {
    flex: 1,
  },
  img: {width: 179, height: 68, marginTop: 20},
  view: {
    flex: 1,
    width: '100%',
  },
});
