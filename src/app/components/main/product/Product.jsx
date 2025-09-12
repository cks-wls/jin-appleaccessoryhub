import styled from "styled-components";
import categoryName from "@/lib/query/categoryName";
import categoryProduct from "@/lib/query/categoryProduct";
import { useState, useEffect } from "react";
import ImgSkeleton from "@/components/skeleton/ImgSkeleton";
import TitleSkeleton from "@/components/skeleton/TitleSkeleton";
import ButtonSkeleton from "@/components/skeleton/ButtonSkeleton";
import PriceSkeleton from "@/components/skeleton/PriceSkeleton";
import CategorySkeleton from "@/components/skeleton/CategorySkeleton";
function Product() {
  const defaultCategory = "beauty";
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState(defaultCategory);
  const [productInformation, setProductInformation] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState([]);
  const [imgLoading, setImgLoading] = useState({});
  useEffect(() => {
    setCategoryLoading([]);
    categoryName()
      .then((data) => {
        setCategoryList(data);
        setCategoryLoading(data.map(() => "true"));
      })
      .catch(() => {
        setCategoryLoading(categoryList.map(() => "false"));
      });
  }, []);
  useEffect(() => {
    categoryProduct({ category: selectCategory }).then((productData) => {
      setProductInformation(productData);
      const initialLoading = {};
      productData.forEach((val) => {
        initialLoading[val.id] = false;

        // JS Image 객체로 로딩 체크
        const img = new Image();
        img.src = val.images[0];
        img.onload = () => {
          setImgLoading((prev) => ({ ...prev, [val.id]: true }));
        };
        // 초기 렌더링시 beauty 상품에 해당하는 것은 스켈레톤만 나와 위와 같이 해결
      });
      setImgLoading(initialLoading);
    });
  }, [selectCategory]);
  //  selectCategory 바뀔때마다 useEffect 실행
  return (
    <Container>
      <NameContainer>
        {categoryList.length === 0 || categoryLoading.includes("false") ? (
          <CategorySkeleton />
        ) : (
          categoryList.map((val) => (
            <CategoryName
              key={val}
              onClick={() => {
                setSelectCategory(val);
              }}
              $chooseName={selectCategory}
            >
              {val}
            </CategoryName>
          ))
        )}
      </NameContainer>
      <MainContainer>
        {productInformation.map((val) => (
          <Item key={val.id}>
            <div style={{ position: "relative" }}>
              {/* 이미지 */}
              <Img
                src={val.images[0]}
                onLoad={() =>
                  setImgLoading((prev) => ({ ...prev, [val.id]: true }))
                }
                style={{ opacity: imgLoading[val.id] ? 1 : 0 }}
              />
              {/* 스켈레톤 */}
              {!imgLoading[val.id] && (
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <ImgSkeleton />
                </div>
              )}
            </div>

            {/* 타이틀 */}
            {!imgLoading[val.id] ? (
              <TitleSkeleton />
            ) : (
              <Title>{val.title}</Title>
            )}

            {/* 가격 */}
            {!imgLoading[val.id] ? (
              <PriceSkeleton />
            ) : (
              <Price>${val.price}</Price>
            )}

            {/* 버튼 */}
            {!imgLoading[val.id] ? (
              <ButtonSkeleton />
            ) : (
              <Button>Shop Now</Button>
            )}
          </Item>
        ))}
      </MainContainer>
    </Container>
  );
}

export default Product;

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
  position: relative;
  width: 283px;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 0 16px;
  text-align: center;
  background-color: #f6f6f6;
  border-radius: 9px;
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
  bottom: 30px;
  padding: 12px 64px;
  border-radius: 8px;
  background-color: black;
  color: #ffffff;
  font-weight: bold;
`;
