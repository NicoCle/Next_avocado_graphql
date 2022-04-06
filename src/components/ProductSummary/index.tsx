import {
  Flex,
  Heading,
  Image,
  Text,
  Input,
  Button,
  Divider,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

type IProductSummaryProps = {
  product: TProduct;
};

const ProductSummary = ({ product }: IProductSummaryProps) => {
  const { name, sku, price, image, attributes } = product;
  const { description, hardiness, shape, taste } = attributes;

  return (
    <Flex direction="column" align="center" gap="2rem">
      <Flex borderWidth="1px">
        <Image src={image} />
        <Stack direction="column" divider={<Divider />} p="1rem" gap="1rem">
          <Heading>{name}</Heading>
          <Text>{price}</Text>
          <Text> SKU: {sku}</Text>
          <Stack direction="row">
            <Input type="number" fontWeight="bold" />
            <Button
              p="1.5rem"
              leftIcon={<TiShoppingCart />}
              colorScheme="pink"
              variant="solid"
            >
              Add to Cart
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Stack p="1rem" maxW="80%" borderWidth="1px" divider={<Divider />}>
        <Heading size="md">About this Avocado</Heading>
        <Text>{description}</Text>
      </Stack>
      <Table variant="simple" w="80%">
        <Thead>
          <Tr>
            <Th>Attributes</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Shape</Td>
            <Td>{shape}</Td>
          </Tr>
          <Tr>
            <Td>Hardiness</Td>
            <Td>{hardiness}</Td>
          </Tr>
          <Tr>
            <Td>Taste</Td>
            <Td>{taste}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};
export default ProductSummary;
