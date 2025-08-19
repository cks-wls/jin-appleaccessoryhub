import "./style/headerStyle.css";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import blackLogo from "../assets/blacklogo.svg";
export default function Header() {
  return (
    <>
      <div className="container">
        <img src={blackLogo} alt="Apple Accessory Hub Logo" className="logo" />
        <SearchBar />
        <NavLinks />
      </div>
    </>
  );
}
