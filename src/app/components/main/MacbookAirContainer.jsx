import styled from "styled-components";
import MacBookAirDescription from "@/components/main/MacBookAirDescription.jsx";
import macbookAirDesktopImg from "@/assets/images/macbookairdesktop.svg";
import macbookAirImg from "@/assets/images/macbookair.svg";

function MacbookAirContainer() {
  return (
    <Container>
      <MacBookAirPhoneImg src={macbookAirImg} alt="MacBook Air" />
      <MacBookAirDescription />
      <MacBookAirImg src={macbookAirDesktopImg} alt="MacBook Air" />
    </Container>
  );
}

export default MacbookAirContainer;

const desktopWidth = "1025px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 504px;
  width: 100%;
  align-items: center;
  background-color: #ededed;
  text-align: center;
  gap: 24px;
  @media screen and (min-width: ${desktopWidth}) {
    padding-left: 56px;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    text-align: left;
  }
`;
const MacBookAirPhoneImg = styled.img`
  @media screen and (min-width: ${desktopWidth}) {
    display: none;
  }
`;
const MacBookAirImg = styled.img`
  display: none;
  @media screen and (min-width: ${desktopWidth}) {
    display: block;
  }
`;
