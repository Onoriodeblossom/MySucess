/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavSection from './src/components/nav/nav';
import HomeScreen from './src/pages/home/home';
import RecordScreen from './src/pages/records/records';
import WalletScreen from './src/pages/wallet/wallet';



const Stack = createNativeStackNavigator();

export const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          // headerShow:false
          headerShown:false
        }
        }
        />

        <Stack.Screen name="Wallet" component={WalletScreen}    
         options={{
          // headerShow:false
          headerShown:false
        }}
        />

        <Stack.Screen name="Record" component={RecordScreen}    options={{
          // headerShow:false
          headerShown:false
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// {/* <ScrollView
//   contentInsetAdjustmentBehavior="automatic"
//   style={backgroundStyle}>
// </ScrollView> */}

// <Header />
// <View
//   style={{
//     backgroundColor: isDarkMode ? Colors.black : Colors.white,
//   }}>
//   <Section title="Step One">
//     Edit <Text style={styles.highlight}>App.js</Text> to change this
//     screen and then come back to see your edits.
//   </Section>
//   <Section title="See Your Changes">
//     <ReloadInstructions />
//   </Section>
//   <Section title="Debug">
//     <DebugInstructions />
//   </Section>
//   <Section title="Learn More">
//     Read the docs to discover what to do next:
//   </Section>
//   <LearnMoreLinks />
// </View>
