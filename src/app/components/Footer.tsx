import styled from "styled-components";
import Services from "./Services.jsx";
import Assitnace from "./Assistance.jsx";
import footerImg from "../consts/footerImg.jsx";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <div>
          <h3>Cyber</h3>
          <p>
            We are a residential interior design firm located in <br />
            Portland. Our boutique-studio offers more than
          </p>
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Assitnace />
        </div>
      </FooterTop>
      <div>
        <About>
          {footerImg.map((val) => {
            const key = Object.keys(val)[0];
            const imgUrl = val[key];
            return <FooterImg key={key} src={imgUrl} alt={key} />;
          })}
        </About>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100vw;
  height: 504px;
  background-color: #000;
  color: #ffffff;
  padding: 0 10%;
  gap: 100px;
`;
const FooterTop = styled.div`
  display: flex;
  position: relative;
  top: 104px;
  justify-content: space-between;
  h3 {
    font-size: 20px;
    padding-bottom: 20px;
  }
  p {
    font-size: 16px;
  }
  ul {
    font-size: 20px;
    font-weight: bold;
  }
  li {
    list-style: none;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 400;
  }
`;
const About = styled.div`
  display: flex;
  gap: 36px;
`;
const FooterImg = styled.img`
  width: 25px;
  height: 25px;
`;
