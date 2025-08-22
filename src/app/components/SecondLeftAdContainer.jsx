import styled from "styled-components";
import PlayStation5Container from "./PlayStation5Container.jsx";
import AppleProductContainer from "./AppleProductContainer.jsx";

function SecondLeftAdContainer() {
  return (
    <Container>
      <PlayStation5Container />
      <AppleProductContainer />
    </Container>
  );
}

export default SecondLeftAdContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
