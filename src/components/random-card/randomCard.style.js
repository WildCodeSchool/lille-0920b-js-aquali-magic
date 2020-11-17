import styled from "styled-components";
import { device } from "../Device.jsx";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10vh;
  @media ${device.mobile} {
    display: none;
  }
`;

export const CardSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18vh;
  margin-left: 10vh;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  margin-left: 19vh;
  padding: 14px 40px;
  border-radius: 7px;
  background-color: black;
  color: orange;
  font-weight: bold;
  font-size: 3vh;
  transition-duration: 0.4s;
  &:hover {
    background-color: #e04b10;
    color: white;
  }
`;

export const Pbutton = styled.p`
  color: white;
  width: 40vw;
  font-size: 3vh;
  padding: 5vh;
  -webkit-text-stroke: 0.2px black;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const Img = styled.img`
  height: 40vh;
  width: 15vw;
  margin: 4px;
  transform: scale(1);
  perspective: 600px;
  transition: all 250ms ease-out;
  &:hover {
    z-index: 10;
    transform: scale(1.3);
  }
`;
export const Info = styled.div`
  width: 40%;
  max-height: 500px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  h2 {
    text-align: center;
    color: orange;
  }
  @media ${device.mobile} {
    width: 100%;
    height: 380px;
  }
`;
export const Mana = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    width: 25px;
  }
  @media ${device.mobile} {
  }
`;
export const Text = styled.div`
  font-size: 14px;
  background-color: rgba(248, 163, 6, 0.329);
  padding: 15px;

  @media ${device.mobile} {
  }
`;
export const Line = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobile} {
  }
`;
