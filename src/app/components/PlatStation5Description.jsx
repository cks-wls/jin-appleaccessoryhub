import styled from "styled-components";

function PlatStation5Description() {
  return (
    <div>
      <Title>PlayStation 5</Title>
      <Description>
        Incredibly powerful CPUs, GPUs, and an SSD with <br /> integrated I/O
        will redefine your PlayStation <br />
        experience.
      </Description>
    </div>
  );
}

export default PlatStation5Description;

const Title = styled.h2`
  font-size: 49px;
  font-weight: 500;
`;
const Description = styled.p`
  font-size: 14px;
  color: #909090;
  line-height: 24px;
  font-weight: 500;
`;
