import styled from "styled-components";
import PlayStation5Container from "@/components/PlayStation5Container.jsx";
import AppleProductContainer from "@/components/AppleProductContainer.jsx";

function SecondLeftAdContainer() {
  return (
    <Container>
      <PlayStation5Container />
      <AppleProductContainer />
    </Container>
  );
}

export default SecondLeftAdContainer;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: ${desktopWidth}) {
    width: 50%;
  }
`;
