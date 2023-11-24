import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Automations = () => {
    const navigation = useNavigation();


    const handleContinueButtonPress = () => {
        navigation.navigate('ContinueAutomation');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../assets/auto.png')} style={{ width: 30, height: 30 }} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Start</Text>
                    <TextInput
                        placeholder="At a specific time"
                        placeholderTextColor="grey"
                        style={styles.input}
                    />
                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                        <View style={{ width: "50%", paddingRight: 10, paddingTop: 10, }}>
                            <Text style={styles.label}>Every</Text>
                            <TextInput
                                placeholder="Month"
                                placeholderTextColor="grey"
                                style={styles.input}
                            />
                        </View>
                        <View style={{ width: "50%", paddingTop: 10 }}>
                            <Text style={styles.label}>On</Text>
                            <TextInput
                                placeholder="10"
                                placeholderTextColor="grey"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <Text style={styles.label}>And</Text>
                    <TextInput
                        placeholder="Days of the week"
                        placeholderTextColor="grey"
                        style={styles.input}
                    />

                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                        <View style={{ display: "flex", justifyContent: "", flexDirection: "row", paddingTop: 10 }}>

                            <View style={{ width: "30%", }}>
                                <Text style={styles.label}>At</Text>
                                <TextInput
                                    placeholder="10"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={styles.colonContainer}>
                                <Text style={styles.colon}>:</Text>
                            </View>

                            <View style={{ width: "30%", }}>
                                <Text style={{ paddingTop: 10 }}></Text>
                                <TextInput
                                    placeholder="10"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>


                        <View style={{ width: "35%", paddingTop: 10 }}>
                            <Text></Text>
                            <TouchableOpacity style={styles.clearButton}>
                                <Text style={styles.clearButtonText}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                    {/* continue button */}
                    <View style={{paddingTop:30}}>
                    <TouchableOpacity style={styles.continueButton} onPress={handleContinueButtonPress}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                    </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
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

export default Automations;