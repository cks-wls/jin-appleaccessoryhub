import styled from "styled-components";
import clothImg from "../assets/images/cloth.svg";
function ClothContainer() {
  return (
    <Container>
      <img src={clothImg} alt="cloth Img" />
      <Title> Clothes</Title>
      <Button>Shop Now</Button>
    </Container>
  );
}
export default ClothContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 29px 56px 34px;
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
