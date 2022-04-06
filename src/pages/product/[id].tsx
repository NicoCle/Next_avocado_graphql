import { GetStaticProps } from "next";
import Layout from "src/Layout";
import ProductSummary from "@components/ProductSummary";

export const getStaticPaths = async () => {
  const response = await fetch("https://next-avocado-two.vercel.app/api/avo");
  const { data: productList } = await response.json();
  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://next-avocado-two.vercel.app/api/avo/${params.id}`
  );
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product === null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};
export default ProductPage;
