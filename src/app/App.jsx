import { createGlobalStyle } from "styled-components";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import AdProductContainer from "@/components/AdProductContainer.jsx";
import BottomProductContainer from "@/components/BottomProductContainer.jsx";
import BottomAdContainer from "@/components/BottomAdContainer.jsx";
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
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
