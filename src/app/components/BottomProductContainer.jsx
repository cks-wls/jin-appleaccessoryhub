import styled from "styled-components";
import ClothContainer from "./ClothContainer";
import ElectronicsContainer from "./ElectronicsContainer";
import FurnitureContainer from "./FurnitureContainer";
import ShoesContainer from "./ShoesContainer";
function BottomProductContainer() {
  return (
    <Container>
      <ClothContainer />
      <ElectronicsContainer />
      <FurnitureContainer />
      <ShoesContainer />
    </Container>
  );
}

export default BottomProductContainer;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 33px;
`;
