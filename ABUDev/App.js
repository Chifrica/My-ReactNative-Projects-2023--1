import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ABUDevHeader from './screens/ABUDevHeader';
import Profiles from './screens/Profiles'
import Settings from './screens/Settings';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./imgs/abu-logo-2.png')}
        style={styles.image}
      />
      <Text style={styles.headerText}>ABUDev</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 100
  },

  image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  }, 
  
  headerText: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 5,
    fontStyle: 'normal',
    marginLeft: 20 
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName = "Welcome"
          screenOptions = {{
            headerStyle: { backgroundColor: 'green'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>

        <Stack.Screen
          name="Login"
          component = {Login}
        />

        <Stack.Screen 
          options={{
            title: 'Home',
            headerTitle: (props) => <LogoTitle {...props} />
          }}
          name="Welcome" 
          component ={ABUDevHeader} 
        />

        <Stack.Screen
          name = "Profiles"
          component = {Profiles}
        />

        <Stack.Screen
          name = "Settings"
          component = {Settings}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
