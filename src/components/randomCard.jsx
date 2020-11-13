import React from "react";
import axios from "axios";

class RandomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      cardImg: "",
      cardAuthor: "",
    };
  }

  card = async () => {
    axios
      .get("https://api.magicthegathering.io/v1/cards?pageSize=1&random=true")
      .then(({ data }) => {
        console.log(data.cards[0].name);
        console.log(data.cards[0].imageUrl);
        console.log(data.cards[0].artist);
        this.setState({
          cardName: data.cards[0].name,
          cardImg: data.cards[0].imageUrl,
          cardAuthor: data.cards[0].artist,
        });
      });   
    };


  render() {
    return (
      <div>
        <section>
          <p>{this.state.cardName}</p>
          <p>{this.state.cardAuthor}</p>
        </section>
        <img src={this.state.cardImg} alt="Carte Indisponible" />
        <button type="button" onClick={this.card}>
          Découvrir une carte
        </button>
      </div>
    );
  }
}

export default RandomCard;

//4980 avec cards/id
