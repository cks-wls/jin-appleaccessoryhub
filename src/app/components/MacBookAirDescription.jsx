import styled from "styled-components";

function MacBookAirDescription() {
  return (
    <Container>
      <Title>
        Macbook
        <br />
        <Bold>Air</Bold>
      </Title>
      <Description>
        The new 15‑inch MacBook Air makes room for more <br />
        of what you love with a spacious Liquid Retina <br />
        display.
      </Description>
      <Button>Shop Now</Button>
    </Container>
  );
}

export default MacBookAirDescription;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;
const Button = styled.button`
  background-color: transparent;
  width: 191px;
  height: 56px;
  border: 1px solid #000;
  border-radius: 6px;
  font-weight: 500;
  /* animation추가하기 */
`;
