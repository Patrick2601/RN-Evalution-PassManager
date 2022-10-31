import React from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export const MainComp = ({
  title = 'Facebook',
  url = 'www.facebook.com',
  uri,
  imgUrl,
  onPress,
  onLongPress,
  password,
}) => {
  const copyPassword = password => {
    Clipboard.setString(password);
    Toast.show(`Password Copied`, Toast.SHORT);
  };
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <View style={styles.bodytop}>
          <Image source={uri ? uri : imgUrl} style={styles.logo} />
          <View style={styles.bodyin}>
            <Text style={styles.text1}>{title}</Text>
            <Pressable
              onPress={() => {
                copyPassword(password);
              }}>
              <Text style={styles.text2}>Copy Password</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.text3}>{url}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 120,
    borderRadius: 12.6,
    marginTop: 10,
    marginHorizontal: 20,
    borderRight: 5,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.3,
    paddingEnd: 15,
  },
  bodytop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: 10,
    marginLeft: 5,
  },
  bodyin: {
    marginVertical: 10,
  },
  text1: {
    textAlign: 'right',
    height: 24,
    width: 83,
    color: '#0E85FF',
    fontSize: 18,
    lineheight: 24,
    marginTop: 8,
  },
  view: {
    backgroundColor: '#FAFAFA',
    width: 345,
  },
  text2: {
    height: 15,
    weight: 81,
    color: '#0E85FF',
    fontSize: 12,
    marginTop: 8,
  },
  text3: {
    fontSize: 15,
    color: '#3C4857',
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 15,
    paddingBottom: 13,
  },
});
