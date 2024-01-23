import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Welcome to my Settings
            </Text>

            <View style={{
                flexDirection: 'row', 
                paddingRight: 100, 
                paddingLeft: 45, 
                alignSelf: 'center', 
                backgroundColor: '#205922', 
                borderRadius: 50
            }}>
                <View style={{ marginBottom: 30, paddingRight: 20, paddingLeft: 50}}>
                    <Text style={styles.mission}>MISSION of ABUDev</Text>
                    <Text style={styles.mission_body}>
                        The Club's mission is to 
                        propagate and nurture creavtivity and 
                        innovation amongst the students 
                        of Ahmadu Bello University.
                    </Text>
                </View>

                <View style={{ paddingLeft: 20}}>
                    <Text style={styles.vision}>VISSION of ABUDev</Text>
                    <Text style={styles.vision_body}>
                        Our vision is to be technological 
                        catalysts in Ahmadu Bello University, 
                        enabling ICT proficient students who 
                        would be more than just observers 
                        of technological development.
                    </Text>
                </View> 
            </View>

            <TouchableOpacity
                onPress={() => NavigationPreloadManager.navigate("")}
            >
                <Text>About ABU</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings;

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