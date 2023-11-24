import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {

    const navigation = useNavigation();

    const handleAlreadyHaveAnAccountPress = () => {
        // Navigate to the Signin screen
        navigation.navigate('Signin');
    };


  return (
    // <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require("../assets/wave2.png")} style={styles.imageBackground}>
          <View style={styles.centeredView}>
            <Text style={styles.SignupText}>Signup <Text style={styles.autoCediText}>autoCEDI</Text></Text>
          </View>
        </ImageBackground>

        <View style={styles.container}>

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
            <TextInput
              placeholder='Confirm Password'
              secureTextEntry
              placeholderTextColor="grey"
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.SignupButton}>
            <Text style={styles.SignupButtonText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createAccountButton} onPress={handleAlreadyHaveAnAccountPress}>
            <Text style={styles.createAccountButtonText}>Already have an account?</Text>
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
  SignupText: {
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
  SignupButton: {
    padding: 15,
    backgroundColor: '#6eb1db',
    marginVertical: 20,
    borderRadius: 10,
  },
  SignupButtonText: {
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

export default Signup;
