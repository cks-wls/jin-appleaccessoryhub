import { createGlobalStyle } from "styled-components";
import Header from "@/components/common/Header.jsx";
import Footer from "@/components/common/Footer.jsx";
import Main from "@/pages/main";
import Like from "@/pages/like";
import Cart from "@/pages/cart";
import Profile from "@/pages/profile";
import Product from "@/pages/product";
import NotoSansWoff2 from "@/assets/fonts/NotoSans-Regular.woff2";
import NotoSansWoff from "@/assets/fonts/NotoSans-Regular.woff";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/like" element={<Like />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:category" element={<Product />} />
      </Routes>
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
