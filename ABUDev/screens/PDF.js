import * as React from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet, ImageBackground, Platform} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MainHeader from '../component/shared/MainHeader';
// import MapView from 'react-native-maps';

import DocumentPicker from 'react-native-document-picker';
import PDFReader from './PDFReader';


const PDF = ({navigation}) => {
    const [pdfUri, setPdfUri] = useState(null);
    const pickDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });
            setPdfUri(res.uri);
        } catch (err) {
            if (DocumentPicker.isCancel(err)){
                console.log('User cancelled the picker');
            } else {
                console.log('Error picking the document', err)
            }
        }
    };
    return (
        <View style={styles.container}>
            {pdfUri ? (
                <PDFReader pdfUri={pdfUri} />
            ) : (
                <Button title="Select PDF" onPress={pickDocument} />
            )}
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 0.3,
    },

    
})

export default PDF;