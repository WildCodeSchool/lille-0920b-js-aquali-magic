import styled from "styled-components";
import { device } from "../Device";

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  height: 8px;
  cursor: pointer;

  @media ${device.mobile} {
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  min-height: 120vh;
  max-height: 200vh;
  padding-top: 50px;
  background-image: url("/image/trans.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media ${device.mobile} {
  }
`;
export const Form = styled.div`
  width: 100%;
  margin: 5vh auto;
  align-items: center;

  @media ${device.mobile} {
  }
`;

export const ColorsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10vh auto;

  @media ${device.mobile} {
  }
`;

export const CardName = styled.div`
  width: 25%;
  padding: 5vh auto;
  margin: 2vh 2vw;
  max-height: 100vh;

  img {
    width: 4vw;
  }
  @media ${device.mobile} {
  }
`;
