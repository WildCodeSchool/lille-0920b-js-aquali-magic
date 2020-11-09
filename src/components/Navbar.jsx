import './Navbar.css';
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
      <div>
      <nav className="navList">
        <ul>
          <li>
            <Link to="/">
              <img
                src='/image/Logo-magic.jpg'
                alt="Logo du jeu Magic The Gathering"
                id="logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/Story">Histoire</Link>
          </li>
          <li>
            <a href="#b"> Règles</a>
          </li>
          <li>
            <a href="#c">Cartes </a>
          </li>
          <li>
            <a href="#d">Créer </a>
          </li>
          <li>
            <a href="#e">Booster</a>
          </li>
        </ul>
      </nav>


    </div>
  );
};

export default Navbar;
