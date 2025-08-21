import styled from "styled-components";
import Iphone from "./Iphone.jsx";

function AdProductContainer() {
  return (
    <>
      <Container>
        <Iphone />
      </Container>
    </>
  );
}
export default AdProductContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
