import './Main.css';

const MainPage = () => {
  return (
    <div>
      <section>
        <div className="FirstSection">Aléatoire</div>
        <div className="FirstSection2">Aléatoire</div>
      </section>
      <section>
        <div className="SecondSection">
          <div className="ContainerTxt">
            <div className="HistoireTxt">
              <h1>Une nouvelle aventure commence</h1>
              <p>
                Plan tumultueux au mana sauvage, à la météorologie instable et
                aux mystérieux terrains flottants, Zendikar est un monde à la
                beauté et aux dangers naturels incomparables. <br /> Son paysage
                est dévasté par des mouvements sismiques explosifs appelés le
                Roulis dont la violence rend la vie précaire imprévisible et
                pleine d &apos; aventure. Les fleuves venus d &apos; au-dessus
                de l &apos; horizon tombent en cascade.
              </p>
            </div>
          </div>

          <div className="Cartes">
            <ul className="CartesHomepage">
              <li>
                <img
                  src='/image/carte-gauche.png'
                  alt="Carte de la Canalieuse magmatique"
                  className="Carte"
                />
              </li>
              <li>
                <img
                  src='/image/carte-milieu.png'
                  alt="Carte de Jace, mage du miroir"
                  className="Carte"
                />
              </li>
              <li>
                <img
                  src='/image/carte-droite.png'
                  alt="Carte du Lac de montagne bouillant"
                  className="Carte"
                />
              </li>
            </ul>
          </div>
          <div className="Button">
            <button className="ButtonGrimoire" type="button">
              <a href="#9">Ouvrir le grimoire de Zendikar</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
