import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import qs from "query-string";
import { BiSearchAlt } from "react-icons/bi";
interface SearchBarProps {
  lastSearched?: string;
  width?: string;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  lastSearched,
  width = "900px",
}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(lastSearched);
  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/search",
        search: qs.stringify(queryParam),
      });
    }
  };
  const queryParam = { name: searchTerm, page: "1" };
  return (
    <InputGroup size="sm" w={{ base: "100%", xl: width }}>
      <Input
        borderRadius={5}
        p={2}
        color="white"
        bg="#393e46"
        value={searchTerm}
        variant="flushed"
        placeholder="Search for a movie"
        onChange={handleChage}
        onKeyUp={handleEnter}
      />
      <InputRightElement width="6rem">
        <Button
          size="xs"
          mr="10px"
          colorScheme="orange"
          leftIcon={<BiSearchAlt fontSize="15px" />}
          onClick={() =>
            router.push({
              pathname: "/search",
              search: qs.stringify(queryParam),
            })
          }
          enter
        >
          SEARCH
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
