import styled from "styled-components";
import MacBookAirDescription from "./MacBookAirDescription.jsx";
import macbookAirDesktopImg from "../assets/images/macbookairdesktop.svg";

function MacbookAirContainer() {
  return (
    <Container>
      <MacBookAirDescription />
      <MacBookAirImg src={macbookAirDesktopImg} alt="MacBook Air" />
    </Container>
  );
}

export default MacbookAirContainer;

const Container = styled.div`
  display: flex;
  width: 50%;
  padding-left: 56px;
  align-items: center;
  background-color: #ededed;
  justify-content: space-between;
`;
const MacBookAirImg = styled.img``;
