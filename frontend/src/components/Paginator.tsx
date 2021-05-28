import { Flex } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";
import React from "react";
import { useRouter } from "next/router";
import qs from "query-string";

interface PaginatorProps {
  currPage?: number;
  totalPages?: number;
}

export const Paginator: React.FC<PaginatorProps> = ({
  currPage,
  totalPages,
}) => {
  const router = useRouter();
  return (
    <Flex justify="center">
      <Pagination
        defaultCurrent={currPage}
        total={totalPages}
        onChange={(page) => {
          const queryParam = { name: router.query.name, page: page };
          router.push({
            pathname: "/search",
            search: qs.stringify(queryParam),
          });
        }}
        paginationProps={{ display: "flex" }}
        pageNeighbours={1}
        baseStyles={{ bg: "#112d4e", color: "white" }}
        activeStyles={{ bg: "red.300" }}
        hoverStyles={{ bg: "green.300" }}
        responsive
      />
    </Flex>
  );
};
