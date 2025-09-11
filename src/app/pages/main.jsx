import AdProductContainer from "@/components/main/adproduct/AdProductContainer";
import BottomProductContainer from "@/components/main/bottom/BottomProductContainer";
import BottomAdContainer from "@/components/main/bottom/BottomAdContainer";
import CategoryContainer from "@/components/main/category/CategoryContainer";
import ProductContainer from "@/components/main/product/ProductContainer";

function Main() {
  return (
    <>
      <AdProductContainer />
      <CategoryContainer />
      <ProductContainer />
      <BottomProductContainer />
      <BottomAdContainer />
    </>
  );
}

export default Main;
