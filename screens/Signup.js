import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Client from "../lib/clients"


const Signup = () => {

  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // Navigate to the Signin screen
  const handleAlreadyHaveAnAccountPress = () => {
    navigation.navigate('Signin');
  };




  // handle registration
  async function handleRegister() {
    setIsLoading(true);

    // validate the fields
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    console.log(firstName,lastName,phone,email)

    const payload = { firstName, lastName, email, password, phone, };

    const registrationPromise = Client.register(payload);

    registrationPromise
      .then(() => {
        setError(null);
        setIsLoading(false);
        navigation.navigate('Signin');
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  // handle signup press
  const handleSignUpPress = () => {
    // handleRegister();
    navigation.navigate('Signin');
  }


  return (
    <KeyboardAwareScrollView style={{ flex: 1, }}>

      <View style={styles.upperContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/cedi_lightbg.png')} style={styles.image} />
        </View>

        <ScrollView style={styles.container}>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder='First Name'
              placeholderTextColor="grey"
              style={styles.input}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              placeholder='Second Name'
              placeholderTextColor="grey"
              style={styles.input}
              onChangeText={(text) => setLastName(text)}
            />

            {/* Add onChangeText to update the phone state */}
            <TextInput
              placeholder='Phone Number'
              placeholderTextColor="grey"
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
            />

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

          <TouchableOpacity style={styles.SignupButton} onPress={handleSignUpPress}>
            <Text style={styles.SignupButtonText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createAccountButton} onPress={handleAlreadyHaveAnAccountPress}>
            <Text style={styles.createAccountButtonText}>Already have an account?</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    marginTop: 30,
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
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    paddingBottom: 20,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
    objectFit: "contain"
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
  SignupButton: {
    padding: 15,
    backgroundColor: '#000',
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
