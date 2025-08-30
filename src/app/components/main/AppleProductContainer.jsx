import styled from "styled-components";
import AirpodsMaxContainer from "@/components/main/AirpodsMaxContainer.jsx";
import VisionProContainer from "@/components/main/VisionProContainer.jsx";

function AppleProductContainer() {
  return (
    <Container>
      <AirpodsMaxContainer />
      <VisionProContainer />
    </Container>
  );
}

export default AppleProductContainer;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${desktopWidth}) {
    flex-direction: row;
  }
`;
