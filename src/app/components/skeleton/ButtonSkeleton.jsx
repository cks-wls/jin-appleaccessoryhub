import styled from "styled-components";
function ButtonSkeleton() {
  return <Container></Container>;
}

export default ButtonSkeleton;

const Container = styled.div`
  background-color: lightgray;
  position: absolute;
  bottom: 30px;
  padding: 30px 64px;
  border-radius: 8px;
`;
