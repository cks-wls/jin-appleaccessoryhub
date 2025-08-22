import styled from "styled-components";

function MacBookAirDescription() {
  return (
    <Container>
      <Title>
        Macbook
        <Br />
        <Bold> Air</Bold>
      </Title>
      <Description>
        The new 15‑inch MacBook Air makes room
        <br /> for more <Br />
        of what you love with a spacious <br /> Liquid Retina <Br />
        display.
      </Description>
      <Button>Shop Now</Button>
    </Container>
  );
}

export default MacBookAirDescription;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: ${desktopWidth}) {
    align-items: stretch;
  }
`;
const Title = styled.h2`
  font-size: 64px;
  font-weight: lighter;
`;
const Bold = styled.span`
  font-weight: bold;
`;
const Description = styled.p`
  font-size: 14px;
  color: #909090;
  line-height: 24px;
  @media screen and (min-width: ${desktopWidth}) {
    br {
      display: none;
    }
  }
`;
const Button = styled.button`
  background-color: transparent;
  width: 90%;
  height: 56px;
  border: 1px solid #000;
  border-radius: 6px;
  font-weight: 500;
  /* animation추가하기 */
  @media screen and (min-width: ${desktopWidth}) {
    width: 191px;
  }
`;
const Br = styled.span`
  display: none;
  @media screen and (min-width: ${desktopWidth}) {
    display: block;
  }
`;
