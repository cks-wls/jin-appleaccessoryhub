import CategorySection from "@/components/main/CategorySection";
import styled from "styled-components";
function CategoryContainer() {
  return (
    <Container>
      <Title>Browse By Category</Title>
      <CategorySection />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 60px 160px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;
export default CategoryContainer;
