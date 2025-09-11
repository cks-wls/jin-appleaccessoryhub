import styled from "styled-components";
import SecondLeftAd from "@/components/main/adproduct/SecondLeftAd.jsx";
import MacbookAir from "@/components/main/macbookair/MacbookAir.jsx";

function SecondAd() {
  return (
    <Container>
      <SecondLeftAd />
      <MacbookAir />
    </Container>
  );
}
export default SecondAd;

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
