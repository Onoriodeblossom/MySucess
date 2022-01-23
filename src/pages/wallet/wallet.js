import {
    StyleSheet,
    //   TextInput,
    View,
    Text,
    TouchableWithoutFeedback,
      ScrollView,
    //   Image,
    //   Keyboard,
    //   TouchableOpacity,
    //   KeyboardAvoidingView,
    //   BackgroundImage,
    //   ImageBackground,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign';
  import React, {useState} from 'react';
import NavSection from '../../components/nav/nav';


const WalletScreen = () => {
    return(
        <ScrollView>
            <NavSection />


            <View style={styles.WalletScreenCover}>
<View style={styles.cardCover}>
    <View style={{justifyContent: "space-between"}}>
    <Text style={{fontWeight: "bold", color: "#807E7E"}}>Subscribers</Text>
        <Text style={{fontWeight: "bold", color: "#50B12F", marginBottom: 8}}>97 Students</Text>
    </View>
    <View style={styles.walletbtn}>
        <Text style={{color: "#fff"}}>View</Text>
    </View>
</View>




<View style={styles.cardCover}>
    <View style={{justifyContent: "space-between"}}>
    <Text style={{fontWeight: "bold", color: "#807E7E"}}>Wallet</Text>
        <Text style={{fontWeight: "bold", color: "#50B12F", marginBottom: 8}}>N57000.00</Text>
    </View>
    <View style={styles.walletbtn}>
        <Text style={{color: "#fff"}}>Withdraw</Text>
    </View>
</View>
            </View>
        </ScrollView>
    )
}

export default WalletScreen;

const styles = StyleSheet.create({
    WalletScreenCover: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    cardCover: {
        borderRadius: 15,
        width: "100%",
        height: 116,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 18,
        paddingLeft: 28,
        paddingRight: 28,
        marginTop: 30,
        paddingBottom: 10,
    },
    walletbtn: {
        marginTop: "auto",
        height: 38,
        width: 120,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#50B12F",

    }
});