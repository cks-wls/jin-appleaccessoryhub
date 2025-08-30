import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/common/SearchBar.jsx";
import NavLinks from "@/components/common/NavLinks.jsx";
import blackLogo from "@/assets/icons/blacklogo.svg";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Logo
          src={blackLogo}
          alt="Apple Accessory Hub Logo"
          onClick={() => navigate("/")}
        />
        <SearchBar />
        <NavLinks />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 88px;
  border-bottom: 1px solid #b5b5b5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;
const Logo = styled.img`
  cursor: pointer;
`;
