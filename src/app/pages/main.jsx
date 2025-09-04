import AdProductContainer from "@/components/main/AdProductContainer";
import BottomProductContainer from "@/components/main/BottomProductContainer";
import BottomAdContainer from "@/components/main/BottomAdContainer";
import CategoryContainer from "@/components/main/CategoryContainer";
import ProductContainer from "@/components/main/ProductContainer";

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
