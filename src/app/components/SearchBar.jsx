import styled from "styled-components";
import searchIcon from "../assets/search.svg";

export default function SearchBar() {
  return (
    <>
      <SearchContainer>
        <img src={searchIcon} alt="Search Icon" />
        <SearchInput placeholder="Search" />
      </SearchContainer>
    </>
  );
}

const mobileWidth = "1025px";

const SearchContainer = styled.div`
  display: none;
  align-items: center;
  width: 372px;
  height: 55px;
  background-color: #f5f5f5;
  border-radius: 8px;
  img {
    position: relative;
    padding: 16px;
  }
  @media screen and (min-width: ${mobileWidth}) {
    display: flex;
  }
`;
const SearchInput = styled.input`
  background-color: #f5f5f5;
  border: 0;
  outline: none;
  font-size: 1em;
`;

// 1025px(태블릿)이하일때 검색바가 나오지 않게 설정
