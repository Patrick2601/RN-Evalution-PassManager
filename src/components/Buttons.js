import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Buttons = ({onPress, name}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  );
};
const Button1 = ({onPress, name}) => {
  return (
    <View style={styles.container1}>
      <Pressable onPress={onPress} style={styles.button1}>
        <Text style={styles.text1}>{name}</Text>
      </Pressable>
    </View>
  );
};

const Button2 = ({onPress, name}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <Image
        source={require('../images/06/addbtn.png')}
        style={styles.floatingButton}
      />
    </TouchableOpacity>
  );
};
const Button3 = ({onPress, name}) => {
  return (
    <View style={styles.container1}>
      <Pressable onPress={onPress} style={styles.button3}>
        <Text style={styles.text3}>{name}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#0E85FF',
    width: 74,
    height: 24,
    lineHeight: 24,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#ffffff',
    width: 130,
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 60,
    flexDirection: 'row',
  },
  button1: {
    position:'absolute',
    backgroundColor: '#0E85FF',
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  text1: {
    color: '#ffffff',
    fontSize: 20,
  },
  touchableOpacity: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 21,
  },

  floatingButton: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
  button3: {
    backgroundColor: '#0E85FF',
    width: 400,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export {Buttons, Button1, Button2, Button3};
