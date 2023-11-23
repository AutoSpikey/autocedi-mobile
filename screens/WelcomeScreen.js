// WelcomeScreen.js
import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, StyleSheet, } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';


const {height} = Dimensions.get("window")


const WelcomeScreen = () => {

const navigation = useNavigation();

const handleGetStartedPress = () => {
    // Navigate to the Signin screen
    navigation.navigate('Signin');
  };


  return (
    <SafeAreaView>
        <View >
            
            <Video
            source={require('../assets/b.mp4')} // Replace with the path to your MP4 file
            style={{ height:400, width: '100%', position: '' }}
            resizeMode="cover"
            shouldPlay
            isLooping
            />

        <View style={{ paddingTop: 50, height: height - 300, backgroundColor: "#fff" }}>
          <View>
            <Text style={styles.text}>Welcome to Autocedi</Text>

            <Text style={[styles.text, { fontSize: 15, marginTop: 20 }]}>Easy way to make payment authomatically </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGetStartedPress}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  buttonsContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#6eb1db",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "48%",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});

export default WelcomeScreen;
