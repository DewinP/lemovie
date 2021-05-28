import { Stack, Image, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { IMG_BASE } from "../config/constants";
import { IMovie } from "../config/interfaces";
import { BiCameraMovie } from "react-icons/bi";
import { useRouter } from "next/router";
interface MovieCardProps {
  movie: IMovie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  return (
    <Stack spacing={0} maxW="100%" alignItems="center" justify="center">
      <Image
        h="300px"
        w="210px"
        objectFit="cover"
        src={`${IMG_BASE}w500${movie.poster_path}`}
        borderTopRadius={10}
      />
      <Stack
        bg="#393e46"
        color="white"
        p={1}
        align="center"
        w="100%"
        maxW="210px"
      >
        <Text fontWeight="bold" fontSize="15px">
          {movie.title.length < 20
            ? movie.title
            : movie.title.substr(0, 20) + "..."}
        </Text>
        <Flex justify="space-around" w="100%">
          <Stack spacing={0}>
            <Text fontWeight="light" fontSize="xs">
              Release Date
            </Text>
            <Text fontWeight="bold" fontSize="xs">
              {movie.release_date}
            </Text>
          </Stack>
          <Stack spacing={0} justify="center">
            <Text fontWeight="light" fontSize="xs">
              Rating
            </Text>
            <Text fontWeight="bold" fontSize="xs" color="red.300">
              {movie.vote_average}
              <Text color="blue.300" as={"span"}>
                /10
              </Text>
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Flex
        w="100%"
        bg="red.100"
        borderBottomRadius={10}
        justify="center"
        maxW="210px"
      >
        <Button
          leftIcon={<BiCameraMovie fontSize="15px" />}
          size="sm"
          variant="link"
          p={2}
          onClick={() => router.push(`movies/${movie.id}`)}
        >
          SEE MORE
        </Button>
      </Flex>
    </Stack>
  );
};
