import styled from "styled-components";
import bottomadimgdesktop from "../assets/images/bottomadimgdesktop.png";
function BottomAdContainer() {
  return (
    <Container>
      <Img src={bottomadimgdesktop} alt="bottomadimgdesktop" />
      <TextContainer>
        <Title>
          Big Summer <Bold>Sale</Bold>
        </Title>
        <Text>Commodo fames vitae vitae leo mauris in. Eu consequat.</Text>
        <Button>Shop Now</Button>
      </TextContainer>
    </Container>
  );
}
export default BottomAdContainer;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: 72px;
  font-weight: 100;
  color: #ffffff;
`;
const Bold = styled.span`
  font-weight: bold;
`;
const Text = styled.p`
  font-size: 16px;
  color: #787878;
  position: relative;
  bottom: 8px;
`;
const Button = styled.button`
  border-radius: 6px;
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 16px 56px;
  color: #ffffff;
  margin-top: 30px;
  /* 애니메이션 추가 */
`;
