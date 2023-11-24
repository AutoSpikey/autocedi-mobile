import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    
    <ScrollView>

        
      <View style={styles.top}>
        <Text>hanburger</Text>
      <Image source={require('../assets/auto.png')} style={{ width: 30, height: 30 }} />
        <Text>profile</Text>
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  top:{
    width:'100%',
    // backgroundColor:"#6eb1db",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:20,
    padding:5,
  }
});

export default Home