import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box borderTopWidth="1px">
      <Flex justify="space-around">
        <Box w="sm" p="1rem">
          <Heading size="sm">Nosotros</Heading>
          <Text>Conoce más</Text>
        </Box>
        <Box w="sm" p="1rem">
          <Heading size="sm">Servicios</Heading>
          <Text>Todos los productos</Text>
        </Box>
        <Box w="sm" p="1rem">
          <Heading size="sm">Hecho para</Heading>
          <Text overflow="hidden">
            Aprender y mostrar capacidades de Next.js, by: @nicolasCoronel
          </Text>
        </Box>
      </Flex>
      <Flex direction="column" align="center" gap="0.5rem">
        <Text fontSize="sm">Incos made by Freepick from www.flaticon.com</Text>
        <Text fontSize="sm">
          Avocado images taken from Avocado 101 at California Avocado
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;
