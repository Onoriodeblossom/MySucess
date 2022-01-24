import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  //   TextInput,
  View,
  Modal,
  Text,
  Alert,
  //   Text,
  //   ScrollView,
  //   Image,
  //   Keyboard,
  //   TouchableOpacity,
  //   KeyboardAvoidingView,
  //   BackgroundImage,
  //   ImageBackground,
} from 'react-native';
import Menu from 'react-native-vector-icons/Entypo';
import Cancel from 'react-native-vector-icons/AntDesign';

const NavSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.navCover}>
      <View style={styles.navContain}>
        <TouchableOpacity
          style={styles.navBar}
          onPress={() => setModalVisible(true)}>
          <Menu name="menu" size={34} />
        </TouchableOpacity>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            style={{}}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#606070',
                opacity: 0.8,
              }}>
              <View style={styles.sideBar}>
                <View style={styles.header}>
                  <Text>Menu</Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Cancel name="close" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.navProfileCover}></View>
      </View>
    </View>
  );
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
    backgroundColor: '#fff',
    elevation: 3,
  },

  navContain: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navBar: {
    width: 50,
    height: 40,
  },
  navProfileCover: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
  sideBar: {
    height: 200,
    width: 250,
    marginLeft: 20,
    marginTop: 100,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: '#fff',
    elevation: 9,
    opacity: +1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
