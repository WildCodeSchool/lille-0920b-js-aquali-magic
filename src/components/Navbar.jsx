import {device} from "./Device.jsx";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavigationBar = styled.nav`
  background-color: black;
  height: 10vh;
  border-bottom: 2px solid white;

  @media ${device.mobile}{
    height: 8vh;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0 5vw 0 0;
`

const Li = styled.li`
  padding-right: 3vw;
  display: flex;

  @media ${device.mobile}{
    display: none;
  }
`

const A = styled.a`
  padding-right: 1.5vw;
  font-size: 1.5em;
  text-decoration: none;
  color: white;
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s ease;
  }
`

const Logo = styled.img`
  width: 12vw;
  height: 10vh;
`

const Navbar = () => {
  return (
    <NavigationBar className="navList">
      <Ul>
        <Li>
          <Link to="/">
            <Logo
              src='/image/Logo-magic.jpg'
              alt="Logo du jeu Magic The Gathering"
              id="logo"
            />
          </Link>
        </Li>
        <Li>
          <Link to="/story">Histoire</Link>
        </Li>
        <Li>
          <A href="#b"> Règles</A>
        </Li>
        <Li>
          <A href="#c">Cartes </A>
        </Li>
        <Li>
          <A href="#d">Créer </A>
        </Li>
        <Li>
          <A href="#e">Booster</A>
        </Li>
      </Ul>
    </NavigationBar>
  );
};


export default Navbar;
