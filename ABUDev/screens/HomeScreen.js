import * as React from 'react'
import {View, Text, KeyboardAvoidingView, ScrollView, Platform, StyleSheet, TextInput, Image} from 'react-native';

const HomeScreen = () => {
    return (
        <KeyboardAvoidingView
            style = { styles.container}
            behavior  = { Platform.OS === 'ios' ? 'padding' : null }
        >
            <View styles = { styles.container }>
                <Text>
                    What are you looking at ABU? Search here!
                </Text>

                {/*Search Input and Notifications*/}
                <View>
                    <TextInput 
                        placeholder='Search'
                        value=''
                        style={styles.textInput}
                    />

                    
                </View>        
            </View>

            <ScrollView contentContainerStyle = {{ flexGrow: null }}>
                {/*Loctaion image*/}
                <Text>
                    ABU Seren Image
                </Text>
                <Image 
                    source={require('../imgs/abu-logo-1.png')} 
                    style={styles.imageLocator_large}
                />
                <Text style={{ color: '#205922', fontWeight: 'bold' }}>
                    Venues Near Me
                </Text>
                <View style={styles.venues}>
                    <Image 
                        source={require('../imgs/abu-logo-2.png')}
                        style={styles.imageLocator_small}
                    />


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
    },

    textInput: {
        height: 40,
        width: 271,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#205922',
        borderRadius: 8,
        paddingHorizontal: 10,
    },

    imageLocator_large: {
        height: 50,
        width: 50,
        borderRadius: 8
    },

    venues: {
        flexDirection: 'row',
        
    },

    imageLocator_small: {
        height: 10,
        width: 10,
        borderRadius: 8
    }

})

export default HomeScreen;