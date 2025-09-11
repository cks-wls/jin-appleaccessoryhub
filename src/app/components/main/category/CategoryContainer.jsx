import CategorySection from "@/components/main/category/CategorySection";
import styled from "styled-components";
function CategoryContainer() {
  return (
    <Container>
      <Inner>
        <Title>Browse By Category</Title>
        <CategorySection />
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 60px 0;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Title = styled.h3`
  width: 80%;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 900;
`;
export default CategoryContainer;
