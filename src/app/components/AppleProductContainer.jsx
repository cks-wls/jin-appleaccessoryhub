import styled from "styled-components";
import AirpodsMaxContainer from "./AirpodsMaxContainer.jsx";
import VisionProContainer from "./VisionProContainer.jsx";

function AppleProductContainer() {
  return (
    <Container>
      <AirpodsMaxContainer />
      <VisionProContainer />
    </Container>
  );
}

export default AppleProductContainer;

const Container = styled.div`
  display: flex;
`;
