import styled from "styled-components";
import bottomImg from "../consts/bottomImg";
function BottomProductContainer() {
  return (
    <Container>
      {bottomImg.map((val) => {
        return (
          <BottomEachProductContainer
            $padding={val["padding"]}
            $backgroundColor={val["backgroundColor"]}
          >
            <img src={val.url} alt={val.url} />
            <Title $color={val["color"] ?? "black"}>{val.title}</Title>
            <Button
              $color={val["color"] ?? "black"}
              $border={val["border"] ?? "1px solid black"}
            >
              Shop Now
            </Button>
          </BottomEachProductContainer>
        );
      })}
    </Container>
  );
}

export default BottomProductContainer;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const BottomEachProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.$padding};
  background: ${(p) => p.$backgroundColor};
  width: 25%;
`;
const Title = styled.h2`
  font-weight: 300;
  font-size: 33px;
  margin: 32px 0 16px 0;
  color: ${(p) => p.$color};
`;
const Button = styled.button`
  padding: 16px 56px;
  width: 191px;
  height: 56px;
  border-radius: 6px;
  color: ${(p) => p.$color};
  border: ${(p) => p.$border};
  background-color: transparent;
  /* 애니메이션 추가 */
`;
