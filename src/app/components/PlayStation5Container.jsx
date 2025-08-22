import styled from "styled-components";
import playStation5DesktopImg from "../assets/images/playstation5desktop.svg";
import PlatStation5Description from "./PlatStation5Description.jsx";
function PlayStation5Container() {
  return (
    <Container>
      <img src={playStation5DesktopImg} alt="PlayStation 5" />
      <PlatStation5Description />
    </Container>
  );
}

export default PlayStation5Container;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 328px;
  align-items: center;
  background-color: #ffffff;
  gap: 16px;
`;
