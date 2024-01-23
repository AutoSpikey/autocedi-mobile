import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import * as Client from "../lib/clients"

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();
  

  const navigation = useNavigation();

  const handleSigninPress = () => {
    navigation.navigate('Home');
  }

  const handleCreateNewAccountPress = () => {
    navigation.navigate('Signup');
  };

  return (
    // <SafeAreaView>
    <KeyboardAwareScrollView>

      <View style={styles.upperContainer}>

        <View style={styles.logoContainer}>
          <Image source={require('../assets/cedi_lightbg.png')} style={styles.image} />
        </View>

        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome Back, you've been missed!</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email'
              placeholderTextColor="grey"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder='Password'
              secureTextEntry
              placeholderTextColor="grey"
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>

          <TouchableOpacity style={styles.signInButton} onPress={handleSigninPress}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateNewAccountPress}>
            <Text style={styles.createAccountButtonText}>Create new account.</Text>
          </TouchableOpacity>
        </View>


      </View>
    </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    marginTop: 50,
  },
  centeredView: {
    alignItems: 'center',
    marginTop: '10%',
    paddingLeft: 10,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    objectFit:"contain"
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  autoCediText: {
    color: '#000',
  },
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop:30
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 0,
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    fontWeight: '500',
  },
  signInButton: {
    padding: 15,
    backgroundColor: '#000',
    marginVertical: 20,
    borderRadius: 10,
  },
  signInButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  createAccountButton: {
    padding: 15,
  },
  createAccountButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Signin;
