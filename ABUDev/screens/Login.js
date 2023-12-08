import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = ({ navigation }) => {
    const [email, onChangeFirstName] = useState('');
    const [password, onChangePassword] = useState('');
    
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Offline</Text>
                </TouchableOpacity>

                <Image 
                    source={require('../imgs/abu-logo-1.png')}
                    style = {styles.image}
                />
                
                <View style = { styles.loginContainer}>
                    
                    <Text style={styles.loginText}>Login</Text>

                    <TextInput 
                        placeholder="Email" 
                        value={email} 
                        onChangeText={onChangeFirstName} 
                        style={styles.textInput}
                    />

                    <TextInput 
                        secureTextEntry 
                        placeholder="Senha" 
                        value={password} 
                        onChangeText={onChangePassword} 
                        style={styles.textInput}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                        style={styles.loginButton}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.forget}>Forgotten Password?</Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.signUpButton}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    btn: {
        // height: 50,
        top: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },

    image:{
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: 65
    },

    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    loginContainer: {
        flex: 1,
        padding: 15,
        paddingHorizontal: 8,
        marginVertical: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.88)'
    },

    loginText: {
        fontSize: 40,
        color: '#333',
        height: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
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

    loginButton: {
        backgroundColor: '#205922',
        width: 109,
        padding: 15,
        marginTop: 20,
        borderRadius: 16,
        marginBottom: 10,
        alignSelf: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    forget: {
        alignSelf: 'flex-end',
        paddingTop: 20,
        paddingBottom: 30,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },

    signUpButton: {
        backgroundColor: '#205922',
        padding: 15,
        marginTop: 50,
        borderRadius: 16,
        alignItems: 'center',

    }
})
