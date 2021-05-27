import { Stack } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/Layout";
import { AiFillLike, AiFillMeh } from "react-icons/ai";
import { useRouter } from "next/router";
import { useMovieQuery } from "../../api/services/movieApi";
const Movie: NextPage = () => {
  let router = useRouter();
  let movieId = router.query.id as string;
  const loading = true;
  const { isLoading, isError, data } = useMovieQuery(movieId);
  console.log(data);

  if (isLoading) {
    <Layout>
      <Heading>LOADING........</Heading>
    </Layout>;
  }
  if (isError) {
    <Layout>
      <Heading>ERROR</Heading>
    </Layout>;
  }
  return (
    <Layout>
      <Stack spacing={4} p={4}>
        <Heading alignSelf="center">{data?.title}</Heading>
        <Image
          alignSelf="center"
          maxW="500px"
          maxH="400px"
          src="https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
        />
        <Stack
          justify="center"
          bg="ghostwhite"
          borderRadius="10px"
          minW="300px"
          alignSelf="center"
        >
          <Text alignSelf="center">Rate this Movie:</Text>
          <Flex justify="space-around">
            <Box>
              <Flex color="blue.400" fontSize="20px" justify="center">
                0
              </Flex>
              <Button
                leftIcon={<AiFillLike />}
                colorScheme="blue"
                variant="ghost"
              >
                Love It!
              </Button>
            </Box>
            <Box>
              <Flex color="red.400" fontSize="20px" justify="center">
                0
              </Flex>
              <Button
                rightIcon={<AiFillMeh />}
                colorScheme="red"
                variant="ghost"
              >
                Meh
              </Button>
            </Box>
          </Flex>
        </Stack>
        <Heading size="lg">Details</Heading>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Release Date</Th>
              <Th>Run Time</Th>
              <Th>Revenue</Th>
              <Th isNumeric>Rating</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{data?.release_date}</Td>
              <Td>{data?.runtime} Min</Td>
              <Td>${data?.revenue}</Td>
              <Td isNumeric>{data?.vote_average}/10</Td>
            </Tr>
          </Tbody>
        </Table>
        <Heading size="lg">Overview</Heading>
        <Text>{data?.overview}</Text>
      </Stack>
    </Layout>
  );
};

export default Movie;
