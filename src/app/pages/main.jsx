import AdProduct from "@/components/main/adproduct/AdProduct";
import BottomProduct from "@/components/main/bottom/BottomProduct";
import BottomAd from "@/components/main/bottom/BottomAd";
import Category from "@/components/main/category/Category";
import Product from "@/components/main/product/Product";

function Main() {
  return (
    <>
      <AdProduct />
      <Category />
      <Product />
      <BottomProduct />
      <BottomAd />
    </>
  );
}

export default Main;
