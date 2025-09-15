import styled from "styled-components";
import navImg from "@/consts/navImg.jsx";
import etcIcon from "@/assets/icons/etc.svg";
import { useNavigate } from "react-router-dom";
export default function NavLinks({ setModalOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <NavLinksContainer>
        {navImg.map((val) => {
          const keys = Object.keys(val);
          const imgSrc = val[keys[0]];
          return (
            <IconImg
              src={imgSrc}
              alt={keys[0]}
              key={keys[0]}
              onClick={() => navigate(`/${keys[0]}`)}
            />
          );
        })}
        <EtcIcon
          src={etcIcon}
          alt="Etc Icon"
          onClick={() => setModalOpen((prev) => !prev)}
        />
      </NavLinksContainer>
    </>
  );
}
const tabletWidth = "767px";

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const EtcIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media screen and (min-width: ${tabletWidth}) {
    display: none;
  }
`;
const IconImg = styled.img`
  width: 28px;
  height: 28px;
  display: none;
  cursor: pointer;
  @media screen and (min-width: ${tabletWidth}) {
    display: block;
  }
`;

// 767px이하일때 아이콘 세개가 없어지고 etc 아이콘이 나오게 설정
