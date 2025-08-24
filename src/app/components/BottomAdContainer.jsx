import styled from "styled-components";
import bottomadimgdesktop from "../assets/images/bottomadimgdesktop.png";
import bottomadimg from "../assets/images/bottomadimg.png";
import useWindowWidth from "../lib/hooks/useWindowWidth";
function BottomAdContainer() {
  const windowWidth = useWindowWidth();
  const url = windowWidth > 768 ? bottomadimgdesktop : bottomadimg;
  return (
    <Container>
      <Img src={url} alt={url} />
      <TextContainer>
        <Title>
          Big Summer <Br />
          <Bold>Sale</Bold>
        </Title>
        <Text>
          Commodo fames vitae vitae leo mauris in. Eu <Br />
          consequat.
        </Text>
        <Button>Shop Now</Button>
      </TextContainer>
    </Container>
  );
}
export default BottomAdContainer;

const tabletWidth = "768px";
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: ${tabletWidth}) {
    text-align: left;
  }
`;

const Img = styled.img`
  width: 100%;
  display: block; // 여백이 생겨서 제거함
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 48px;
  font-weight: 100;
  color: #ffffff;
  line-height: 72px;
  letter-spacing: -1%;
  @media screen and (min-width: ${tabletWidth}) {
    line-height: normal;
    font-size: 72px;
    letter-spacing: normal;
  }
`;
const Bold = styled.span`
  font-weight: bold;
`;
const Text = styled.p`
  font-size: 16px;
  color: #787878;
  position: relative;
  bottom: 8px;
  line-height: 32px;
  @media screen and (min-width: ${tabletWidth}) {
    line-height: normal;
  }
`;
const Button = styled.button`
  border-radius: 6px;
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 16px 56px;
  color: #ffffff;
  margin-top: 40px;
  @media screen and (min-width: ${tabletWidth}) {
    margin-top: 30px;
  }
  /* 애니메이션 추가 */
`;
const Br = styled.br`
  @media screen and (min-width: ${tabletWidth}) {
    display: none;
  }
`;
