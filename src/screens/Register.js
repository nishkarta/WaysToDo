import { View, Text, Center, Image, Stack, Input, Pressable, HStack } from "native-base";

export default function Register({ navigation }) {
    // const form setform
    // isloading
    // handle onchange


    const handleRegister = () => {
        navigation.navigate("Login")
    }


    return (
        <View p={30}>
            <Center mb={50}>
                <Image mt={50} alt="loginicon" source={{ uri: "https://res.cloudinary.com/dm8xxyjfx/image/upload/v1667545476/WaysTodo/Login_Icon_pdd1uu.png" }} style={{ width: 500, height: 258 }} />
            </Center>
            <Text fontSize="2xl" bold style={{ textAlign: 'left' }} mb={5}>Register</Text>
            <Stack space={4} w="100%" mx="auto" alignItems="center">
                <Input bg="coolGray.200" w="100%" variant="outline" placeholder="Email" />
                <Input bg="coolGray.200" w="100%" variant="outline" placeholder="Name" />
                <Input mb={50} bg="coolGray.200" w="100%" variant="outline" placeholder="Password" />
                <Pressable w="100%" rounded={8} shadow={3} mb={3} p={3} bg="#FF5555"><Text bold style={{ color: 'white', textAlign: 'center' }} onPress={handleRegister}>Register</Text></Pressable>
                <HStack>
                    <Text>Joined us before? </Text>
                    <Text color="#FF5555" onPress={() => navigation.navigate("Login")}>Login</Text>
                </HStack>
            </Stack>
        </View>

    )
}