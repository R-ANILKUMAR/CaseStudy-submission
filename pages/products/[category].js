import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import ProductsList from "../../components/ProductsList";
import AsideStyles from "../../components/styles/AsideStyles";

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:5000/products");
  const dataParse = await data.json();

  const categoryData = await fetch("http://localhost:5000/categories");
  const categoryDataParse = await categoryData.json();

  return {
    props: {
      idData: dataParse,
      category: categoryDataParse,
    },
  };
};

export default function productCategories({ idData, category }) {
  const router = useRouter();
  const id = router.query.category;

  let filterData = idData.filter((item) => item.category === id);

  return (
    <>
      <AsideStyles>
        <aside>
          {category.map((item) => {
            return (
              <button
                onClick={() => {
                  router.push(`/products/${item.id}`);
                }}
                key={item.id}
              >
                <a>{item.name}</a>
              </button>
            );
          })}
        </aside>
        <ProductsList products={filterData} />
      </AsideStyles>
    </>
  );
}
