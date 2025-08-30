import styled from "styled-components";
import Services from "@/components/common/Services.jsx";
import Assitnace from "@/components/common/Assistance.jsx";
import footerImg from "@/consts/footerImg.jsx";

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
const tabletScreen = "768px";

const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: #ffffff;
  padding: 0 10%;
  gap: 90px;
  @media screen and (min-width: ${tabletScreen}) {
    height: 504px;
    align-items: stretch;
    gap: 100px;
  }
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  gap: 32px;
  top: 48px;
  @media screen and (min-width: ${tabletScreen}) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    top: 104px;
  }
  h3 {
    font-size: 20px;
    padding-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
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
  margin-bottom: 48px;
`;
const FooterImg = styled.img`
  width: 25px;
  height: 25px;
`;
