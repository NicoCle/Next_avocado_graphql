import { ApolloClient, InMemoryCache } from "@apollo/client";

const url = process.env.NEXT_PUBLIC_SERVICE_URL;

const client = new ApolloClient({
  uri: `${url}`,
  cache: new InMemoryCache(),
});
export default client;
