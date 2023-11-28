import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const ContinueAutomation = () => {
    const navigation = useNavigation();


    const handleContinueButtonPress = () => {
        navigation.navigate('ContinueAutomation');
    }

    return (
        <View>
            <View style={styles.topbarContainer}>
                <View style={styles.container}>
                    <View style={styles.topbarItemIcontainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.topbarText}>Back</Text>
                        </TouchableOpacity>
                        <Text style={styles.topbarText}>Automation</Text>
                    </View>
                </View>
            </View>
            <ScrollView>

                <View style={[styles.container, { height: "90%", paddingTop: "15%", }]}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Check if</Text>
                        <TextInput
                            placeholder="Balance"
                            placeholderTextColor="grey"
                            style={styles.input}
                        />
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ width: "50%", paddingRight: 10, paddingTop: 10, }}>
                                {/* <Text style={styles.label}>Every</Text> */}
                                <TextInput
                                    placeholder="Greater than"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                />
                            </View>
                            <View style={{ width: "50%", paddingTop: 10 }}>
                                {/* <Text style={styles.label}>On</Text> */}
                                <TextInput
                                    placeholder="1000"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ width: "42%", }}>
                                <Text style={styles.colon}>Pay</Text>
                                <TextInput
                                    placeholder="Specified Amount"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={styles.colonContainer}>
                                <Text style={styles.colon}>to</Text>
                            </View>

                            <View style={{ width: "43%", paddingTop: 20 }}>
                                <TextInput
                                    placeholder="+233540702934"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />
                            </View>


                        </View>
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ width: "42%", }}>
                                <Text style={styles.colon}>Pay</Text>
                                <TextInput
                                    placeholder="Bank Account"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={styles.colonContainer}>
                                <Text style={styles.colon}>to</Text>
                            </View>

                            <View style={{ width: "43%", paddingTop: 20 }}>
                                <TextInput
                                    placeholder="Value"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />
                            </View>


                        </View>

                    </View>
                    {/* continue button */}
                    <View style={{ paddingTop: 30 }}>
                        <TouchableOpacity style={styles.continueButton} onPress={handleContinueButtonPress}>
                            <Text style={styles.continueButtonText}>Create Rule</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    topbarContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#dfeef7',
        paddingTop: '2%',
    },
    topbarItemIcontainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:10
    },
    topbarText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        marginBottom: 20,
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#dfeef7',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    colonContainer: {
        width: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colon: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    clearButton: {
        padding: 15,
        backgroundColor: '#FA8072',
        marginVertical: 20,
        borderRadius: 10,
    },
    clearButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },

    continueButton: {
        padding: 15,
        backgroundColor: '#6eb1db',
        marginVertical: 20,
        borderRadius: 10,
    },
    continueButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ContinueAutomation;