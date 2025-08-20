import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import blackLogo from "../assets/blacklogo.svg";
export default function Header() {
  return (
    <>
      <Container>
        <img src={blackLogo} alt="Apple Accessory Hub Logo" />
        <SearchBar />
        <NavLinks />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 88px;
  border-bottom: 1px solid #b5b5b5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;
