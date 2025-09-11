import styled from "styled-components";
import useWindowWidth from "@/lib/hooks/useWindowWidth.jsx";
import airpodsMaxDesktopImg from "@/assets/images/airpodsmaxdesktop.svg";
import airpodsMaxImg from "@/assets/images/airpodsmax.svg";
import AirpodsMaxDescription from "@/components/main/airpodsmax/AirpodsMaxDescription";

function AirpodsMaxContainer() {
  const windowWidth = useWindowWidth();
  const url = windowWidth >= 1025 ? airpodsMaxDesktopImg : airpodsMaxImg;
  return (
    <Container>
      <img src={url} alt="airpodsmaxImg" />
      <AirpodsMaxDescription />
    </Container>
  );
}

export default AirpodsMaxContainer;

const desktopWidth = "1025px";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ededed;
  align-items: center;
  justify-content: center;
  height: 376px;
  gap: 24px;
  text-align: center;
  @media screen and (min-width: ${desktopWidth}) {
    width: 50%;
    gap: 48px;
    justify-content: start;
    flex-direction: row;
    height: 272px;
    text-align: left;
  }
`;
