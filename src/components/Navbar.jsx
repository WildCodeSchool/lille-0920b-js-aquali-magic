import {device} from "./Device.jsx";
import styled from 'styled-components';

const NavigationBar = styled.nav`
  background-color: black;
  height: 8vh;
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
  width: 9vw;
  height: 8vh;
`

const Navbar = () => {
  return (
    <NavigationBar className="navList">
      <Ul>
        <Li>
          <A href="#A">
            <Logo
              src='/image/Logo-magic.jpg'
              alt="Logo du jeu Magic The Gathering"
              id="logo"
            />
          </A>
        </Li>
        <Li>
          <A href="#b">Histoire</A>
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
