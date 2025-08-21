import styled from "styled-components";
import IphoneDescription from "./IphoneDescription.jsx";
import iphoneImage from "../assets/images/iphone14pro.svg";

function Iphone() {
  return (
    <Container>
      <IphoneDescription />
      <img src={iphoneImage} alt="iPhone 14 Pro" />
    </Container>
  );
}

const tabletScreen = "768px";
export default Iphone;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #211c24;
  height: 769px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: ${tabletScreen}) {
    height: 632px;
  }
`;
