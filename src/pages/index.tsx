import AvoCards from "@components/Card";
import { GetAllAvosDocument, Avocado } from "service/graphql";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "src/Layout";
import client from "service/client";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await client.query({
      query: GetAllAvosDocument,
    });
    if (response.data.avos == null) {
      throw new Error("error post");
    }
    const products = response.data.avos;
    return {
      props: {
        products,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        products: [],
      },
    };
  }
};

const HomePage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log({ products });

  return (
    <Layout>
      <AvoCards products={products} />
    </Layout>
  );
};
export default HomePage;
