import likeIcon from "../assets/like.svg";
import cartIcon from "../assets/cart.svg";
import profileIcon from "../assets/profile.svg";
import etcIcon from "../assets/etc.svg";
import "./style/navLinksStyle.css";

export default function NavLinks() {
  return (
    <div className="nav-links">
      <img src={likeIcon} alt="Like Icon" className="nav-icon" />
      <img src={cartIcon} alt="Cart Icon" className="nav-icon" />
      <img src={profileIcon} alt="Profile Icon" className="nav-icon" />
      <img src={etcIcon} alt="etc Icon" className="etc-icon" />
    </div>
  );
}
