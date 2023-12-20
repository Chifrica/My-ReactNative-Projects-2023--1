import * as React from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet, ImageBackground, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from '../component/shared/MainHeader';
import MapView from 'react-native-maps';



const PDF = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to PDF Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 0.3,
    },

    
})

export default PDF;