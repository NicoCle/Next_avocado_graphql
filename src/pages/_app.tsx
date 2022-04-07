import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://platzi-graphql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />;
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
};
export default MyApp;
