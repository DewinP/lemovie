import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { SearchBar } from "./SearchBar";
// import Image from "next/image";
export const Navbar: React.FC<{}> = ({}) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      h={{ base: "75px", md: "50px" }}
      w="100%"
      boxShadow="0 2px 10px -10px black"
      top="0"
      bg="white"
      justify="space-between"
      zIndex={2}
      position="sticky"
      paddingX={{ base: "10px", md: "50px" }}
      align="center"
    >
      <Box>
        {/* <Image src={"/static/movienator.png"} width={400} height={100} /> */}
        <NextLink href="/">
          <Heading>LeMovie</Heading>
        </NextLink>
      </Box>
      <SearchBar />
      <Flex display={{ base: "none", xl: "flex" }}>
        <Button mr={4} size="sm" isDisabled to="/login">
          Login
        </Button>
        <Button size="sm" isDisabled to="/register">
          Register
        </Button>
      </Flex>
    </Flex>
  );
};
