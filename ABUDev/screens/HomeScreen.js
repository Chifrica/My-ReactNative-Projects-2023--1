import React, { useState } from 'react';
import { 
    View, 
    Text, 
    KeyboardAvoidingView, 
    ScrollView, 
    Platform, 
    StyleSheet, 
    TextInput, 
    Image,
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const HomeScreen = () => {
    const GOOGLE_MAP_API = "AIzaSyBONkL-hFoFvqhfCurlGBtkxxskoBhqftk"


    // State for the start and end points of our journey.
    
    const pickupCords = {
        latitude: 11.085541, 
        longitude: 7.719945,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const destinationCords = {
        latitude: 11.0666664, 
        longitude: 7.6999972,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    return (
        <KeyboardAvoidingView
            style = { styles.container}
            behavior  = { Platform.OS === 'ios' ? 'padding' : null }
        >
            <View styles = { styles.container }>
                {/* <Text style={styles.txt}>
                    What are you looking at ABU? Search here!
                </Text> */}

                {/*Search Input and Notifications*/}
                <View style={styles.containerSearchingNotification}>
                    <TextInput 
                        placeholder='Search'
                        value=''
                        style={styles.searchContainer}
                    />

                    <Image 
                        source={require('../imgs/notification-icon.png')}
                        style={styles.notification_icon}
                    />
                </View>        
            </View>

            <ScrollView contentContainerStyle = {{flexGrow: null}}>

                <MapView
                    mapType={Platform.OS == "android" ? "non" : "standard"}
                    style = {styles.map}
                    initialRegion={
                        pickupCords
                    }
                >
                    <MapViewDirections
                        origin={pickupCords}
                        destination={destinationCords}
                        apikey={GOOGLE_MAP_API}
                        strokeWidth={3}
                        strokeColor='hotPink'
                    />

                </MapView>

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
        padding: 10,
    },

    containerSearchingNotification: {
        flexDirection: 'row',
        // alignItems: "center",
        // justifyContent: "space-between",
        paddingTop: 20,
        paddingLeft: 10
    },

    searchContainer: {
        height: 40,
        width: 271,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#205922',
        borderRadius: 32,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    notification_icon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: 15
    },

    map: {
        height: 600,
        width: 400,
        borderRadius: 30,
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