import AsideStyles from "./styles/AsideStyles";
import ProductsList from "./ProductsList";
import { useRouter } from "next/dist/client/router";
import Dropdown from "./DropDown";

export default function Products({ categories, products }) {
  const router = useRouter();
  return (
    <>
      <AsideStyles className="aside-menu">
        <aside>
          {categories.map((item) => {
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
      </AsideStyles>
      {/* <Dropdown /> */}
      <ProductsList products={products} />
    </>
  );
}
