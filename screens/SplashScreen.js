// SplashScreen.js
import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import splashslogo from "../assets/cedi_lightbg.png"

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a 5-second splash screen
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 5000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={splashslogo}  style={styles.logo}/>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
    },
    logo:{
        width:200,
        height:200,
        objectFit:"contain",
    }
})

export default SplashScreen;
