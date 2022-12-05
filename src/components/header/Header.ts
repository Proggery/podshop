import styled from "styled-components";
import { devices } from "../../config";

const Root = styled.header`
  background: url("img/Banner.png") no-repeat center;
  background-size: 100%;
  height: 500px;
  
  @media ${devices.maxWidth.xxl} {
      height: 300px;
  }
  @media ${devices.maxWidth.lg} {
      height: 200px;
  }
  @media ${devices.maxWidth.md} {
      height: 150px;
  }
  @media ${devices.maxWidth.sm} {
      height: 120px;
  }
`;

export default Root;
