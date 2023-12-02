import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'


const ContinueAutomation = () => {

    const [selectCheckIf, setSelectCheckIf] = useState();
    const [selectCompare, setSelectCompare] = useState();
    const [selectPay,setSelectPay] = useState();
    const [selectPayTo, setSelectPayTo] = useState();


    // option data
    const checkIfData = [
        { key: 1, option: "Balance" },
        { key: 2, option: "Amount" },
        { key: 3, option: "Reference" },
    ]

    const compareData = [
        { key: 0, option: "Compare To" },
        { key: 1, option: "Equal To" },
        { key: 2, option: "Greater Than" },
        { key: 3, option: "Greater Than / Equal to" },
        { key: 4, option: "Less Than" },
        { key: 5, option: "Less Than / Equal to" },
    ]

    const payData = [
        { key: 0, option: "Specific Amount" },
        { key: 1, option: "% of Balance" },
    ]

    const payToDta = [
        { key: 0, option: "Ecedi Wallet" },
        { key: 1, option: "Bank Account" },
    ]


    // navigation
    const navigation = useNavigation();
    const handleCreateRule = () => {
        navigation.navigate('test');
    }

    return (
        <View style={{ flex: 1 }}>
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
            <ScrollView style={{ flex: 1 }}>

                <View style={[styles.container, { height: "90%", paddingTop: "5%", }]}>
                    <View style={styles.inputContainer}>

                        <Text style={styles.label}>Check if</Text>
                        <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                            selectedValue={selectCheckIf}
                            onValueChange={(itemValue) => setSelectCheckIf(itemValue)}
                        >
                            {
                                checkIfData.map(checkIfData => {

                                    return <Picker.Item key={checkIfData.key} label={checkIfData.option} value={checkIfData.option} />
                                })
                            }
                        </Picker>

                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ width: "50%", paddingTop: 0, paddingRight: 5, }}>
                                <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                    selectedValue={selectCompare}
                                    onValueChange={(itemValue) => setSelectCompare(itemValue)}
                                >
                                    {
                                        compareData.map(compareData => {
                                            return <Picker.Item key={compareData.key} label={compareData.option} value={compareData.option} />
                                        })
                                    }
                                </Picker>

                            </View>

                            <View style={{ width: "45%", paddingTop: 0, paddingRight: 5, }}>
                                <TextInput
                                    placeholder="Value"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />

                            </View>
                        </View>
                        

                        {/* pay */}
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ width: "50%", paddingTop: 0, paddingRight: 5, }}>
                                <Text style={styles.colon}>Pay</Text>
                                <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                    selectedValue={selectPay}
                                    onValueChange={(itemValue) => setSelectPay(itemValue)}
                                >
                                    {
                                        payData.map(payData => {
                                            return <Picker.Item key={payData.key} label={payData.option} value={payData.option} />
                                        })
                                    }
                                </Picker>

                            </View>

                            <View style={{ width: "45%", paddingTop: 20, paddingRight: 5, }}>
                                <TextInput
                                    placeholder="Valuess"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />

                            </View>
                        </View>

                        {/* pay to */}
                        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                            <View style={{ width: "50%", paddingTop: 0, paddingRight: 5, }}>
                                <Text style={styles.colon}>To</Text>
                                <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                    selectedValue={selectPayTo}
                                    onValueChange={(itemValue) => setSelectPayTo(itemValue)}
                                >
                                    {
                                        payToDta.map(payToData => {
                                            return <Picker.Item key={payToData.key} label={payToData.option} value={payToData.option} />
                                        })
                                    }
                                </Picker>

                            </View>

                            <View style={{ width: "45%", paddingTop: 20, paddingRight: 5, }}>
                                <TextInput
                                    placeholder="Values"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                    keyboardType="numeric"
                                />

                            </View>
                        </View>


                    </View>
                    {/* continue button */}
                    <View style={{ paddingTop: 30 }}>
                        <TouchableOpacity style={styles.continueButton} onPress={handleCreateRule}>
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
        paddingTop: 10
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
    picker: {
        backgroundColor: '#dfeef7',
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0, // Adjust the top padding
        paddingBottom: 0, // Adjust the bottom padding
        marginVertical: 10,
    },
    itemStyle: {
        fontSize: 12, // Adjust the font size as needed
        height: 100
    },
});

export default ContinueAutomation;