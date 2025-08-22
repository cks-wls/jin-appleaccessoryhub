import styled from "styled-components";
import Iphone from "./Iphone.jsx";
import SecondAdContainer from "./SecondAdContainer.jsx";

function AdProductContainer() {
  return (
    <>
      <Container>
        <Iphone />
        <SecondAdContainer />
      </Container>
    </>
  );
}
export default AdProductContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
