import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Login from './screens/Login';
import ABUDevHeader from './screens/ABUDevHeader';
import PDF from './screens/PDF';
import Settings from './screens/Settings';
import HomeScreen from './screens/HomeScreen';
import Icon from './component/shared/Icon';

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

function HomePDFSettingsTitle({ navigation, route}) {
  let headerTitle = '';

  if (route.name === 'Home') {
    headerTitle = 'Home';
  } else if (route.name === 'PDF') {
    headerTitle = 'PDF';
  } else if (route.name === 'Settings') {
    headerTitle = 'Settings';
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./imgs/abu-logo-2.png')}
        style = {styles.image}
      />
      <Text style={styles.headerText}>{headerTitle}</Text>
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

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home'; // Icon for Home
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline'; // Icon for Settings
          }
          else if (route.name === 'PDF') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          // Return the Ionicons component with the correct icon name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#205922',
        tabBarInactiveTintColor: 'gray',

        headerStyle: { backgroundColor: '#205922' },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      })}
    >

      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ route }) => ({ 
          // tabBarLabel: 'Home' 
          title: 'Home',
          headerTitle: (props) => <HomePDFSettingsTitle {...props} route = {route} />,
          headerShown: false
        })} 
      />

      <Tab.Screen 
        name="PDF" 
        component={PDF} 
        options={({ route }) => ({ 
          // tabBarLabel: 'PDF' 
          title: 'PDF',
          headerTitle: (props) => <HomePDFSettingsTitle {...props} route = {route} />
        })} 
      />

      <Tab.Screen 
        name="Settings" 
        component={Settings}  
        options={({ route }) => ({ 
          // tabBarLabel: 'Settings' 
          title: 'Settings',
          headerTitle: (props) => <HomePDFSettingsTitle {...props} route = {route} />
        })}
      />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#205922' },
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
