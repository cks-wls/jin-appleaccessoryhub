import styled from "styled-components";
function ImgSkeleton() {
  return <Container></Container>;
}

export default ImgSkeleton;

const Container = styled.div`
  width: 160px;
  height: 160px;
  margin-top: 72px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;
