import styled from "styled-components";
import PlayStation5 from "@/components/main/playstation/PlayStation5.jsx";
import AppleProduct from "@/components/main/adproduct/AppleProduct.jsx";

function SecondLeftAd() {
  return (
    <Container>
      <PlayStation5 />
      <AppleProduct />
    </Container>
  );
}

export default SecondLeftAd;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: ${desktopWidth}) {
    width: 50%;
  }
`;
