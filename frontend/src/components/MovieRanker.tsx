import { Heading, HStack, Stack } from "@chakra-ui/layout";
import React from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { RankIcon } from "./RankIcon";
import {
  useUpvoteVotesMutation,
  useDownvoteVotesMutation,
} from "../api/services/api";
import { IVote } from "../config/interfaces";

interface MovieRankerProps {
  votes: IVote;
}

export const MovieRanker: React.FC<MovieRankerProps> = ({ votes }) => {
  const [upvoteVote, { isLoading: upvoteIsLoading }] = useUpvoteVotesMutation();
  const [downVote, { isLoading: downvoteIsLoading }] =
    useDownvoteVotesMutation();

  return (
    <HStack p={4} w="100%" justify="space-around">
      <Stack spacing={1} justify="center" align="center">
        <RankIcon />
        <Heading color="white" size="md">
          LeMovie RANK
        </Heading>
      </Stack>
      <Stack align="center">
        <HStack>
          <Heading color="green.400">{votes.upvotes}</Heading>
          <Heading>/</Heading>
          <Heading color="red.400">{votes.downvotes}</Heading>
        </HStack>
        <Heading color="white" size="md">
          SCORE
        </Heading>
      </Stack>
      <Stack spacing={1} justify="center" align="center">
        <HStack align="start" spacing={2}>
          <IconButton
            aria-label="upvote"
            colorScheme="green"
            onClick={() => upvoteVote(votes.movieId)}
            isLoading={upvoteIsLoading}
            icon={<FaArrowAltCircleUp />}
          />
          <IconButton
            aria-label="downvote"
            colorScheme="red"
            onClick={() => downVote(votes.movieId)}
            isLoading={downvoteIsLoading}
            icon={<FaArrowAltCircleDown />}
          />
        </HStack>
        <Heading color="white" size="md">
          VOTE
        </Heading>
      </Stack>
    </HStack>
  );
};
