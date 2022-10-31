import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icons from 'react-native-vector-icons/AntDesign';
import {filter, filterDropDown} from '../Redux/Reducers/Slice';
import Modal from 'react-native-modal';
import {changeUserState} from '../Redux/Reducers/userSlice';
const StatusBar = () => {
  const siteData = useSelector(state => state.site.value);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('All');
  const siteFolder = ['All', 'Social Media', 'Shopping Apps'];
  const [modalVisiblity, setModalVisiblity] = useState(false);

  const setDropDown = () => {
    setVisible(!visible);
  };

  const handleFolders = folder => {
    setTitle(folder);
    dispatch(filterDropDown(folder));
    setVisible(false);
  };
  const renderDropDown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownContainer}>
          {siteFolder.map(folder => (
            <TouchableOpacity
              onPress={() => {
                handleFolders(folder);
              }}
              key={folder}>
              <Text style={styles.dropdownText}>{folder}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  const handleToggle = () => {
    setModalVisiblity(!modalVisiblity);
  };

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
        <Pressable onPress={() => setSearch(!search)}>
          <Image
            source={require('../images/06/Group/search.png')}
            style={styles.image3}
          />
        </Pressable>
        <Pressable onPress={handleToggle}>
          <Image
            source={require('../images/06/Group/syncicn.png')}
            style={styles.image4}
          />
        </Pressable>
        <Pressable onPress={() => dispatch(changeUserState())}>
          <Image
            source={require('../images/06/Group/profile.png')}
            style={styles.image5}
          />
        </Pressable>

        <Modal isVisible={modalVisiblity} coverScreen={true}>
          <TouchableOpacity onPress={handleToggle}>
            <View style={styles.imageContainer}>
              <Text style={styles.modalText}>Data Sync in Progress</Text>
              <Text style={styles.modalText}>Please wait</Text>
            </View>
            <Image
              source={require('../images/async.png')}
              style={styles.dataSyncimage}
            />
          </TouchableOpacity>
        </Modal>
      </View>
      {search ? (
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Type keywords to search"
            placeholderTextColor="black"
            style={styles.textInput}
            onChangeText={text => dispatch(filter(text))}></TextInput>
          <Icons
            name="arrowright"
            size={20}
            color="#0E85FF"
            onPress={() => setSearch(!search)}
          />
        </View>
      ) : (
        <View style={styles.container2}>
          <View style={styles.bodytop2}>
            <Text style={styles.text1}>Sites</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '55%',
                left: 30,
              }}>
              <Text style={styles.text2}>{title}</Text>
              <View style={styles.oval}>
                <Text style={styles.number}>{siteData.length}</Text>
              </View>
              <Pressable onPress={setDropDown}>
                <Image
                  source={require('../images/06/heading/PathCopy.png')}
                  style={styles.image6}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.bottomborder} />
        </View>
      )}
      {renderDropDown()}
    </View>
  );
};

const styles = StyleSheet.create({
  bodytop: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#0E85FF',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  container2: {
    paddingTop: 5,
    paddingLeft: 25,
    height: 60,
    backgroundColor: '#FAFAFA',
  },
  bodytop2: {
    flexDirection: 'row',
    marginTop: 2,
    height: 40,
    justifyContent: 'space-between',
    paddingRight: 40,
  },
  bottomborder: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginTop: -10,
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
  },
  image3: {
    marginTop: 15,
    marginLeft: 100,
  },
  image5: {
    marginTop: 15,
    marginLeft: 1,
  },
  image6: {
    marginTop: 13,
    left:5
  },
  text1: {
    height: 55,
    widht: 55,
    fontSize: 24,
    textAlign: 'left',
    color: 'black',
  },
  text2: {
    width: 137,
    height: 27,
    fontSize: 20,
    marginTop: 4,
    color: 'black',
  },
  number: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 9,
    marginTop: 2,
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    backgroundColor: '#0E85FF',
    borderRadius: 20,
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
  textInput: {
    color: 'black',
    width: 200,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: 390,
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingLeft: 20,
  },
  dropdownContainer: {
    marginVertical: 20,
    alignSelf: 'flex-end',
    marginEnd: 15,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#0E85FF',
    backgroundColor: '#FFFFFF',
  },
  dropdownText: {
    padding: 5,
    color: 'black',
  },
  modalText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataSyncimage: {
    alignSelf: 'center',
    height: 40,
    width: 42,
  },
  dataSyncContainer: {
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 33,
  },
});

export default StatusBar;
