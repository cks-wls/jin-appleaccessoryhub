import styled from "styled-components";

function VisionProDescription() {
  return (
    <Container>
      <Title>
        Apple <br /> Vision <Bold>Pro</Bold>
      </Title>
      <Description>
        An immersive way to <br />
        experience <br />
        entertainment
      </Description>
    </Container>
  );
}

export default VisionProDescription;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.h2`
  font-size: 29px;
  font-weight: lighter;
  color: #ffffff;
`;
const Bold = styled.span`
  font-weight: Bold;
`;
const Description = styled.p`
  font-size: 14px;
  color: #909090;
  line-height: 24px;
`;
