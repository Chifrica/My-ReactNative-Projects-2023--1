import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from './screens/Login';
import ABUDevHeader from './screens/ABUDevHeader';
import Profiles from './screens/Profiles';
import Settings from './screens/Settings';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'ios-home' : 'ios-home'; // Icon for Home
          } else if (route.name === 'SettingsTab') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline'; // Icon for Settings
          }
          else if (route.name === 'ProfileTab') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          // Return the Ionicons component with the correct icon name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="ProfileTab" component={Profiles} options={{ tabBarLabel: 'Profile' }} />
      <Tab.Screen name="SettingsTab" component={Settings} options={{ tabBarLabel: 'Settings' }} />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitle: (props) => <LogoTitle {...props} />
          }}
        />

        <Stack.Screen
          name="Welcome"
          component={ABUDevHeader}
          options={{
            title: 'Home',
            headerTitle: (props) => <LogoTitle {...props} />
          }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
