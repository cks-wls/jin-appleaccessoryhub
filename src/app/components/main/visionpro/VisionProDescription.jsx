import styled from "styled-components";

function VisionProDescription() {
  return (
    <Container>
      <Title>
        Apple <Br /> Vision <Bold>Pro</Bold>
      </Title>
      <Description>
        An immersive way to <Br />
        experience <Br />
        <br />
        entertainment
      </Description>
    </Container>
  );
}

export default VisionProDescription;

const desktopWidth = "1025px";
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
  font-size: 16px;
  color: #909090;
  line-height: 24px;
  @media screen and (min-width: ${desktopWidth}) {
    font-size: 14px;
    br {
      display: none;
    }
  }
`;
const Br = styled.span`
  display: none;
  @media screen and (min-width: ${desktopWidth}) {
    display: block;
  }
`;
