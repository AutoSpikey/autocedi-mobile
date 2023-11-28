import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()

  const windowHeight = Dimensions.get('window').height;

  const handleCreateAutomationPress = ()=>{
    navigation.navigate('Automation')
  }

  return (

    <View>

      <View style={styles.container}>

        <View style={[styles.top,]}>
          <TouchableOpacity
          onPress={handleCreateAutomationPress}
          >
            <Text style={styles.topText} >Create Automations</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ height: windowHeight, backgroundColor: "white", marginTop: 30 }}>
        <View style={styles.bottomHeader}>
          <View>
            <Text style={styles.bottomHeaderText}>Recent Automations</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bottomContainer}>
          <View style={styles.bottomListContainer}>

            <View>
              <Text>Payment</Text>
              <Image source={require('../assets/auto.png')} style={{ width: 40, height: 40 }} />
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionHeader}>Description</Text>
              <Text style={styles.descriptionText}>These examples are programmatically compiled from various online out these examples.</Text>
            </View>

          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomContainer}>
          <View style={styles.bottomListContainer}>

            <View>
              <Text>Payment</Text>
              <Image source={require('../assets/auto.png')} style={{ width: 40, height: 40 }} />
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionHeader}>Description</Text>
              <Text style={styles.descriptionText}>These examples are programmatically compiled from various online out these examples.</Text>
            </View>

          </View>
        </TouchableOpacity>

      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  top: {
    marginTop: 30,
    backgroundColor: "#dfeef7",
    borderRadius: 10,
  },
  topText: {
    padding: 15,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500"
  },
  bottomContainer: {
    backgroundColor: "#dfeef7",
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  bottomHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  bottomHeaderText: {
    color: "grey"
  },
  bottomListContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  descriptionHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  descriptionContainer:{
    width:250,
    justifyContent:"flex-end",
  },
  descriptionText:{
    color:"grey",
    // width:300
  }
});

export default Home