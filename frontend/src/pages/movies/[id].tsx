import { Divider, HStack, Stack } from "@chakra-ui/layout";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/Layout";
import { MdDateRange, MdMovieFilter } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useMovieQuery } from "../../api/services/movieApi";
import { IMG_BASE } from "../../config/constants";
import convertTime from "../../utils/convertTime";
import { MovieRanker } from "../../components/MovieRanker";
import {
  useGetVotesQuery,
  useCreateVotesMutation,
} from "../../api/services/api";

const Movie: NextPage = () => {
  let router = useRouter();
  let movieId = router.query.id as string;
  const { isLoading, error, data } = useMovieQuery(movieId);
  const { data: votes, isLoading: votesIsLoading } = useGetVotesQuery(movieId);
  const [createVote, { isLoading: createIsLoading }] = useCreateVotesMutation();

  if (isLoading || votesIsLoading) {
    return (
      <Layout>
        <Heading>LOADING........</Heading>
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <Heading>ERROR</Heading>
      </Layout>
    );
  }
  if (data?.id) {
    return (
      <Layout>
        <Stack spacing={4} p={4}>
          <HStack>
            <Image
              alignSelf="center"
              maxH="400px"
              src={`${IMG_BASE}w500${data?.poster_path}`}
            />
            <Stack pl={5}>
              <Heading>{data.title}</Heading>
              <Stack>
                <Flex>
                  <Flex align="center">
                    <MdDateRange fontSize="15px" />
                    <Text fontSize="sm">{data?.release_date}</Text>
                  </Flex>
                  <Flex align="center" mx={4}>
                    <MdMovieFilter fontSize="15px" />
                    <Text fontSize="sm">{convertTime(data?.runtime || 0)}</Text>
                  </Flex>
                  {data?.revenue! > 0 && (
                    <Flex align="center">
                      <RiMoneyDollarBoxFill fontSize="15px" />
                      <Text fontSize="sm">
                        {data?.revenue.toLocaleString()}
                      </Text>
                    </Flex>
                  )}
                </Flex>
                <Divider />
                <Text color="gray.800" fontStyle="italic">
                  {data.tagline}
                </Text>

                <HStack justify="space-between">
                  {data.vote_average > 0 && (
                    <Flex align="center">
                      <CircularProgress
                        value={data?.vote_average * 10}
                        color={
                          data?.vote_average > 7.5 ? "green.500" : "red.400"
                        }
                      >
                        <CircularProgressLabel
                          fontSize="17px"
                          fontWeight="bold"
                        >
                          {data?.vote_average * 10}
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Heading ml={2} size="md">
                        Critics Score
                      </Heading>
                    </Flex>
                  )}
                </HStack>
                <Heading size="md">Overview</Heading>
                <Text size="xs">{data?.overview}</Text>
                {data.genres.length && (
                  <>
                    <Heading size="md">Genres</Heading>
                    <HStack>
                      {data.genres.map((genre) => (
                        <Tag
                          bg="orange.500"
                          key={genre.id}
                          variant="solid"
                          colorScheme="teal"
                        >
                          {genre.name}
                        </Tag>
                      ))}
                    </HStack>
                  </>
                )}
              </Stack>
            </Stack>
          </HStack>
          <Stack>
            <Stack w="100%" h="100px" bg="#393e46" justify="center">
              {votes && <MovieRanker votes={votes} />}
              {!votes && (
                <HStack justify="center">
                  <Button
                    colorScheme="orange"
                    onClick={() => createVote(movieId)}
                    isLoading={createIsLoading}
                  >
                    ADD TO LeMovies RANKING
                  </Button>
                </HStack>
              )}
            </Stack>
            <Divider />
            <Heading>Cast</Heading>
            <Heading size="md">Coming soon...</Heading>
            <Divider />
            <Heading>Similar Movies</Heading>
            <Heading size="md">Coming soon...</Heading>
          </Stack>
        </Stack>
      </Layout>
    );
  }
};

export default Movie;
