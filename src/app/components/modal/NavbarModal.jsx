import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function NavbarModal() {
  const navigate = useNavigate();
  return (
    <Container>
      <Profile onClick={() => navigate("/profile")}>Profile</Profile>
      <Like onClick={() => navigate("/like")}>Like</Like>
      <Cart onClick={() => navigate("/cart")}>Cart</Cart>
    </Container>
  );
}
export default NavbarModal;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 10px;
  right: 20px;
  width: 150px;
  background-color: white;
  z-index: 2;
  padding: 10px 0;
`;
const IconImg = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
const Profile = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 5px;
`;
const Like = styled.div`
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 5px;
`;
const Cart = styled.div`
  cursor: pointer;
`;
