import styled from "styled-components";
import bottomImg from "@/consts/bottomImg";
function BottomProductContainer() {
  return (
    <Container>
      {bottomImg.map((val) => {
        return (
          <BottomEachProductContainer
            $padding={val["padding"]}
            $backgroundColor={val["backgroundColor"]}
            key={val.title}
          >
            <img src={val.url} alt={val.url} />
            <Title $color={val["color"] ?? "black"}>{val.title}</Title>
            <Button
              $color={val["color"] ?? "black"}
              $border={val["border"] ?? "1px solid black"}
              type="button"
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

const desktopWidth = "1025px";
const Container = styled.div`
  display: none;
  width: 100%;
  @media screen and (min-width: ${desktopWidth}) {
    display: flex;
  }
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
