import { FunctionComponent } from "react";
import Link from "next/link";
import { Flex, Heading } from "@chakra-ui/react";
import { Avocado, Basket } from "@components/SVGIcons";

const Navbar: FunctionComponent = () => {
  return (
    <Flex justify="space-around" p="1rem 5rem" borderBottom="1px" bg="gray.100">
      <Flex
        h="3rem"
        align="center"
        gap="0.2rem"
        transition="1s"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.2)",
        }}
      >
        <Avocado />
        <Link href="/">
          <Heading fontSize="lg">Avo Store</Heading>
        </Link>
      </Flex>
      <Flex
        h="3rem"
        align="center"
        gap="0.5rem"
        transition="1s"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.2)",
        }}
      >
        <Basket />
        <Link href="./about">
          <Heading fontSize="lg">Canasta (10)</Heading>
        </Link>
      </Flex>
    </Flex>
  );
};
export default Navbar;
