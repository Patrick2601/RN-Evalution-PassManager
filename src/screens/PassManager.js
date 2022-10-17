import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const PassManager = () => {
  return (
    <SafeAreaView style={styles.container}>
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>ahdahjd</Text>
        <Text>ahdahjd</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bodytop: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
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
});
export default PassManager;
