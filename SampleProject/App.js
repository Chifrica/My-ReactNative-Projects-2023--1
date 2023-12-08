import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// Import a Local component here
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import FeedBackForms from './components/FeedBackForms';
export default function App() {
  return (
    <View 
      style={styles.container}>
      <LittleLemonHeader />
      <MenuItems />
      <FeedBackForms />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#495E57'
  }
})