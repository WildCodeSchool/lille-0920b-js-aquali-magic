import { device } from "./Device.jsx";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import RechercheBar from "./recherch-bar-rapid/recherche-bar-rapid";

const NavigationBar = styled.nav`
  background-color: black;
  height: 8vh;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    height: 10vh;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0 5vw 0 0;
`;

const Li = styled.li`
  @media ${device.desktop} {
    padding-right: 3vw;
    display: flex;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const A = styled.a`
  padding-right: 1.5vw;
  font-size: 1.5em;
  text-decoration: none;
  color: white;
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s ease;
  }
`;

const Logo = styled.img`
  width: 9vw;
  height: 8vh;

  @media ${device.mobile} {
    width: 11vh;
    height: 10vh;
  }
`;

const Burger = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
    position: absolute;
    z-index: 1;
  }
`;

const Navbar = () => {
  return (
    <NavigationBar>
      <A href="#A">
        <Logo src="/image/Logo-magic.jpg" alt="Logo du jeu Magic The Gathering" id="logo" />
      </A>
      <Ul>
        <Li></Li>
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
      <RechercheBar />
      <Burger className="App" id="outer-container">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      </Burger>
    </NavigationBar>
  );
};

export default Navbar;
