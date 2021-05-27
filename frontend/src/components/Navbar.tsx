import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
// import Image from "next/image";
export const Navbar: React.FC<{}> = ({}) => {
  return (
    <Flex
      h="50px"
      w="100%"
      boxShadow="0 2px 10px -10px black"
      top="0"
      justify="space-between"
      paddingX={{ base: "10px", md: "50px" }}
      align="center"
    >
      <Box>
        {/* <Image src={"/static/movienator.png"} width={400} height={100} /> */}
        <Heading>Movienator</Heading>
      </Box>
      <Flex>
        <Fragment>
          <Text as={Link} to="/login" mr="20px">
            Login
          </Text>
          <Text as={Link} to="/register">
            Register
          </Text>
        </Fragment>
      </Flex>
    </Flex>
  );
};
