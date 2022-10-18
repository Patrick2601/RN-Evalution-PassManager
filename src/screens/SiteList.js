import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableHighlight,
} from 'react-native';
const DATA = [
  {
    key: 'Facebook',
    source: require('../images/06/01/Bitmap.png'),
    link: 'www.facebook.com',
  },
  {
    key: 'YouTube',
    source: require('../images/06/01copy3/Bitmap.png'),
    link: 'www.youtube.com/ssmraok',
  },
  {
    key: 'Twitter',
    source: require('../images/06/01copy4/BitmapCopy2.png'),
    link: 'www.twitter.com',
  },
  {
    key: 'Instagram',
    source: require('../images/06/01copy/Bitmap.png'),
    link: 'www.instagram.com',
  },
];

const SiteList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableHighlight
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate('Edit Site')
            }}>
            <View >
              <View style={styles.topItem}>
                <Image source={item.source}></Image>

                <View>
                  <Text style={styles.socialText}>{item.key}</Text>
                  <View>
                    <Text style={styles.copyText}>Copy Password</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bottomItem}>
                <Text style={styles.link}>{item.link}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};
export default SiteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    width:"100%",
  },
  flatList:{
    marginTop:20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    height: 103.5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 10,
   shadowOffset: {width: -2, height: 1},
    shadowColor: '#E7E7E7',
    shadowOpacity: 0.9,
    shadowRadius: 3,
    marginBottom: 12,
  },
  topItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 65.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomItem: {
    alignItems: 'center',
    paddingTop: 10,
  },
  socialText: {
    color: '#0E85FF',
    fontSize: 18,
    fontWeight: 60,
    lineHeight: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingVertical: 6,
  },
  copyText: {
    color: '#0E85FF',
    fontSize: 11.34,
    alignSelf: 'flex-end',
    paddingVertical: 6,
  },
  link: {
    color: '#3C4857',
    fontSize: 14.4,
  },
});
