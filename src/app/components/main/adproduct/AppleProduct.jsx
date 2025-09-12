import styled from "styled-components";
import AirpodsMax from "@/components/main/airpodsmax/AirpodsMax.jsx";
import VisionPro from "@/components/main/visionpro/VisionPro.jsx";

function AppleProduct() {
  return (
    <Container>
      <AirpodsMax />
      <VisionPro />
    </Container>
  );
}

export default AppleProduct;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${desktopWidth}) {
    flex-direction: row;
  }
`;
