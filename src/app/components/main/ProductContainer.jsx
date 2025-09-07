import styled from "styled-components";
import categoryName from "@/lib/api/categoryName";
import categoryProduct from "@/lib/api/categoryProduct";
import { useState, useEffect } from "react";
import Skeleton from "@/components/common/Skeleton";
function ProductContainer() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState("beauty");
  const [productInformation, setProductInformation] = useState([]);
  const [imgLoading, setImgLoading] = useState(false);
  useEffect(() => {
    categoryName().then((data) => setCategoryList(data));
  }, []);
  useEffect(() => {
    setImgLoading(false);
    categoryProduct({ category: selectCategory }).then((productData) => {
      setProductInformation(productData);
    });
  }, [selectCategory]);
  //  selectCategory 바뀔때마다 useEffect 실행
  return (
    <Container>
      <NameContainer>
        {categoryList.map((val) => {
          return (
            <CategoryName
              key={val}
              onClick={() => {
                setSelectCategory(val);
              }}
              $chooseName={selectCategory}
            >
              {val}
            </CategoryName>
          );
        })}
      </NameContainer>
      <MainContainer>
        {productInformation.map((val) => {
          return (
            <Item key={val.id}>
              {!imgLoading && <Skeleton />}
              <Img
                src={val.images[0]}
                onLoad={() => setImgLoading(true)}
                style={{ display: imgLoading ? "block" : "none" }}
              />
              <Title>{val.title}</Title>
              <Price>${val.price}</Price>
              <Button>Shop Now</Button>
            </Item>
          );
        })}
      </MainContainer>
    </Container>
  );
}

export default ProductContainer;

const Container = styled.div`
  padding: 56px 10.5%;
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  gap: 32px;
`;
const NameContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 32px;
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 안보이게 설정 */
  }
`;
const CategoryName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) =>
    props.$chooseName === props.children ? "#000" : "#8b8b8b"};
  border-bottom: ${(props) =>
    props.$chooseName === props.children ? "2px solid #000" : "none"};
`;
const MainContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* 이 부분도 categorySection과 같은 문제.. */
`;
const Item = styled.div`
  display: flex;
  width: 283px;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  text-align: center;
  background-color: #f6f6f6;
  border-radius: 9px;
  height: 432px;
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
  position: relative;
  top: 8px;
  padding: 12px 64px;
  border-radius: 8px;
  background-color: black;
  color: #ffffff;
  font-weight: bold;
`;
