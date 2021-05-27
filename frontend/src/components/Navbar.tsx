import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
export const Navbar: React.FC<{}> = ({}) => {
  return (
    <Flex
      h="50px"
      w="100%"
      boxShadow="0 2px 10px -10px black"
      zIndex={2}
      top="0"
      justify="space-between"
      paddingX={{ base: "0px", md: "50px" }}
      align="center"
    >
      <Flex>
        <Heading cursor="pointer">MovieNator</Heading>
      </Flex>
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
