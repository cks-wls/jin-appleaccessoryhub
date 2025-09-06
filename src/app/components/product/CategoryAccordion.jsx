import styled from "styled-components";
import categoryName from "@/lib/api/categoryName";
import { useEffect, useState } from "react";
function CategoryAccordion() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    categoryName().then((data) => setCategory(data));
  }, []);
  return (
    <Container>
      {category.map((val) => {
        return (
          <ListContainer key={val}>
            <List type="checkbox" id={val} />
            <Value for={val}>{val}</Value>
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
