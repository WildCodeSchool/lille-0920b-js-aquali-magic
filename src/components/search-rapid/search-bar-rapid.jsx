import React from "react";
import axios from "axios";
import CardList from "../cardlist";
import { SearchContainer, CardsContainer, Button, Input } from "./Style-search-bar";

class SearchBarRapid extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      text: "",
    };
  }

  searchCard = async (text) => {
    const res = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${text}`);
    this.setState({ cards: res.data.cards });
  };

  //  clear cards
  clearCards = () =>
    this.setState({
      cards: [],
    });

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.searchCard(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { cards, text } = this.state;
    return (
      <SearchContainer>
        <CardsContainer>
          <div>
            <form onSubmit={this.onSubmit}>
              <Input type="text" name="text" placeholder=" Rapid Card Search..." value={text} onChange={this.onChange} />
            </form>
            {cards.length > 0 && (
              <Button type="button" onClick={this.clearCards}>
                Clear
              </Button>
            )}
          </div>
          <div>
            <CardList cards={cards} />
          </div>
        </CardsContainer>
      </SearchContainer>
    );
  }
}

export default SearchBarRapid;
