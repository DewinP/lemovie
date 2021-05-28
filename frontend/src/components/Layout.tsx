import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Flex maxWidth="900px" justify="center" minH="100vh" marginX="auto">
        <Box w="100%" pt={4} pb={10}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};
