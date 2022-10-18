import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
  Platform,
} from 'react-native';

export const MainComp = () => {
  return (<View style={styles.main}>
    <View style={styles.body}>
      <View style={styles.bodytop}>
        <Image
          source={require('../images/06/01/Bitmap.png')}
          style={styles.logo}
        />
        <View style={styles.bodyin}>
          <Text style={styles.text1}>Facebook</Text>
          <Text style={styles.text2}>Copy Password</Text>
        </View>
      </View>

      <Pressable>
        <Text style={styles.text3}>www.facbook.com</Text>
      </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
  body: {
    marginTop: 20,
    height: 10,
    width: 345,
    borderRadius: 12.6,
    marginBottom:120,
    borderRight: 5,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.2,
  },
  bodytop: {
    height: 65,
    width: 320,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  logo: {
    height: 45,
    weight: 45,
    marginTop: 8,
  },
  bodyin: {
    marginLeft: 165,
  },
  text1: {
    height: 24,
    width: 83,
    color: '#0E85FF',
    fontSize: 18,
    lineheight: 24,
    marginTop: 8,
  },
  text2: {
    height: 15,
    weight: 81,
    color: '#0E85FF',
    fontSize: 12,
    marginTop: 8,
  },
  text3: {
    height: 45,
    weight: 132,
    fontSize: 15,
    color: '#3C4857',
    textAlign: 'center',
    marginTop: 7,
    marginBottom: 8,
    backgroundColor: '#FAFAFA',
    paddingTop: 10,
  },
});
