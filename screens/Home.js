import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;

  const handleCreateAutomationPress = () => {
    navigation.navigate('Automation');
  };

  const automationData = [
    { id: 1, label: 'Light Bill', description: 'These examples are programmatically compiled from various online out these examples.', link: 'LightBillScreen' },
    { id: 2, label: 'School', description: 'These examples are programmatically compiled from various online out these examples.', link: 'SchoolScreen' },
    { id: 3, label: 'Payment', description: 'These examples are programmatically compiled from various online out these examples.', link: 'PaymentScreen' },
    { id: 4, label: 'Payment', description: 'These examples are programmatically compiled from various online out these examples.', link: 'PaymentScreen' },
  ];

  const handleAutomationPress = (link) => {
    navigation.navigate(link);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={handleCreateAutomationPress}>
            <Text style={styles.topText}>Create Automations</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={[styles.scrollView,{height:windowHeight}]}>
        <View style={styles.bottomHeader}>
          <View>
            <Text style={styles.bottomHeaderText}>Recent Automations</Text>
          </View>
        </View>

        {automationData.map(automationItem => (
          <TouchableOpacity key={automationItem.id} style={styles.bottomContainer} onPress={() => handleAutomationPress(automationItem.link)}>
            <View style={styles.bottomListContainer}>
              <View>
                <Text>{automationItem.label}</Text>
                <Image source={require('../assets/auto.png')} style={styles.image} />
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeader}>Description</Text>
                <Text style={styles.descriptionText}>{automationItem.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

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
  scrollView: {
    // height: windowHeight,
    backgroundColor: "white",
    marginTop: 30,
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
  bottomContainer: {
    backgroundColor: "#dfeef7",
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  bottomListContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  largeImage: {
    width: 40,
    height: 40,
  },
  descriptionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  descriptionContainer: {
    width: 250,
    justifyContent: "flex-end",
  },
  descriptionText: {
    color: "grey",
    marginTop: 10,
  }
});

export default Home;
