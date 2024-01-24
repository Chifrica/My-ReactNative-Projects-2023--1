import { Image, ImageBackground, Text, View, StyleSheet } from "react-native"

const ABUScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to ABU</Text>

            <Text>Ahmadu Bello University encompasses t2o campuses twelve faculties and eighty two departments</Text>

            <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/1'}}
                // source={require('../imgs/Location-icon.png')}
            >
                <Text>Programme</Text>
            </ImageBackground>
        </View>
    )
}
export default ABUScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
    },

})