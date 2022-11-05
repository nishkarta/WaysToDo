import * as React from 'react';

import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Box, CheckIcon, HStack, Input, Pressable, Select, Text, TextArea, View } from "native-base";

export default function AddList() {
    const [date, setDate] = React.useState(new Date())
    const [mode, setMode] = React.useState('date')
    const [show, setShow] = React.useState(false)
    const [text, setText] = React.useState('Choose Date')

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate)

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    return (
        <View p={30}>
            <Text mb={6} bold fontSize="2xl">Add List</Text>
            <Box alignItems="center">

                <Input bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="3" placeholder="Name" w="100%" />

                <Select bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="5px" w="100%" placeholder='Category' accessibilityLabel='Categories' _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />,
                }}

                >

                    <Select.Item label="Study" value="study" />
                    <Select.Item label="Workout" value="workout" />
                    <Select.Item label="Homework" value="homework" />
                </Select>
                <Pressable title='DatePicker' onPress={() => showMode('date')} p={3} h={47} bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="3" w="100%">
                    <HStack justifyContent="space-between">
                        <Text fontSize="xs" color="blueGray.400">{text}</Text>
                        <Text color="blueGray.400"><Ionicons name="calendar-outline" /></Text>

                    </HStack>
                </Pressable>

                <TextArea h={150} mb={100} bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mx="3" placeholder="Description" w="100%" />
                <Pressable w="100%" rounded={8} shadow={3} mb={3} p={3} bg="#FF5555"><Text bold style={{ color: 'white', textAlign: 'center' }}>Add List</Text></Pressable>

                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hours={true}
                    display='default'
                    onChange={onChangeDate}
                />)}
            </Box>
        </View >
    )
}