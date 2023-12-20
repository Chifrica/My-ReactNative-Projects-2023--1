import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    ScrollView,
    Alert
} from 'react-native';

const MAX_ATTEMPTS = 5;
const CORRECT_EMAIL = 'admin';
const CORRECT_PASSWORD = 'admin';

const Login = ({ navigation }) => {
    const [email, onChangeFirstName] = useState('');
    const [password, onChangePassword] = useState('');
    const [attempts, setAttempts] = useState(0);

    // HandleLogin function
    const handleLogin = () => {
        if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
            navigation.navigate('MainTabs');
        } else {
            setAttempts (attempts + 1);
            const remaingingAttempts = MAX_ATTEMPTS - attempts - 1;
            if (remaingingAttempts === 0) {
                alert.alert(
                    'Login Failed', 
                    'Maximum login attempts reached. Please try again later.'
                );
            } else {
                Alert.alert(
                    'Login Failed',
                    `Incorrect email or password. You have ${remaingingAttempts} attempts remaining.`
                );
            }
        }
    }
    
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <ScrollView contentContainerStyle = {{ flexGrow: null}}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PDF')}
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

                        {/* Email TextInput */}
                        <TextInput 
                            placeholder="Email" 
                            value={email} 
                            onChangeText={onChangeFirstName} 
                            style={styles.textInput}
                        />

                        {/* Password TextInput */}
                        <TextInput 
                            secureTextEntry 
                            placeholder="Password" 
                            value={password} 
                            onChangeText={onChangePassword} 
                            style={styles.textInput}
                        />

                        {/* Login Button */}
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.loginButton}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <Text style={styles.forget}>Forgotten Password?</Text>
                    </View>

                    {/* SignUp Button*/}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.signUpButton}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        elevation: 10
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
        alignSelf: 'center',
        elevation: 10
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
        marginTop: 20,
        borderRadius: 16,
        alignItems: 'center',
        elevation: 10
    }
})
