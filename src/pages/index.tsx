import fetch from "isomorphic-unfetch";
import { useQuery, gql } from "@apollo/client";
import AvoCards from "@components/Card";
import Layout from "src/Layout";

const avoFragment = `
      id
      image
      name
      createdAt
      sku
      price
      attributes {
        description
        taste
        shape
        hardiness
      }     
`;
const useAvocado = () => {
  const query = gql`
  query {
    avos {
      ${avoFragment}
    }
  }
  `;
  return useQuery(query);
};

const HomePage = () => {
  const { data, loading } = useAvocado();
  console.log(data, loading);
  return (
    <Layout>
      {/*
      <AvoCards products={productList} />
      */}
    </Layout>
  );
};
export default HomePage;
