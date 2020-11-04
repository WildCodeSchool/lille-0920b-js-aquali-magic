import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #15021b;
`;
export const CardsContainer = styled.div`
  max-width: 1800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;
export const Button = styled.button`
  transition: all 0.5s ease;
  color: #fff;
  border: 3px solid white;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 17px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
`;

export const Input = styled.input`
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  border: 3px solid #c4c4c4;
  width: 500px;
  height: 50px;
  overflow-x: hidden;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bolder;
  left: 30%;
  top: 200px;
  background: transparent;
  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
`;

// cardItem

export const Card = styled.div`
  width: 280px;
  height: 360px;
  margin: 40px auto;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);

  :hover {
    transform: translateY(20px);

    ::before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
`;
export const Info = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
  p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
  h1 {
    margin: 0px;
  }
`;
