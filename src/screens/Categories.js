import { View, Text, Box, Input, Pressable, FlatList, Flex, Button, ScrollView } from "native-base";


const DummyList = [
    {
        id: 1,
        name: "Study"
    },
    {
        id: 2,
        name: "Home Work"
    },
    {
        id: 3,
        name: "Work Out"
    },
]

export default function Categories() {
    return (
        <View p={30}>
            <View mb={50}>
                <Text mb={6} bold fontSize="2xl">Add Category</Text>
                <Box>
                    <Input bg="blueGray.200" borderRadius={8} borderWidth={2} borderColor="blueGray.400" mb={30} placeholder="Name" w="100%" />
                    <Pressable w="100%" rounded={8} shadow={3} mb={3} p={3} bg="#FF5555"><Text bold style={{ color: 'white', textAlign: 'center' }}>Add List</Text></Pressable>
                </Box>
            </View>
            <View>
                <Text mb={6} bold fontSize="2xl">List Category</Text>
                <ScrollView horizontal>
                    <FlatList flexDirection="row" numColumns={3} data={DummyList} renderItem={(itemData) => {
                        return (
                            <Button borderRadius={5} w="100px" bg="orange.200" p={1} m={1}><Text bold color="#fff" textAlign="center">{itemData.item.name}</Text></Button>
                        )
                    }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </ScrollView>
            </View>
        </View>
    )
}