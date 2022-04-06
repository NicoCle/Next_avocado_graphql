import { FunctionComponent } from "react";
import Navbar from "@components/NavBar";
import { Flex } from "@chakra-ui/react";
import Footer from "@components/Footer";
const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex flexFlow="wrap" justify="center" gap="2rem" p="1rem">
        {children}
      </Flex>
      <Footer />
    </>
  );
};
export default Layout;
