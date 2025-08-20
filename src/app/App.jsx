import { createGlobalStyle } from "styled-components";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.js";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
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
