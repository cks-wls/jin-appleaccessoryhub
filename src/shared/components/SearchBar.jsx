import "./style/searchBarStyle.css";
import searchIcon from "../assets/search.svg";

export default function SearchBar() {
  return (
    <>
      <div className="search-cont">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </>
  );
}
