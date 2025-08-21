import styled from "styled-components";

function IphoneDescription() {
  return (
    <Container>
      <Slogun>Pro.Beyond.</Slogun>
      <ProductName>
        IPhone 14 <Br />
        <Bold>Pro</Bold>
      </ProductName>
      <Mention>
        Created to change everything for the <Br />
        better. For everyone
      </Mention>
      <Button>Shop Now</Button>
    </Container>
  );
}

export default IphoneDescription;

const desktopWidth = "1025px";
const tabletWidth = "767px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  text-align: center;
  @media screen and (min-width: ${desktopWidth}) {
    align-items: stretch;
  }
  @media screen and (min-width: ${tabletWidth}) {
    text-align: left;
  }
`;
const Slogun = styled.p`
  margin-top: 88px;
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
  line-height: 24px;
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
const Br = styled.br`
  @media screen and (min-width: ${tabletWidth}) {
    display: none;
  }
`;
