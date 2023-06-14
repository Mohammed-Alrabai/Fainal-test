import React from "react";
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
import { AiFillLike, AiFillDislike } from "react-icons/ai";
function Vidoe(props) {
  const { videoId } = props; 
  const data = props.data;

  return (
    <>
      <h1>Video</h1>
      <Box px={4} display={"flex"} w={"100%"} flexDir={"column"} alignItems={"center"}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          title="YouTube video player"
          width={"100%"}
          height={600}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <HStack p={2}>
          <Button  leftIcon={<AiFillLike />}>
          </Button>
          <Button leftIcon={<AiFillDislike />}>
          </Button>
        </HStack>
        <Box p={2}>
          <Input placeholder="Comment" size="lg" />
          <Box p={2} bg={"gray.100"}>
                test
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Vidoe;
