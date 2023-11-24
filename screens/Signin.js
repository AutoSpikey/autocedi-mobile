import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {

    const navigation = useNavigation();

    const handleSigninPress = () => {
        // Navigate to the Home screen
        navigation.navigate('Home');
    }

    const handleCreateNewAccountPress = () => {
        // Navigate to the Signup screen
        navigation.navigate('Signup');
    };

  return (
    // <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require("../assets/wave.png")} style={styles.imageBackground}>
          <View style={styles.centeredView}>
            <Text style={styles.loginText}>Login <Text style={styles.autoCediText}>autoCEDI</Text></Text>
          </View>
        </ImageBackground>

        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome Back, you've been missed!</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email'
              placeholderTextColor="grey"
              style={styles.input}
            />
            <TextInput
              placeholder='Password'
              secureTextEntry
              placeholderTextColor="grey"
              style={styles.input}
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
      </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 200,
  },
  centeredView: {
    alignItems: 'center',
    marginTop: '10%',
    paddingLeft: 10,
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
    backgroundColor: '#dfeef7',
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
    backgroundColor: '#6eb1db',
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
