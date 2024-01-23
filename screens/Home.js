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
    { id: 1, label: 'Light Bill', description: 'Remembering to pay your light bill is a hassle; with AutoCedi, you will never miss it', link: 'AutomationDetails' },
    { id: 2, label: 'School', description: 'This can be annoying when you have to do it regularly; with AutoCedi you will never miss it', link: 'AutomationDetails' },
    { id: 3, label: 'Loan', description: 'You can automate this; go ahead and do it with AutoCedi', link: 'AutomationDetails' },
    { id: 4, label: 'Payment', description: 'Automate all your payments with AutoCedi', link: 'AutomationDetails' },
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
                <Image source={require('../assets/cedi_lightbg.png')} style={styles.image} />
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
    backgroundColor: "#000",
    borderRadius: 10,
  },
  topText: {
    padding: 15,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    color:"#fff"
  },
  scrollView: {
    // height: windowHeight,
    backgroundColor: "#f7f6f1",
    marginTop: 30,
  },
  bottomHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 0, // Adjust margin as needed
    marginTop: 20, // Adjust margin as needed
  },
  bottomHeaderText: {
    color: "grey",
    fontSize: 16, // Adjust font size
  },
  bottomContainer: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15, // Adjust as needed
    padding: 10, // Adjust padding for consistency
  },
  bottomListContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    objectFit:"contain"
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
    width: "70%", // Adjust the width as needed
    justifyContent: "flex-end",
    marginLeft: 10, // Adjust margin as needed
  },
  descriptionText: {
    color: "grey",
    marginTop: 10,
  }
});

export default Home;
