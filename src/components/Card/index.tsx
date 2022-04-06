import Link from "next/link";
import { Box, Image, Badge } from "@chakra-ui/react";

type TAvoCardsProps = {
  products: TProduct[];
};

const AvoCards = ({ products }: TAvoCardsProps) => {
  return (
    <>
      {products.map(({ name, price, id, image }, key) => {
        return (
          <Link href={`./product/${id}`} key={key}>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="1rem"
              _hover={{
                boxShadow: "dark-lg",
                cursor: "pointer",
              }}
            >
              <Image src={image} />
              <Box>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {price >= 1.3 ? "delicious" : "safe"}
                </Badge>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {name}
              </Box>
              <Box>{price}</Box>
            </Box>
          </Link>
        );
      })}
    </>
  );
};
export default AvoCards;
