import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ImageBackground } from "react-native-web";

const About = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={reqiure('../imgs/.png')}>
                <TouchableOpacity
                    style={{
                        paddingLeft: 5,
                        paddingTop: 50
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../imgs/backVector.png')} />
                </TouchableOpacity>
                <Text>About</Text>
            </ImageBackground>
            <Text></Text>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

    header: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 20
    },

    vision: {
        fontWeight: 'bold',
        // alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        paddingTop: 20
    },

    
    mission: {
        fontWeight: 'bold',
        // alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        paddingTop: 20
    },

    vision_body: {
        alignSelf: 'center',
        paddingTop: 10,
        color: 'white',
        // marginRight: 100, 

    },
    
    mission_body: {
        paddingTop: 10,
        color: 'white',
        // alignSelf: 'center',
        // marginRight: 150,
        // paddingRight: 150
    }
});