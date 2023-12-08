import * as React from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput, 
    Text, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform ,
    Alert
} from 'react-native'

export default function FeedBackForms () {
    const [firstName, onChangedFirstName] = React.useState('');
    const [lastName, onChangedLastName] = React.useState('');
    const [ message, onChangedMessage] = React.useState('');
    const [ phoneNumber, onChanedPhoneNumber] = React.useState('');

    return (
        <KeyboardAvoidingView 
            style = {styles.container} 
            behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}>
                {/* KeyboardDismissMode removes the keyboard while scrolling */}
            <ScrollView keyboardDismissMode = {"on-drag"}>
                <Text style = {styles.headingSection}>
                    How was your visit to LittleLemon?
                </Text>

                <Text style = {styles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but causal environment. We would love 
                    to hear your experience with us!
                </Text>

            {/* First Name */}
                <TextInput 
                    value = {firstName} 
                    onChangedText = {onChangedFirstName} 
                    style = {styles.input} 
                    placeholder = { 'First Name'}
                    // To prompt out a message before typing
                    onFocus = {() => Alert.alert("First name is focused")}
                    // To prompt out a message after typing
                    onBlur = {() => Alert.alert("First name is now blurred")}
                    // Clear button shows an icon to remove text on the box
                    clearButtonMode = {'always'}
                />

            {/* Last Name */}
                <TextInput 
                    value = {lastName}
                    onChangedText = {onChangedLastName}
                    style = {styles.margin}
                    placeholder = { ' Last Name'}
                    // Clear button shows an icon to remove text on the box
                    clearButtonMode = {'always'}
                />

            {/* Phone Number */}
                <TextInput 
                    value = {phoneNumber}
                    onChangedText = {onChanedPhoneNumber}
                    style = {styles.input}
                    placeholder = {'Phone Number'}
                    // Changing the input type to numbers
                    keyboardType = { 'phone-pad' }
                />

            {/* Feedback */}
                <TextInput 
                    value = {message}
                    onChangedText = {onChangedMessage}
                    style = {styles.input}
                    placeholder = { 'Please leave feedback' }
                    // Aproving multiple lines
                    multiline = {true}
                    // Character length to 250 maximum
                    maxLength = {250}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495e57'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14',
    },

    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },

    infoSection: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57'
    },

    headingSection: {
        fontSize: 28,
        padding: 30,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    }
})