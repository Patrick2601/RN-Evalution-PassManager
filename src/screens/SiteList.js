import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MainComp} from './MainComp';
import {deleteSite} from '../Redux/Reducers/Slice';

const SiteList = ({navigation}) => {
  const dispatch = useDispatch();
  const siteData = useSelector(state => state.site.value);
  const renderItem = ({item}) => (
    <MainComp
      title={item.siteName}
      uri={item.icon}
      url={item.url}
      password={item.sitePassword}
      onPress={() => navigation.navigate('Site Details', {item})}
      onLongPress={() => dispatch(deleteSite(item))}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={siteData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default SiteList;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    height: 600,
    width: '100%',
    backgroundColor: '#FAFAFA',
  },
  flatList: {
    marginTop: 20,
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
