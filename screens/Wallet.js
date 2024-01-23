// Import necessary modules
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define the Wallet component
const Wallet = () => {
    const navigation = useNavigation();
    const handleCreateAutomation = () => {
        navigation.navigate('Automation');
    }

    // Generate random values for Card Balance
    const ecediBalanceValue = Math.floor(Math.random() * 1000) + 1; // Change the range according to your requirements

    // Mock data for recent payments
    const recentPayments = [
        { amount: 50, description: 'Payment for groceries' },
        { amount: 25, description: 'Coffee shop purchase' },
    ];

    return (
        <ScrollView style={[styles.container, { flex: 1 }]}>
            {/* Welcome Section */}
            <View style={styles.welcomeUserContainer}>
                <Text>
                    <Text style={[styles.welcomeText, styles.boldText]}>Welcome</Text>,{' '}
                    <Text style={styles.userText}>James</Text>!
                </Text>
            </View>

            {/* Wallet Cards Section */}
            <View style={styles.walletCardContainer}>
                {/* Small Wallet Cards */}
                <View style={styles.smallWalletCardContainer}>
                    <View style={styles.smallWalletCard}>
                        <Text style={styles.cardLabel}>eCedi Balance</Text>
                        <Text style={styles.cardValue}>₵{ecediBalanceValue}</Text>
                        <Text style={styles.cardSmallText}>₵{ecediBalanceValue} ecedi available</Text>
                    </View>

                    <View style={styles.smallWalletCard}>
                        {/* Current Activity Section with Simple Bar Chart */}
                        {/* Monthly Spent Cash Text */}
                        <View style={styles.currentActivityContainer}>
                            <Text style={styles.monthlySpentText}>Monthly Spent: ₵500</Text>
                            {/* Bar Chart */}
                            <View style={styles.barChart}>
                                <View style={[styles.bar, { height: 20, width: 5 }]}></View>
                                <View style={[styles.bar, { height: 30, width: 5 }]}></View>
                                <View style={[styles.bar, { height: 40, width: 5 }]}></View>
                                <View style={[styles.bar, { height: 30, width: 5 }]}></View>
                                <View style={[styles.bar, { height: 30, width: 5 }]}></View>
                                <View style={[styles.bar, { height: 30, width: 5 }]}></View>
                                <View style={[styles.bar, { height: 30, width: 5 }]}></View>
                            </View>
                        </View>
                        {/* End of Current Activity Section */}
                    </View>
                </View>

                {/* Big Wallet Card */}
                <View style={styles.bigWalletCard}>
                    <Text style={styles.recentPaymentsText}>Recent Payments</Text>
                    {recentPayments.map((payment, index) => (
                        <>
                            <View key={index} style={styles.recentPayment}>
                                <Text style={styles.paymentAmount}>₵{payment.amount} <Text style={styles.paymentDescription}>{payment.description}</Text></Text>

                            </View>
                            {index === 0 && <View style={styles.redSeparator}></View>}
                        </>
                    ))}
                </View>
            </View>

            {/* Automation Section */}
            <View style={styles.automationContainer}>
               <View style={styles.logoContainer}>
               <Image source={require('../assets/cedi_lightbg.png')} style={styles.image} />
                </View>
                <TouchableOpacity style={styles.automationButton}  onPress={handleCreateAutomation}>
                    <Text style={styles.automationText}>Create Automation</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

// Define the styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    welcomeUserContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    welcomeText: {
        color: '#000',
        fontSize: 24,
    },
    boldText: {
        fontWeight: 'bold',
    },
    userText: {
        color: '#e8b938',
        fontSize: 17,
    },
    walletCardContainer: {
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    smallWalletCardContainer: {
        flexDirection: 'column',
    },
    smallWalletCard: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardValue: {
        fontSize: 30,
    },
    cardSmallText: {
        color: 'grey',
    },
    automationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: "#e8e8e8",
        borderRadius: 10,
    },
    automationText: {
        fontSize: 16,
    },
    automationButton: {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
    },
    currentActivityContainer: {
        marginTop: 5,
    },
    barChart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 50,
    },
    bar: {
        backgroundColor: 'grey',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    monthlySpentText: {
        fontSize: 12,
        marginTop: 5,
        color: '#000',
    },
    bigWalletCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        paddingTop: 10,
    },
    recentPayment: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    recentPaymentsText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    logoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:10
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 10,
        objectFit:"contain"
    },
    redSeparator: {
        backgroundColor: '#e8b938',
        width: "100%",
        height: '0.5%',
        marginHorizontal: 5,
    },
    paymentAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    },
    paymentDescription: {
        flex: 1,
        fontSize: 12,
        color: 'grey',
    },
});

// Export the Wallet component
export default Wallet;
