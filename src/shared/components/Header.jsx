import "./style/headerStyle.css";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
export default function Header() {
  return (
    <>
      <div className="container">
        <h2>Cyber</h2>
        <SearchBar />
        <NavLinks />
      </div>
    </>
  );
}
