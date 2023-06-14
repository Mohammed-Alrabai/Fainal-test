import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  VStack,
  Link,
  MenuGroup,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import React from "react";
import Logo from "../assets/img/logo2.png";
import { CiMenuBurger } from "react-icons/ci";
import { BiVideoPlus } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Vidoe from "./Vidoe";
import linkedin from "../assets/img/linkedin.png";

export default function App() {
  const sidebar = useDisclosure();

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const videoId = useParams().id;
  console.log(videoId);

  const apiUrl = "https://www.googleapis.com/youtube/v3/";
  const apiKey = "AIzaSyDw1RQwmjuuJGiBJ6Un9pXlBRr8bsKhKKA";
  useEffect(() => {
    axios
      .get(
        apiUrl + "search?part=snippet&maxResults=20&type=video&key=" + apiKey
      )
      .then((res) => {
        setData(res.data.items);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="15"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.600"
      borderColor="blackAlpha.300"
      borderRightWidth="5px"
      w="60"
      {...props}>
      <Flex px="4" py="5" align="center" w={"full"}>
        <Icon as={CiMenuBurger} mr="2" onClick={sidebar.onOpen} />

        <Image w="auto" h={12} src={Logo} />
      </Flex>
      <Box px={2}>
        <Input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation">
        <Flex
          bg="#edf3f8"
          _dark={{
            bg: "#3e3e3e",
          }}
          p={2}
          w="full"
          alignItems="center"
          justifyContent="center">
          {/* map here */}
          <Button
            maxW="lg"
            mx="auto"
            bg="white"
            w="full"
            h={"120px"}
            display={"flex"}
            flexDirection={"column"}
            _dark={{
              bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            onClick={() => {
              navigate(`/video/`);
            }}>
            <Box w={10}>
              <Image w="full" src={linkedin} />
            </Box>
            <Box
              w={2 / 3}
              p={{
                base: 4,
                md: 4,
              }}>
              <Button w={"full"} h={"0"}>
                <chakra.p fontSize="sm">Follow Me in Linkedin</chakra.p>
              </Button>
            </Box>
          </Button>
        </Flex>
        {data.map((item, index) => (
          <Flex
            key={index}
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            p={2}
            w="full"
            alignItems="center"
            justifyContent="center">
            {/* map here */}
            <Button
              maxW="lg"
              mx="auto"
              bg="white"
              w="full"
              h={"100px"}
              _dark={{
                bg: "gray.800",
              }}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
              onClick={() => {
                navigate(`/video/${item.id.videoId}`);
              }}>
              <Box w={2 / 3}>
                <Image w="full" src={item.snippet.thumbnails.high.url} />
              </Box>
              <Box
                w={2 / 3}
                p={{
                  base: 4,
                  md: 4,
                }}>
                <chakra.p
                  fontSize="sm"
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{
                    color: "white",
                    maxWidth: "sm",
                  }}>
                  {item.snippet.title}
                </chakra.p>
              </Box>
            </Button>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
  return (
    <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{ bg: "gray.800" }}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14">
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: "none", md: "flex" }}>
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              cursor="pointer"
              src="https://bit.ly/dan-abramov"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Box rounded="md" h="96">
            <Vidoe videoId={videoId} data={data} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
