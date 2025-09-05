import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoryProduct from "@/lib/api/categoryProduct";
import styled from "styled-components";
function Product() {
  const { category } = useParams();
  const CATEGORY_MAP = {
    Watches: "mens-watches",
    Accessories: "mobile-accessories",
  };
  const categoryName = (CATEGORY_MAP[category] || category).toLowerCase();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    categoryProduct({ category: categoryName }).then((data) => {
      setProduct(data);
    });
  }, []);
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
        <Category>Category</Category>
        <ProductContainer>
          <CountContainer>
            <ProductCount>Select Products : </ProductCount>
            <Length>{product.length}</Length>
          </CountContainer>
          <CardContainer>
            {product.map((val) => {
              return (
                <Card key={val.title}>
                  <Img src={val.images[0]} />
                  <Title>{val.title}</Title>
                  <Price>{val.price}</Price>
                  <Button>Shop Now</Button>
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
  border-bottom: 1px solid #b5b5b5;
  height: 36px;
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
  /* justify-content: space-between; */
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 9px;
  width: 266.33px;
`;
const Img = styled.img`
  width: 160px;
  height: 160px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
const Price = styled.h3`
  font-weight: 900;
  font-size: 24px;
`;
const Button = styled.button`
  cursor: pointer;
  margin-top: 8px;
  position: relative;
  top: 8px;
  padding: 12px 64px;
  border-radius: 8px;
  background-color: black;
  color: #ffffff;
  font-weight: bold;
`;
