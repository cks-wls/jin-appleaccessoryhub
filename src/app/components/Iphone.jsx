import styled from "styled-components";
import IphoneDescription from "@/components/IphoneDescription.jsx";
import iphoneImage from "@/assets/images/iphone14pro.svg";

function Iphone() {
  return (
    <Container>
      <IphoneDescription />
      <IphoneImage src={iphoneImage} alt="iPhone 14 Pro" />
    </Container>
  );
}

const desktopWidth = "1025px";
const tabletWidth = "767px";

export default Iphone;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #211c24;
  flex-direction: column;
  height: 632px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: ${desktopWidth}) {
    flex-direction: row;
  }
`;
const IphoneImage = styled.img`
  position: relative;
  bottom: 300px;
  z-index: 0;
  @media screen and (min-width: ${tabletWidth}) {
    bottom: 160px;
  }
  @media screen and (min-width: ${desktopWidth}) {
    bottom: 0;
  }
`;
