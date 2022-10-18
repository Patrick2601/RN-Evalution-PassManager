import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const StatusBar = () => {
  return (
    <View style={styles.main}>
      <View style={styles.bodytop}>
        <Image
          source={require('../images/06/appbar/burger_menu.png')}
          style={styles.image1}
        />
        <Image
          source={require('../images/06/Group/passmanager.png')}
          style={styles.image2}
        />
        <Image
          source={require('../images/06/Group/search.png')}
          style={styles.image3}
        />
        <Image
          source={require('../images/06/Group/sync_icn.png')}
          style={styles.image4}
        />
        <Image
          source={require('../images/06/Group/profile.png')}
          style={styles.image5}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.bodytop2}>
          <Text style={styles.text1}>Sites</Text>
          <Text style={styles.text2}>Social Media</Text>
          <View style={styles.oval}>
            <Text style={styles.number}>07</Text>
          </View>
          <Pressable>
            <Image
              source={require('../images/06/heading/PathCopy.png')}
              style={styles.image6}
            />
          </Pressable>
        </View>
        <View style={styles.bottomborder}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  bodytop: {
    width:400,
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
  },
  container2: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  bodytop2: {
    flexDirection: 'row',
    marginTop: 2,
    height: 40,
  },
  bottomborder: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
  },
  image1: {
    marginTop: 20,
    marginLeft: 25,
  },
  image2: {
    marginTop: 15,
    marginLeft: 20,
  },
  image4: {
    marginTop: 15,
    marginLeft: 30,
  },
  image3: {
    marginTop: 15,
    marginLeft: 90,
  },
  image5: {
    marginTop: 15,
    marginLeft: 30,
  },
  image6: {
    marginTop: 13,
    marginLeft: 7,
  },
  text1: {
    height: 55,
    widht: 55,
    fontSize: 24,
    textAlign: 'left',
  },
  text2: {
    width: 113,
    height: 27,
    fontSize: 20,
    marginTop: 4,
    marginLeft: 120,
  },
  number: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 0,
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    width: 29,
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginLeft: 8,
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
});

export default StatusBar;
