import { createGlobalStyle } from "styled-components";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import AdProductContainer from "@/components/AdProductContainer.jsx";
import BottomProductContainer from "@/components/BottomProductContainer.jsx";
import BottomAdContainer from "@/components/BottomAdContainer.jsx";
import NotoSansWoff2 from "@/assets/fonts/NotoSans-Regular.woff2";
import NotoSansWoff from "@/assets/fonts/NotoSans-Regular.woff";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AdProductContainer />
      <BottomProductContainer />
      <BottomAdContainer />
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family : 'NotoSans';
    src : url(${NotoSansWoff2}) format('woff2'),
          url(${NotoSansWoff}) format('woff');
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family : 'NotoSans';
}
`;
