import styled from "styled-components";
import shoesImg from "../assets/images/shoes.svg";
function ShoesContainer() {
  return (
    <Container>
      <img src={shoesImg} alt="shoes Img" />
      <Title>Shoes</Title>
      <Button>Shop Now</Button>
    </Container>
  );
}
export default ShoesContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2c2c2c;
  padding: 0 29px 56px 34px;
  width: 25%;
`;
const Title = styled.h2`
  color: #ffffff;
  font-size: 33px;
  font-weight: 300;
  margin: 32px 0 16px 0;
`;
const Button = styled.button`
  padding: 16px 56px;
  width: 191px;
  height: 56px;
  border-radius: 6px;
  color: #ffffff;
  border: 1px solid #ffffff;
  background-color: transparent;
  /* 애니메이션 추가 */
`;
