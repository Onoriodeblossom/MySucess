import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackgroundImage,
  ImageBackground,
} from 'react-native';

import React, {useState} from 'react';

export const Modal = ({children, show, close}) => {
  return (
    <>
      <Backdrop show={show} close={close} />
      <View
        style={[styles.modalWhite, {display: show ? "flex" : "none"}]}>
          <ScrollView style={{    padding: 20,
    flexDirection: "column"}}>
          {children}
          </ScrollView>
          </View>
    </>
  );
};

export const Backdrop = ({show, close}) => {
  return (
        <TouchableWithoutFeedback onPress={close}>
          <View style={[styles.modalCover, {display: show ? "flex" : "none"}]}></View>
        </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modalCover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: '#807E7E95',
    // backgroundColor: '#ff000015',
  },
  modalWhite: {
    width: '93%',
    position: "absolute",
    height: "auto",
    backgroundColor: '#fff',
    marginLeft:  "4%",
    marginTop: "10%",
    zIndex: 102,

    shadowColor: '#707070',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: '#fff',
    elevation: 3,
  },
});
