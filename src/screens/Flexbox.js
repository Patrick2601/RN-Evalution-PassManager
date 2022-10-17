import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Pressable,
  FlatList,
} from 'react-native';

const Flexbox = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.title}> FLEX ROW</Text>
          <View style={styles.view1}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 100,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              1
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 100,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              2
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 100,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              3
            </Text>
          </View>
          <Text>
            ------------------------------------------------------------
          </Text>
          <Text style={styles.title}> FLEX COLUMN</Text>
          <View style={styles.view2}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              4
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              5
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              6
            </Text>
          </View>
          <Text>
            ------------------------------------------------------------
          </Text>

          <Text style={styles.title}> FLEX ROW-REVERSE</Text>
          <View style={styles.view3}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              7
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              8
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              9
            </Text>
          </View>
          <Text>
            ------------------------------------------------------------
          </Text>

          <Text style={styles.title}> FLEX COLUMN REVERSE</Text>
          <View style={styles.view4}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              10
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              11
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              12
            </Text>
          </View>
          <Text>
            ------------------------------------------------------------
          </Text>

          <Text style={styles.title}> FLEX WRAP</Text>
          <View style={styles.view5}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              13
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              14
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              15
            </Text>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              16
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              17
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              18
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              19
            </Text>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              20
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              21
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              22
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              23
            </Text>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              24
            </Text>
          </View>
          <Text>
            ------------------------------------------------------------
          </Text>
          <Text style={styles.title}> FLEX SPACE AROUND</Text>
          <View style={styles.view6}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              1
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              2
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              3
            </Text>
          </View>
          <Text>
            --------------------------------------------------------------------------------
          </Text>
          <Text style={styles.title}> FLEX SPACE BETWEEN</Text>
          <View style={styles.view7}>
            <Text
              style={{
                backgroundColor: '#ffff00',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              4
            </Text>
            <Text
              style={{
                backgroundColor: '#ff00ff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              5
            </Text>
            <Text
              style={{
                backgroundColor: '#00ffff',
                width: 50,
                height: 50,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              {' '}
              6
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'grey',
  },
  main: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //display:'flex',
    backgroundColor: 'grey',
  },
  view1: {
    flexDirection: 'row',
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',

    borderColor: 'black',
    borderWidth: 5,
  },
  view2: {
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 5,
  },
  view3: {
    flexDirection: 'row-reverse',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
  },
  view4: {
    flexDirection: 'column-reverse',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 10,
  },
  view5: {
    flexDirection: 'row',
    height: 200,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginRight: 20,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 5,
  },
  view6: {
    flexDirection: 'row',
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'space-around',

    borderColor: 'black',
    borderWidth: 5,
  },
  view7: {
    flexDirection: 'row',
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'space-between',

    borderColor: 'black',
    borderWidth: 5,
  },

  title: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    //justifyContent:'center'
  },
});

export default Flexbox;
