import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AutomationDetails = () => {
  // navigation
  const navigation = useNavigation();

  const handleCreateRule = () => {
    navigation.navigate('ConfirmAutomation');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topbarContainer}>
        <View style={styles.container}>
          <View style={styles.topbarItemIcontainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.topbarText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.topbarText}> Details</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.container}>
        <ScrollView style={styles.bigCardContainer}>

          <View style={styles.logo}>
            <Image source={require('../assets/cedi_lightbg.png')} style={{ width: 60, height: 60 ,objectFit:"contain"}} />
          </View>

          {/* Amount Section */}
          <View style={styles.amountSection}>
            {/* Amount Text */}
            <Text style={styles.amountText}>Amount</Text>

            {/* Actual Amount */}
            <Text style={styles.amount}>₵500</Text>
          </View>

        </ScrollView>

        {/* Payment Conditions and Others */}
        <ScrollView style={styles.smallCardContainer}>
          <Text style={styles.sectionHeader}>Payment Conditions</Text>
          <View style={styles.sectionItem}>
            <Text>Label</Text>
            <Text>Light Bill</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text>Trigger</Text>
            <Text>When I receive money</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text>Check if</Text>
            <Text>Amount Equal to ₵200</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text>Pay Amount</Text>
            <Text>₵300</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text>Pay To</Text>
            <Text>Ecedi wallet</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text>Account Number</Text>
            <Text> 784377887785</Text>
          </View>
        </ScrollView>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topbarContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: '#fff',
    paddingTop: '2%',
  },
  topbarItemIcontainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  topbarText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 250,
    padding: 20,
    marginBottom: 20
  },
  smallCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 300,
    padding: 20,
  },
  amountText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  amountSection: {
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  columnContainer: {
    marginRight: 20,
  },
  amountText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  amountSection: {
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  sectionItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomColor: '#e8b938',
    borderBottomWidth: 0.3,
    paddingBottom: 5,
  },
  accountNumber: {
    display: "flex",
  },
});

export default AutomationDetails;
