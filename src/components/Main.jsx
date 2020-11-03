import './Main.css';
import {device} from "./Device.jsx";
import styled from 'styled-components';


const A = styled.a`
  color :white;
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s;
  }
`;

const ButtonGrimoire = styled.button`

background-color: black;
border-radius: 30px;
height: 6vh;

@media ${device.mobile}{
  width : 30vh
}

`;

const DivFirstSection1 = styled.div`

  background-image: url(https://images8.alphacoders.com/949/thumb-1920-949830.jpg);
  height: 90vh;
  background-position: center;


  @media ${device.mobile}{
    height :30vh;
    background-position: center;
    background-size: cover;
  }
`;
const DivFirstSection2 = styled.div`


  background-image: url(https://i.ibb.co/YcwdcWf/Zendikar-Rising-resize.png);
  height: 23vh;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media ${device.mobile}{
    display : none
  }
`;

const DivSecondSection = styled.div`
  background-image: url(https://i.ibb.co/pQ9gkgW/zendikar-rising.png);
  height: 100vh;

  @media ${device.mobile}{
    height :30vh;
    background-position: center;
    background-size: cover;
  }
`;

const DivButton = styled.div`

text-align: center;
`;

const DivTxtHistoire = styled.div`
  padding-top: 10vh;
  width: 100%;
  text-align: center; 

  @media ${device.mobile}{
    padding-top : 3vh
  }
`;

const LiCards = styled.li`
  height: 10vh;
  padding: 10vh 8vh 0 8vh;
  list-style : none;
  
  @media ${device.mobile}{
    display : none
    }
`;

const P = styled.p`
@media ${device.mobile}{
  display : none
}
`

const UlCards = styled.ul`
display: flex;
justify-content: center;
`;

const MainPage = () => {
  return (
    <div>
      <section>
        <DivFirstSection1>Aléatoire</DivFirstSection1>
        <DivFirstSection2>Aléatoire</DivFirstSection2>
      </section>
      <section>
        <DivSecondSection>
          <div>
            <DivTxtHistoire>
              <h1>Une nouvelle aventure commence</h1>
              <P>
                Plan tumultueux au mana sauvage, à la météorologie instable et
                aux mystérieux terrains flottants, Zendikar est un monde à la
                beauté et aux dangers naturels incomparables. <br /> Son paysage
                est dévasté par des mouvements sismiques explosifs appelés le
                Roulis dont la violence rend la vie précaire imprévisible et
                pleine d &apos; aventure. Les fleuves venus d &apos; au-dessus
                de l &apos; horizon tombent en cascade.
              </P>
            </DivTxtHistoire>
          </div>

          <div>
            <UlCards>
              <LiCards>
                <img
                  
                  alt="Carte de la Canalieuse magmatique"
                 
                />
              </LiCards>
              <LiCards>
                <img
                  
                  alt="Carte de Jace, mage du miroir"
                 
                />
              </LiCards>
              <LiCards>
                <img 
                  
                  alt="Carte du Lac de montagne bouillant"
                  
                />
              </LiCards>
            </UlCards>
            <DivButton>
            <ButtonGrimoire type="button">
              <A>Ouvrir le grimoire de Zendikar</A>
            </ButtonGrimoire>
            </DivButton>
          </div>
          
        </DivSecondSection>
      </section>
    </div>
  );
};

export default MainPage;
