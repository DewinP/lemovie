import { Heading, Stack } from "@chakra-ui/layout";
import { Layout } from "../components/Layout";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
const Index = () => (
  <Layout>
    <Stack p={4} w="1000px" maxW="1000px">
      <Heading></Heading>
      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="Search for a movie" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            FIND
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  </Layout>
);

export default Index;
