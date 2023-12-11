import * as React from 'react'
import {View, Text, KeyboardAvoidingView, ScrollView, Platform, StyleSheet, TextInput, Image} from 'react-native';

const HomeScreen = () => {
    return (
        <KeyboardAvoidingView
            style = { styles.container}
            behavior  = { Platform.OS === 'ios' ? 'padding' : null }
        >
            <View styles = { styles.container }>
                <Text style={styles.txt}>
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

            <ScrollView contentContainerStyle = {{flexGrow: null}}>
                {/*Loctaion image*/}
                <Text style={styles.txt}>
                    ABU Seren Image
                </Text>
                <Image 
                    source={require('../imgs/Rectangle-7.png')} 
                    style={styles.imageLocator_large}
                />
                <Text style={{ color: '#205922', fontSize: 30, fontWeight: 'bold', paddingBottom:20, alignSelf: 'center' }}>
                    Venues Near Me
                </Text>
                

                <View style={styles.venues}>
                    <Image 
                        source={require('../imgs/Rectangle-7.png')}
                        style={styles.imageLocator_small}
                    />
                    <View style={styles.venuesLocation}>
                        <Text style={styles.txtVenuesLocation_1}>Chapel of Redemption</Text>
                        <Text style={styles.txtVenuesLocation_2}>0.3km from here</Text>
                    </View>

                    <Image 
                        source={require('../imgs/Location-icon.png')}
                        style={styles.location_icons}
                    />

                    <Image 
                        source={require('../imgs/Star-rate.png')}
                        style = {styles.star_rate}
                    />
                </View>

                <View style={styles.venues}>
                    <Image 
                        source={require('../imgs/Rectangle-7.png')}
                        style={styles.imageLocator_small}
                    />
                    <View style={styles.venuesLocation}>
                        <Text style={styles.txtVenuesLocation_1}>Social Center</Text>
                        <Text style={styles.txtVenuesLocation_2}>0.5km from here</Text>
                    </View>

                    <Image 
                        source={require('../imgs/Location-icon.png')}
                        style={styles.location_icons}
                    />

<Image 
                        source={require('../imgs/Star-rate.png')}
                        style = {styles.star_rate}
                    />

                </View>

                <View style={styles.venues}>
                    <Image 
                        source={require('../imgs/Rectangle-7.png')}
                        style={styles.imageLocator_small}
                    />
                    <View style={styles.venuesLocation}>
                        <Text style={styles.txtVenuesLocation_1}>Amina Hall</Text>
                        <Text style={styles.txtVenuesLocation_2}>0.7km from here</Text>
                    </View>

                    <Image 
                        source={require('../imgs/Location-icon.png')}
                        style={styles.location_icons}
                    />

                </View>

                <View style={styles.venues}>
                    <Image 
                        source={require('../imgs/Rectangle-7.png')}
                        style={styles.imageLocator_small}
                    />
                    <View style={styles.venuesLocation}>
                        <Text style={styles.txtVenuesLocation_1}>Aluta Bus-Stop</Text>
                        <Text style={styles.txtVenuesLocation_2}>0.9km from here</Text>
                    </View>

                    <Image 
                        source={require('../imgs/Location-icon.png')}
                        style={styles.location_icons}
                    />

<Image 
                        source={require('../imgs/Star-rate.png')}
                        style = {styles.star_rate}
                    />

                </View>

                <View style={styles.venues}>
                    <Image 
                        source={require('../imgs/Rectangle-7.png')}
                        style={styles.imageLocator_small}
                    />
                    <View style={styles.venuesLocation}>
                        <Text style={styles.txtVenuesLocation_1}>Basket Ball Center</Text>
                        <Text style={styles.txtVenuesLocation_2}>0.9km from here</Text>
                    </View>

                    <Image 
                        source={require('../imgs/Location-icon.png')}
                        style={styles.location_icons}
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

    txt: {
        fontSize: 20,
        fontWeight: '100',
        paddingTop: 15,
        paddingBottom: 15
    },

    textInput: {
        height: 40,
        width: 271,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#205922',
        borderRadius: 32,
        paddingHorizontal: 10,
    },

    imageLocator_large: {
        height: 300,
        width: 400,
        borderRadius: 30,
        position: 'relative',
        alignSelf: 'center',
        marginBottom: 20
    },

    venues: {
        flexDirection: 'row',
        paddingBottom: 20
        
    },

    imageLocator_small: {
        height: 50,
        width: 50,
        borderRadius: 8
    },

    venuesLocation: {
        flexDirection: 'column'
    },

    location_icons: {
        marginLeft: 30,
        marginTop: 10,
        paddingLeft: 15,
        height: 20,
        width: 10
    },

    star_rate: {
        marginLeft: 10,
        marginTop: 9
    },

    txtVenuesLocation_1: {
        fontSize: 20,
        lineHeight: 30,
        paddingLeft: 20,
        fontWeight: 'bold'
    },

    txtVenuesLocation_2: {
        fontSize: 15,
        lineHeight: 30,
        paddingLeft: 20
    }

})

export default HomeScreen;