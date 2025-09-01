import styled from "styled-components";
import accessoryImg from "@/consts/accessoryImg";
import { useNavigate } from "react-router-dom";

function CategorySection() {
  const navigate = useNavigate();
  return (
    <Container>
      {accessoryImg.map((val) => {
        const title = Object.keys(val);
        const url = val[title];
        return (
          <Section key={title} onClick={() => navigate(`/product/${title}`)}>
            <Img src={url} alt={title}></Img>
            <Title>{title}</Title>
          </Section>
        );
      })}
    </Container>
  );
}

export default CategorySection;
const Container = styled.div`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
`;
const Section = styled.div`
  padding: 24px 32px;
  width: 160px;
  height: 128px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  gap: 8px;
  cursor: pointer;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
`;
const Img = styled.img`
  width: 48px;
  height: 48px;
`;
