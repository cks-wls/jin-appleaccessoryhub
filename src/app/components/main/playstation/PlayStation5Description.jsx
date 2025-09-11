import styled from "styled-components";

function PlayStation5Description() {
  return (
    <Container>
      <Title>
        PlayStation <Bold>5</Bold>
      </Title>
      <Description>
        Incredibly powerful CPUs, GPUs, and an SSD <br />
        with
        <Br /> integrated I/O will redefine your <br />
        PlayStation
        <Br /> experience.
      </Description>
    </Container>
  );
}

export default PlayStation5Description;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.h2`
  font-size: 49px;
  font-weight: lighter;
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
const Bold = styled.span`
  font-weight: bold;
`;
const Br = styled.span`
  display: none;
  @media screen and (min-width: ${desktopWidth}) {
    display: block;
  }
`;
// 해결해야 할 문제 -> 너비가 줄어들깨 playstation 글자가 밑으로 내려오지 않고 잘리는 현상이 발생
