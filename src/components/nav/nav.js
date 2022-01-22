import {
  StyleSheet,
//   TextInput,
  View,
//   Text,
//   ScrollView,
//   Image,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   BackgroundImage,
//   ImageBackground,
} from 'react-native';

import React from 'react';

const NavSection = () => {
  return <View style={styles.navCover}>
      <View style={styles.navContain}>
      <View style={styles.navBar}></View>
      <View style={styles.navProfileCover}></View>

      </View>
  </View>;
};

export default NavSection;

const styles = StyleSheet.create({
  navCover: {
    width: '100%',
    justifyContent: 'space-between',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: "#fff",
    elevation: 3,
  },

  navContain:{
    width: "90%",
    marginLeft: "auto", 
    marginRight: "auto", 
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navBar: {
      width: 50,
      height: 40,
      backgroundColor: "red" 
  },
  navProfileCover: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "blue"
  }
});
