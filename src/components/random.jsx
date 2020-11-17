import React from "react";
import axios from "axios";
import styled from "styled-components";
import { device } from "./Device.jsx";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  @media ${device.mobile} {
    display: none;
  }
`;

const CardSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24vh;
`;

const Button = styled.button`
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

const P = styled.p`
  color: white;
  font-weight: bold;
  padding-left: 2vw;
  font-size: 3vh;
`;

const Pbutton = styled.p`
  color: white;
  width: 40vw;
  font-size: 3vh;
  padding-top: 13vh;
  -webkit-text-stroke: 0.2px black;
`;

const Img = styled.img`
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

class RandomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    };
  }

  getCard = async () => {
    const res = await axios.get("https://api.magicthegathering.io/v1/cards?pageSize=1&random=true");
    this.setState({ card: res.data.cards[0] });
    console.log(this.state.card);
    if (!this.state.card.imageUrl) {
      this.getCard();
    }
  };

  render() {
    const { card } = this.state;
    return (
      <>
        <Div>
          <section>
            <Pbutton>
              Pendant la majeure partie des vingt-six ans d'existence de Magic, l'unité de base de Magic a été le booster. La grande majorité des cartes Magic qui ont été ouvertes proviennent d'un booster. Pendant des années, pour la plupart des joueurs, ouvrir des boosters fut l'essence même des produits Magic. <br />
              Redécouvrez les cartes qui ont ryhtmé les champs de batailles des Planeswalkers.
            </Pbutton>
            <Button type="button" onClick={this.getCard}>
              Découvrir une carte
            </Button>
          </section>
          {card.imageUrl ? (
            <CardSection>
              <Img src={card.imageUrl} alt="" />
              <section>
                <P>Nom : {card.name}</P>
                <P>Artiste :{card.artist}</P>
              </section>
            </CardSection>
          ) : null}
        </Div>
      </>
    );
  }
}

export default RandomCard;
