import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex maxWidth="1000px" justify="center" minH="100vh" marginX="auto">
        <Box>{children}</Box>
      </Flex>
    </>
  );
};
