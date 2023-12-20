import { StyleSheet, Text, View, ScrollView, ImageBackground, Pressable } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ABUDevHeader = ({navigation}) => {
    return (
        <View>
            
            <ImageBackground 
                source = {require('../imgs/abu-logo-2.png')}
                style = {styles.imageBackground}
                resizeMode="contain"
            >
                
                <View style = { styles.container}>
                    <Pressable onPress={() => navigation.navigate('PDF')}>
                        <Text>
                            PDF
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text>
                            Login
                        </Text>
                    </Pressable>

                    <Pressable onPress = {() => navigator.goBack()}>
                        <Text>
                            Go back
                        </Text>
                    </Pressable>
                </View>

            </ImageBackground>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 15
    },

    imageBackground: {
        // justifyContent: 'center',
        paddingTop: 50,
        height: 500,
        width: 400
    },

    // loginHeadingText: {
    //     color: '#205922',
    //     // display: 'flex',
    //     alignItems: center,

    // }
})

export default ABUDevHeader;