import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'


const Automations = () => {
   
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
                    <View style={{ display: "flex", }}>

                    </View>

                    <Text style={styles.label}>Email 2:</Text>
                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="grey"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Email 3:</Text>
                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="grey"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Select an Option:</Text>
                    {/* <select>
                        <option><Text>james</Text></option>
                        <option><Text>obeng</Text></option>
                    </select> */}
                    
                    

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
});

export default Automations;