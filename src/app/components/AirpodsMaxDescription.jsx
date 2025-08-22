import styled from "styled-components";
function AirpodsMaxDescription() {
  return (
    <Container>
      <Title>
        Apple <br />
        AirPods
        <br /> <Bold>Max</Bold>
      </Title>
      <Description>
        Computational audio. <br /> Listen, it's powerful
      </Description>
    </Container>
  );
}

export default AirpodsMaxDescription;
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
  font-size: 14px;
  line-height: 24px;
`;
