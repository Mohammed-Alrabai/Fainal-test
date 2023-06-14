import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
import { useState , useEffect } from "react";
import axios from "axios";

export default function SimpleCard() {
    const [data , setData] = useState([])
    const [name , setName] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    const navigate = useNavigate()

    const apiUrl = "https://64896de05fa58521caaf9461.mockapi.io/user";

    useEffect(() => {
        axios.get(apiUrl)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    } , [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(apiUrl , {
            name : name,
            username : username,
            password : password,
            email : email,
            token : "token",
        })
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" onChange={(e)=>{setName(e.target.value)}} />
            </FormControl>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" onChange={(e) => {setUsername(e.target.value)}} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => {setPassword(e.target.value)}} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={"column"}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
                <Text color={""}>You have an account? 
                <Link color={"blue.400"} onClick={() => navigate("/login")} >Login here</Link></Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
                >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
