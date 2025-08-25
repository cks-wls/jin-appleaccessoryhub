import styled from "styled-components";
import visionproDesktopImg from "@/assets/images/visionprodesktop.svg";
import visionproImg from "@/assets/images/visionpro.svg";
import VisionProDescription from "@/components/VisionProDescription";
import useWindowWidth from "@/lib/hooks/useWindowWidth.jsx";

function VisionProContainer() {
  const windowWidth = useWindowWidth();
  const url = windowWidth >= 1025 ? visionproDesktopImg : visionproImg;
  return (
    <Container>
      <img src={url} alt="visionproImg" />
      <VisionProDescription />
    </Container>
  );
}

export default VisionProContainer;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 392.44px;
  background-color: #353535;
  gap: 16px;
  text-align: center;
  @media screen and (min-width: ${desktopWidth}) {
    width: 50%;
    flex-direction: row;
    text-align: left;
    height: auto;
    justify-content: start;
  }
`;
