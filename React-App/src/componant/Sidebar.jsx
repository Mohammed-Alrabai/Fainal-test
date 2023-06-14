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

export default function App() {
  const sidebar = useDisclosure();

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
            <Flex
              maxW="md"
              mx="auto"
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              shadow="lg"
              rounded="lg"
              overflow="hidden">
              <Box w={2 / 3}>
                <Image w="full" h={12} src={Logo} />
              </Box>
              <Box
                w={2 / 3}
                p={{
                  base: 4,
                  md: 4,
                }}>
                <chakra.p
                  fontSize="lg"
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}>
                  Backpack
                </chakra.p>
              </Box>
            </Flex>
        </Flex>
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
          {/* Add content here, remove div below  */}
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </Box>
      </Box>
    </Box>
  );
}
