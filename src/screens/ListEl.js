import * as React from 'react'

import { View, Text, StatusBar, VStack, Image, HStack, FlatList, Box, ScrollView, Input, Stack, Pressable, Select, CheckIcon } from "native-base";
import { StyleSheet, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


const done = "https://res.cloudinary.com/dm8xxyjfx/image/upload/v1667556672/WaysTodo/icon__Check_Circle__nukfzp.png"

const todo = "https://res.cloudinary.com/dm8xxyjfx/image/upload/v1667563372/WaysTodo/Ellipse_1_l2mbbh.png"



const DummyList = [
    {
        id: 1,
        category: 'Study',
        name: 'React Native',
        date: '21 December 2022',
        desc: 'react tralala trilili dududu dudu dudud.......',
        status: 'done',
    },
    {
        id: 2,
        category: 'Homework',
        name: 'WaysFood',
        date: '22 December 2022',
        desc: 'pr waysfood banyak beud syalala',
        status: 'todo',
    },
    {
        id: 3,
        category: 'Work Out',
        name: 'HIIT',
        date: '23 December 2022',
        desc: 'olahragaaaaaa...',
        status: 'done',
    },
    {
        id: 4,
        category: 'Study',
        name: 'Psychology',
        date: '24 December 2022',
        desc: 'biar bisa baca orang',
        status: 'todo',
    },
    {
        id: 5,
        category: 'Study',
        name: 'Mathematic',
        date: '24 December 2022',
        desc: 'biar otaknya jalan',
        status: 'todo',
    },
]
export default function List(props) {
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

    const [courseGoals, setCourseGoals] = React.useState([])

    const handleDetail = (todo) => {
        props.navigation.navigate("Detail", { itemData })
    }
    return (
        <>
            <View p={7} className="top" style={{ flex: 1 }}>
                <HStack mb={3} justifyContent="space-between">
                    <VStack>
                        <Text bold fontSize="2xl">Hi Riri.. 😚</Text>
                        <Text color="#FF5555">20 Lists</Text>
                    </VStack>
                    <Image alt="profile" source={{ uri: "https://res.cloudinary.com/dm8xxyjfx/image/upload/v1667558303/WaysTodo/wes-hicks-AgPVsu54j8Q-unsplash_czl1gv.jpg" }} width={20} height={20} borderRadius={50} borderWidth={3} borderColor="#FF5555" />
                </HStack>
                <Stack>
                    <Input bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb={2} placeholder="Search List..." />
                    <HStack justifyContent="space-between">
                        <Pressable p={1} title='DatePicker' onPress={() => showMode('date')} bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="3" w="120px">
                            <HStack justifyContent="space-between">
                                <Text fontSize="xs" color="blueGray.400">{text}</Text>
                                <Text color="blueGray.400"><Ionicons name="calendar-outline" /></Text>

                            </HStack>
                        </Pressable>
                        <Select bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="5px" w="120px" placeholder='Category' accessibilityLabel='Categories' _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }}
                        >
                            <Select.Item label="Study" value="study" />
                            <Select.Item label="Workout" value="workout" />
                            <Select.Item label="Homework" value="homework" />
                        </Select>
                        <Select w="100px" bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb="5px" placeholder='Status' accessibilityLabel='Status' _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }}
                        >
                            <Select.Item label="Todo" value="todo" />
                            <Select.Item label="Done" value="done" />

                        </Select>


                    </HStack>
                </Stack>
            </View>
            <View p={6} className="bottom" style={{ flex: 3 }}>
                <FlatList data={DummyList} renderItem={(itemData) => {
                    return (
                        <Pressable onPress={() => props.navigation.navigate("Detail", { itemData })}>
                            <Box borderRadius={5} bg="lightBlue.100" m={2} p={3}>
                                <HStack justifyContent="space-between">
                                    <View>
                                        <HStack>
                                            {itemData.item.status === "done" ? <>
                                                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} bold>{itemData.item.category}</Text>
                                                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} bold> - </Text>
                                                <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} bold>{itemData.item.name}</Text>
                                            </> : <>
                                                <Text bold>{itemData.item.category}</Text>
                                                <Text bold> - </Text>
                                                <Text bold>{itemData.item.name}</Text>
                                            </>}

                                        </HStack>
                                        {itemData.item.status === "done" ? <Text w={200} mb={5} style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} color="coolGray.400">{itemData.item.desc}</Text> : <Text w={200} mb={5} color="coolGray.400">{itemData.item.desc}</Text>}

                                        <Text color="coolGray.400"><Ionicons name="calendar-outline" /> {itemData.item.date}</Text>
                                    </View>
                                    <View alignItems="center">
                                        <Pressable><Text bg="danger.100" w="100px" fontSize="xs" borderRadius={8} color="#fff" bold textAlign="center" mb={2} p={1}>{itemData.item.category}</Text></Pressable>
                                        {itemData.item.status === "done" ? <Image alt="status" source={{ uri: done }} width="60px" height="60px" /> : <Image alt="status" source={{ uri: todo }} width="60px" height="60px" />}

                                    </View>
                                </HStack>
                            </Box>
                        </Pressable>

                    )
                }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
                {show && (<DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hours={true}
                    display='default'
                    onChange={onChangeDate}
                />)}
            </View>
        </>
    )
}