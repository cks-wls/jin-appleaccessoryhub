import styled from "styled-components";
import SecondLeftAdContainer from "./SecondLeftAdContainer.jsx";
import MacbookAirContainer from "./MacbookAirContainer.jsx";

function SecondAdContainer() {
  return (
    <Container>
      <SecondLeftAdContainer />
      <MacbookAirContainer />
    </Container>
  );
}
export default SecondAdContainer;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  z-index: 1;
`;
