import styled from "styled-components";
import electronicsImg from "../assets/images/electronics.svg";
function ElectronicsContainer() {
  return (
    <Container>
      <img src={electronicsImg} alt="electronicsImg" />
      <Title>Electronics</Title>
      <Button>Shop Now</Button>
    </Container>
  );
}

export default ElectronicsContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 29px 56px 34px;
  background-color: #f9f9f9;
  width: 25%;
`;
const Title = styled.h2`
  font-weight: 300;
  font-size: 33px;
  margin: 32px 0 16px 0;
`;
const Button = styled.button`
  padding: 16px 56px;
  width: 191px;
  height: 56px;
  border-radius: 6px;
  border: 1px solid black;
  background-color: transparent;
  /* 애니메이션 추가 */
`;
