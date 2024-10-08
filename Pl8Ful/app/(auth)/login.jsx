import React, { useState, useEffect } from "react"; 
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, Button } from "react-native";
import loginStyles from "../styleSheets/loginStyles";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import { ImageBackground } from "react-native";


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <ImageBackground 
            source={require('../../assets/images/food_bg.png')}
            style={loginStyles.background}
        >
            <View style={loginStyles.loginContainer}>
                <Text style={loginStyles.loginHeader}>Pl8FUL!</Text>
                <TextInput 
                    placeholder="Email" 
                    value={""}
                    placeholderTextColor= "#8a8a8a" 
                    style={loginStyles.loginInput} 
                    onChangeText={() => {}}
                    autoCapitalize="none"
                />
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor= "#8a8a8a" 
                    style={loginStyles.loginInput}
                    onChangeText={() => {}}
                    autoCapitalize="none"
                    secureTextEntry
                />
                <TouchableOpacity style={loginStyles.loginButton} onPress={() => {}}>
                    <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity> 
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;