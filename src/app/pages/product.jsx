import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoryProduct from "@/lib/api/categoryProduct";
import CategoryAccordion from "@/components/modal/CategoryAccordion";
import arrow from "@/assets/icons/arrow.svg";
import topArrow from "@/assets/icons/toparrow.svg";
import styled from "styled-components";
import ImgSkeleton from "@/components/skeleton/ImgSkeleton";
import TitleSkeleton from "@/components/skeleton/TitleSkeleton";
import ButtonSkeleton from "@/components/skeleton/ButtonSkeleton";
function Product() {
  const { category } = useParams();
  const CATEGORY_MAP = {
    Watches: "mens-watches",
    Accessories: "mobile-accessories",
  };
  const [modalOpen, setModalOpen] = useState(false);
  const categoryName = (CATEGORY_MAP[category] || category).toLowerCase();
  // watches, accessories일때 다르게 처리함
  const [product, setProduct] = useState([]);
  const [imgLoading, setImgLoading] = useState(false);
  useEffect(() => {
    categoryProduct({ category: categoryName }).then((data) => {
      setProduct(data);
      setImgLoading(false);
    });
  }, [categoryName]);
  return (
    <Container>
      <PageContainer>
        <PageList>Home</PageList>
        <PageList>{">"}</PageList>
        <PageList>Catalog</PageList>
        <PageList>{">"}</PageList>
        <CategoryName>{category}</CategoryName>
      </PageContainer>
      <Main>
        <Category>
          <TitleSection onClick={() => setModalOpen((prev) => !prev)}>
            <ModalTitle>Category</ModalTitle>
            <ArrowImg src={modalOpen ? topArrow : arrow} />
          </TitleSection>
          <div>{modalOpen && <CategoryAccordion />}</div>
        </Category>
        <ProductContainer>
          <CountContainer>
            <ProductCount>Select Products : </ProductCount>
            <Length>{product.length}</Length>
          </CountContainer>
          <CardContainer>
            {product.map((val) => {
              return (
                <Card key={val.title}>
                  {!imgLoading && <ImgSkeleton />}
                  <Img
                    src={val.images[0]}
                    onLoad={() => setImgLoading(true)}
                    style={{ display: imgLoading ? "block" : "none" }}
                  />
                  {!imgLoading && <TitleSkeleton />}
                  <Title style={{ display: imgLoading ? "block" : "none" }}>
                    {val.title}
                  </Title>
                  {!imgLoading && <TitleSkeleton />}
                  <Price style={{ display: imgLoading ? "block" : "none" }}>
                    $ {val.price}
                  </Price>
                  {!imgLoading && <ButtonSkeleton />}
                  <Button style={{ display: imgLoading ? "block" : "none" }}>
                    Shop Now
                  </Button>
                </Card>
              );
            })}
          </CardContainer>
        </ProductContainer>
      </Main>
    </Container>
  );
}

export default Product;

const tabletWidth = "768px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 80%;
  margin: 44px auto;
`;
const PageContainer = styled.div`
  display: flex;
  gap: 16px;
`;
const CategoryName = styled.span`
  color: black;
  font-size: 14px;
`;
const PageList = styled.span`
  color: gray;
  font-size: 14px;
`;
const Main = styled.div`
  display: flex;
  gap: 32px;
`;
const Category = styled.div`
  display: none;
  @media screen and (min-width: ${tabletWidth}) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
const ModalTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const ProductCount = styled.span`
  color: gray;
  font-size: 14px;
`;
const Length = styled.span`
  color: black;
  font-size: 14px;
`;
const CountContainer = styled.div``;
const CardContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  gap: 16px;
  padding: 0 16px;
  border-radius: 9px;
  width: 266.33px;
  height: 432px;
`;
const Img = styled.img`
  width: 160px;
  height: 160px;
  margin-top: 72px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
const Price = styled.h3`
  font-weight: 900;
  font-size: 24px;
`;
const Button = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 24px;
  padding: 12px 64px;
  border-radius: 8px;
  background-color: black;
  color: #ffffff;
  font-weight: bold;
`;
const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;
const TitleSection = styled.div`
  display: flex;
  cursor: pointer;
  gap: 164px;
  padding-bottom: 10px;
  border-bottom: 1px solid #b5b5b5;
`;
