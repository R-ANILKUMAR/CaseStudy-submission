import AllCategories from "../components/AllCategories";
import Slider from "../components/Slider";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};

export default function index({ categories }) {
  return (
    <>
      <Slider />
      <AllCategories categories={categories} />;
    </>
  );
}
