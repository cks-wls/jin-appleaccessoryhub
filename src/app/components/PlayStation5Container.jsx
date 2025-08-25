import styled from "styled-components";
import playStation5DesktopImg from "@/assets/images/playstation5desktop.svg";
import playStation5Img from "@/assets/images/playstation5.svg";
import PlayStation5Description from "@/components/PlayStation5Description.jsx";
import useWindowWidth from "@/lib/hooks/useWindowWidth.jsx";

function PlayStation5Container() {
  const windowWidth = useWindowWidth();
  const url = windowWidth >= 1025 ? playStation5DesktopImg : playStation5Img;
  return (
    <Container>
      <img src={url} alt="PlayStation 5" />
      <PlayStation5Description />
    </Container>
  );
}

export default PlayStation5Container;

const desktopWidth = "1025px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 424px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  gap: 24px;
  text-align: center;
  @media screen and (min-width: ${desktopWidth}) {
    flex-direction: row;
    height: 328px;
    justify-content: start;
    gap: 0;
    text-align: left;
  }
`;
