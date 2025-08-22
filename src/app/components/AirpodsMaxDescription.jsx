import styled from "styled-components";
function AirpodsMaxDescription() {
  return (
    <Container>
      <Title>
        Apple <Br />
        AirPods
        <Br /> <Bold>Max</Bold>
      </Title>
      <Description>
        Computational audio. <Br /> Listen, it's powerful
      </Description>
    </Container>
  );
}

export default AirpodsMaxDescription;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.h2`
  font-weight: lighter;
  font-size: 29px;
`;
const Bold = styled.span`
  font-weight: Bold;
`;
const Description = styled.p`
  color: #909090;
  font-size: 16px;
  line-height: 24px;
  @media screen and (min-width: ${desktopWidth}) {
    font-size: 14px;
  }
`;
const Br = styled.span`
  display: none;
  @media screen and (min-width: ${desktopWidth}) {
    display: block;
  }
`;
