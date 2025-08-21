import styled from "styled-components";

function IphoneDescription() {
  return (
    <Container>
      <Slogun>Pro.Beyond.</Slogun>
      <ProductName>
        IPhone 14 <Bold>Pro</Bold>
      </ProductName>
      <Mention>
        Created to change everything gor the better. For everyone
      </Mention>
      <Button>Shop now</Button>
    </Container>
  );
}

export default IphoneDescription;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Slogun = styled.p`
  color: #7b777c;
  font-size: 25px;
  font-weight: 600;
`;
const ProductName = styled.p`
  color: #fff;
  font-size: 96px;
  font-weight: lighter;
`;
const Bold = styled.span`
  font-weight: bold;
`;
const Mention = styled.p`
  color: #909090;
  font-size: 18px;
  font-weight: 500;
`;
const Button = styled.button`
  width: 191px;
  height: 56px;
  border-radius: 6px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
  cursor: pointer;
  &:active {
    // 버튼에 클릭 애니메이션 추가(anumation pulse)
  }
`;
