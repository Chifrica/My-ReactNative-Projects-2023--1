import * as React from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHeader from '../component/shared/MainHeader';


const Profiles = ({navigation}) => {
    return (
        <View style={styles.container}>
            <MainHeader />
            <ImageBackground 
                style={styles.image}
                resizeMode='contain'
                source={require('../imgs/abu-logo-2.png')}
            >
            <Text style={styles.title} onPress={() => navigation.navigate('Settings')}>
                Welcome to my Profile.
            </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 0.3,
    },

    image: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 50,
        height: 500,
        width: 400
    },

    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#3333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Profiles;