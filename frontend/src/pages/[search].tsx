import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { useSearchMovieQuery } from "../api/services/movieApi";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { Paginator } from "../components/Paginator";
import { MovieCard } from "../components/MovieCard";

const Search: NextPage = () => {
  const router = useRouter();
  const { name, page } = router.query as { name: string; page: "string" };
  const { isLoading, isError, data } = useSearchMovieQuery({ name, page });

  if (isLoading) {
    return <Layout>Is loading</Layout>;
  }
  if (isError) {
    return <Layout>is Erorr</Layout>;
  }
  return (
    <Layout>
      <Stack justify="center">
        <Heading size="lg">Showing results for "{name}"</Heading>
        <Paginator currPage={data?.page} totalPages={data?.total_pages} />
        <SimpleGrid minChildWidth="180px" spacing="30px">
          {data?.results.map((m) => {
            if (m.poster_path) {
              return <MovieCard key={m.id} movie={m} />;
            }
          })}
        </SimpleGrid>
        <Paginator currPage={data?.page} totalPages={data?.total_pages} />
      </Stack>
    </Layout>
  );
};

export default Search;
