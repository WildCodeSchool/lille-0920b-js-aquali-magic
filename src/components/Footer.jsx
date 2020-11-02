import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="container1">
        <div className="magic">
          <h4>Magic The Gathering</h4>
          <div className="adresse">
            <a href="https://magic.wizards.com/fr">Magic, site officiel</a>
            <p>0320437689</p>
            <p>magic@gmail.com</p>
          </div>
        </div>

        <div className="reseaux-sociaux">
          <h4>Nous suivre</h4>
          <div className="icones">
            <a href="https://www.facebook.com/MagicTheGathering.fr/?brand_redir=201120755306">
              <i className="fab fa-facebook-square" />
            </a>

            <a href="https://twitter.com/wizards_magic">
              <i className="fab fa-twitter-square" />
            </a>

            <a href="https://www.youtube.com/channel/UC8ZGymAvfP97qJabgqUkz4A">
              <i className="fab fa-youtube" />
            </a>

            <a href="https://www.instagram.com/wizards_magic/">
              <i className="fab fa-instagram" />
            </a>

            <a href="https://www.twitch.tv/magic">
              <i className="fab fa-twitch" />
            </a>
          </div>
        </div>

        <div className="lieux">
          <h4 id="nousTrouver">Nous trouver</h4>
          <div>
            <input />
          </div>
        </div>
      </div>

      <div className="container2">
        <ul>
          <li>
            <a href="#a">CONDITIONS GENERALES</a>
          </li>
          <li>
            <a href="#b">CODE DE CONFIDENTIALITE</a>
          </li>
          <li>
            <a href="#c">EVENEMENTS</a>
          </li>
          <li>
            <a href="#d">EQUIPE</a>
          </li>
          <li>
            <a href="#e">REGLES</a>
          </li>
        </ul>
      </div>

      <div className="container3">
        <p>&copy; Wildcodeschool.com | Designed by Magicians</p>
      </div>
    </div>
  );
};

export default Footer;
