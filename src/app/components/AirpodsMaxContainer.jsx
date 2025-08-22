import styled from "styled-components";
import airpodsMaxDesktopImg from "../assets/images/airpodsmaxdesktop.svg";
import AirpodsMaxDescription from "./AirpodsMaxDescription";

function AirpodsMaxContainer() {
  return (
    <Container>
      <img src={airpodsMaxDesktopImg} alt="airpodsmaxImg" />
      <AirpodsMaxDescription />
    </Container>
  );
}

export default AirpodsMaxContainer;

const Container = styled.div`
  display: flex;
  width: 50%;
  background-color: #ededed;
  align-items: center;
  gap: 48px;
`;
