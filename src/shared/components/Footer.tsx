import "./style/footerStyle.css";
import Services from "../consts/Services.jsx";
import Assitnace from "../consts/Assistance.jsx";
import twitterLogo from "../assets/twitter.svg";
import facebookLogo from "../assets/facebook.svg";
import tiktokLogo from "../assets/tiktok.svg";
import instagramLogo from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer-cont">
      <div className="footer-top">
        <div className="description">
          <h3>Cyber</h3>
          <p>
            We are a residential interior design firm located in <br />
            Portland. Our boutique-studio offers more than
          </p>
        </div>
        <div className="services">
          <Services />
        </div>
        <div className="asssistance">
          <Assitnace />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="about">
          <img src={twitterLogo} alt="Twitter Logo" />
          <img src={facebookLogo} alt="Facebook Logo" />
          <img src={tiktokLogo} alt="Tiktok Logo" />
          <img src={instagramLogo} alt="Instagram Logo" />
        </div>
      </div>
    </footer>
  );
}
