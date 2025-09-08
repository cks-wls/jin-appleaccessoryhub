import styled from "styled-components";
import categoryName from "@/lib/api/categoryName";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function CategoryAccordion() {
  const [category, setCategory] = useState([]);
  const { category: productVarious } = useParams();
  const [check, setCheck] = useState(productVarious);
  const navigate = useNavigate();
  useEffect(() => {
    categoryName().then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    setCheck(productVarious);
  }, [productVarious]);
  return (
    <Container>
      {category.map((val) => {
        return (
          <ListContainer key={val}>
            <List
              type="checkbox"
              id={val}
              onChange={() => {
                setCheck(val);
                navigate(`/product/${val}`);
              }}
              checked={check.toLowerCase() === val}
              // checked를 이용해 check 와 val이 일치하는 경우의 체크박스에만 체크하기
            />
            <Value htmlFor={val}>{val}</Value>
          </ListContainer>
        );
      })}
    </Container>
  );
}
export default CategoryAccordion;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const List = styled.input``;
const Value = styled.label``;
const ListContainer = styled.div`
  display: flex;
  gap: 5px;
`;
