import styled from "styled-components";
import visionproDesktopImg from "../assets/images/visionprodesktop.svg";
import VisionProDescription from "./VisionProDescription";

function VisionProContainer() {
  return (
    <Container>
      <VisionProImg src={visionproDesktopImg} alt="visionproImg" />
      <VisionProDescription />
    </Container>
  );
}

export default VisionProContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #353535;
  gap: 16px;
`;
const VisionProImg = styled.img`
  width: 136px;
  height: 190px;
`;
