import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { TextInput, Keyboard } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const Automations = () => {


    const [selectedMonth, setSelectedMonth] = useState('month');
    const [selectedStart, setSelectedStart] = useState('');
    const [selectedDaysOfTheWeek, setSelectedDaysOfTheWeek] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedWhenIreceiveMoney, setSelectedWhenIreceiveMoney] = useState();

    // display depending on start option
    const [showAtSpecificOption, setShowAtSpecificOption] = useState(false);
    const [showWhenIreceiveMoney, setShowWhenIreceiveMoney] = useState(false);
    const [showChooseTriggerText, setShowChooseTriggerText] = useState(true);



    // picker items
    const daysOfTheWeek = [
        { key: 1, day: "Days of the week" },
        { key: 2, day: "Monday" },
        { key: 3, day: "Tuesday" },
        { key: 4, day: "Wednesday" },
        { key: 5, day: "Thursday" },
        { key: 6, day: "Friday" },
        { key: 7, day: "Saturday" },
        { key: 8, day: "Sunday" },
    ]

    const numArr = ["Day"];
    for (let i = 1; i < 32; i++) {
        numArr.push(i.toString());
    }

    const whenIreceiveMoneyData = [
        { key: 1, option: "Any Amount" },
        { key: 2, option: "Of Amount" },
        { key: 3, option: "With Reference" },
        { key: 4, option: "From Sender" },
    ]
    // picker items end



    const handleClearButtonClick = () => {
        setSelectedMonth('');
        setSelectedStart('Choose a trigger');
        setSelectedDaysOfTheWeek('');
        setSelectedDay('');
        // setSelectedWhenIreceiveMoney('');

        setShowAtSpecificOption(false);
        // setShowWhenIreceiveMoney(false);
        setShowChooseTriggerText(true);
    };



    // hnadle start option change
    const handleStartOptionChange = (itemValue) => {

        setShowChooseTriggerText(itemValue === "Choose a trigger");
        setShowAtSpecificOption(itemValue === "At a specific time");
        setShowWhenIreceiveMoney(itemValue === "When I receive money");
    };

    // navigation
    const navigation = useNavigation();


    const handleContinueButtonPress = () => {
        console.log(selectedStart);
        navigation.navigate('ContinueAutomation');
    }

    return (
        <KeyboardAwareScrollView>
            <View style={[styles.container,]}>

                <View style={styles.logo}>
                    <Image source={require('../assets/auto.png')} style={{ width: 30, height: 30 }} />
                </View>

                <View style={styles.inputContainer}>
                    {/* label */}
                    <Text style={styles.label}>label</Text>
                    <TextInput
                        placeholder="At a specific time"
                        placeholderTextColor="grey"
                        style={styles.input}
                    />

                    {/* start */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}> Start</Text>
                        <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                            selectedValue={selectedStart}
                            onValueChange={(itemValue) => {
                                setSelectedStart(itemValue)
                                handleStartOptionChange(itemValue); // Check the selected option
                            }}
                        >
                            <Picker.Item label="Choose a trigger" value="Choose a trigger" />
                            <Picker.Item label="When I receive money" value="When I receive money" />
                            <Picker.Item label="At a specific time" value="At a specific time" />
                        </Picker>
                        {
                            showChooseTriggerText && (<Text style={styles.chooseTriggerText}>* Please Choose a Trigger</Text>)
                        }
                    </View>

                    {showAtSpecificOption && (
                        <>
                            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>

                                <View style={{ width: "45%", paddingTop: 0, paddingRight: 5, }}>
                                    <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                        selectedValue={selectedMonth}
                                        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                                    >
                                        <Picker.Item label="Every Month" value="month" />
                                        <Picker.Item label="Every Week" value="week" />
                                    </Picker>

                                </View>

                                <View style={styles.onTextContainer}>
                                    <Text style={styles.onText}>on</Text>
                                </View>

                                <View style={{ width: "45%", paddingTop: 0, paddingLeft: 5, }}>
                                    <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                        selectedValue={selectedDay}
                                        onValueChange={(itemValue) => setSelectedDay(itemValue)}
                                    >
                                        {
                                            numArr.map(num => (
                                                <Picker.Item label={num} value={num} key={num} />
                                            ))
                                        }

                                    </Picker>
                                </View>

                            </View>

                            {/* and */}
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>And</Text>
                                <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                    selectedValue={selectedDaysOfTheWeek}
                                    onValueChange={(itemValue) => setSelectedDaysOfTheWeek(itemValue)}
                                >
                                    {
                                        daysOfTheWeek.map(daysOfTheWeek => {
                                            return <Picker.Item key={daysOfTheWeek.key} label={daysOfTheWeek.day} value={daysOfTheWeek.day} />
                                        })
                                    }
                                </Picker>
                            </View>


                            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", }}>

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
                                        <Text style={{ paddingTop: 5 }}></Text>
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
                                    <TouchableOpacity style={styles.clearButton} onPress={handleClearButtonClick}>
                                        <Text style={styles.clearButtonText}>Clear</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>

                    )}

                    {/* when user select When I receive money */}
                    {
                        showWhenIreceiveMoney && (
                            <>
                                <View style={styles.inputContainer}>
                                    <Picker style={[styles.picker, { width: "100%", height: 100 }]} itemStyle={styles.itemStyle}
                                        selectedValue={selectedWhenIreceiveMoney}
                                        onValueChange={(itemValue) => setSelectedWhenIreceiveMoney(itemValue)}
                                    >
                                        {
                                            whenIreceiveMoneyData.map(whenIreceiveMoneyData => {
                                                return <Picker.Item key={whenIreceiveMoneyData.key} label={whenIreceiveMoneyData.option} value={whenIreceiveMoneyData.option} />
                                            })
                                        }
                                    </Picker>
                                </View>
                                <TextInput
                                    placeholder="Value"
                                    placeholderTextColor="grey"
                                    style={styles.input}
                                />
                            </>
                        )
                    }


                </View>



                {/* continue button */}
                <View style={{ paddingTop: 30 }}>
                    <TouchableOpacity style={styles.continueButton} onPress={handleContinueButtonPress}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAwareScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        //   margin: 10, 
    },
    inputContainer: {
        marginBottom: 0,
        marginTop: 10,
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    chooseTriggerText: {
        color: "red",
    },
    label: {
        fontSize: 13,
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
    onTextContainer: {
        width: '7%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    onText: {
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
    continueButtonContainer: {
        paddingTop: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    continueButton: {
        padding: 15,
        backgroundColor: '#6eb1db',
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
        paddingTop: 0,
        paddingBottom: 0,
        marginVertical: 10,
    },
    itemStyle: {
        fontSize: 12,
        height: 100,
    },
});


export default Automations;