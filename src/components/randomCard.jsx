import React from "react";
import axios from "axios";
import Spinner from "./recherch-bar-rapid/spinner";
import styled from "styled-components";
import { device } from "./Device.jsx";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10vh;
  @media ${device.mobile} {
    display: none;
  }
`;

const CardSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18vh;
  margin-left: 10vh;
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

const Pbutton = styled.p`
  color: white;
  width: 40vw;
  font-size: 3vh;
  padding: 5vh;
  -webkit-text-stroke: 0.2px black;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
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
const Info = styled.div`
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
const Mana = styled.div`
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
const Text = styled.div`
  font-size: 14px;
  background-color: rgba(248, 163, 6, 0.329);
  padding: 15px;

  @media ${device.mobile} {
  }
`;
const Line = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobile} {
  }
`;
class RandomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      loading: false,
    };
  }

  getCard = async () => {
    this.setState({ loading: true });
    const res = await axios.get("https://api.magicthegathering.io/v1/cards?pageSize=1&random=true");
    this.setState({ card: res.data.cards[0], loading: false });
    console.log(this.state.card);
    if (!this.state.card.imageUrl || !this.state.card.manaCost) {
      this.getCard();
    }
  };

  render() {
    const { loading } = this.state;
    const { imageUrl, manaCost, cmc, type, rarity, artist, text, name } = this.state.card;
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
          {loading ? (
            <Spinner />
          ) : (
            <div>
              {imageUrl && manaCost ? (
                <CardSection>
                  <Img src={imageUrl} alt="" />
                  <Info>
                    <h2>{name}</h2>
                    <Mana>
                      Mana Cost :&nbsp;
                      {manaCost
                        .replace(/\//g, "")
                        .split(/((?!^)\{.*?\})/)
                        .filter(Boolean)
                        .map((num) => (
                          <img src={`/image/mana-icons/${num}.png`} alt="icon" />
                        ))}
                    </Mana>
                    <Line>
                      <p>
                        Converted Mana Cost: <b>{cmc}</b>
                      </p>
                      <p>
                        Types: <b>{type}</b>
                      </p>
                    </Line>
                    <Line>
                      <p>
                        Rarity: <b>{rarity}</b>
                      </p>
                      <p>
                        Artist: <b>{artist}</b>
                      </p>
                    </Line>
                    <Text>
                      Card Text : <br />
                      <i>
                        <b>{text}</b>
                      </i>
                    </Text>
                  </Info>
                </CardSection>
              ) : null}
            </div>
          )}
        </Div>
      </>
    );
  }
}

export default RandomCard;
