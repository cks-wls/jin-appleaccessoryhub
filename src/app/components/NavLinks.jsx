import styled from "styled-components";
import navImg from "../consts/navImg.jsx";
import etcIcon from "../assets/icons/etc.svg";

export default function NavLinks() {
  return (
    <NavLinksContainer>
      {navImg.map((val) => {
        const keys = Object.keys(val);
        const imgSrc = val[keys[0]];
        console.log(imgSrc);
        return <IconImg src={imgSrc} alt={keys[0]} key={keys[0]} />;
      })}
      <EtcIcon src={etcIcon} alt="Etc Icon" />
    </NavLinksContainer>
  );
}
const mobileWidth = "767px";

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const EtcIcon = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: ${mobileWidth}) {
    display: none;
  }
`;
const IconImg = styled.img`
  width: 28px;
  height: 28px;
  display: none;
  @media screen and (min-width: ${mobileWidth}) {
    display: block;
  }
`;

// 767px이하일때 아이콘 세개가 없어지고 etc 아이콘이 나오게 설정
