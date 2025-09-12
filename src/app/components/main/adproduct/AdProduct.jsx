import styled from "styled-components";
import Iphone from "@/components/main/iphonepro14/Iphone.jsx";
import SecondAd from "@/components/main/adproduct/SecondAd.jsx";

function AdProduct() {
  return (
    <>
      <Container>
        <Iphone />
        <SecondAd />
      </Container>
    </>
  );
}
export default AdProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
