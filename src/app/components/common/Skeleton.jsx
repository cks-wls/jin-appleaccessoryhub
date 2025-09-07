import styled from "styled-components";
function Skeleton() {
  return <Container>로딩중...</Container>;
}

export default Skeleton;

const Container = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;
