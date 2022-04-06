import fetch from "isomorphic-unfetch";
import AvoCards from "@components/Card";
import Layout from "src/Layout";

export const getStaticProps = async () => {
  const response = await fetch("https://next-avocado-two.vercel.app/api/avo");
  const { data: productList } = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <AvoCards products={productList} />
    </Layout>
  );
};
export default HomePage;
