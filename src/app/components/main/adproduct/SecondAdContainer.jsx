import styled from "styled-components";
import SecondLeftAdContainer from "@/components/main/adproduct/SecondLeftAdContainer.jsx";
import MacbookAirContainer from "@/components/main/macbookair/MacbookAirContainer.jsx";

function SecondAdContainer() {
  return (
    <Container>
      <SecondLeftAdContainer />
      <MacbookAirContainer />
    </Container>
  );
}
export default SecondAdContainer;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  @media screen and (min-width: ${desktopWidth}) {
    flex-direction: row;
  }
`;
