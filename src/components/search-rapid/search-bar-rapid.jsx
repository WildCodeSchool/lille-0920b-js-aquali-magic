import React from 'react';
import axios from 'axios';
import CardList from '../cardlist';
import './search-bar-rapid.scss';

class SearchBarRapid extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      text: '',
    };
  }

  searchCard = async (text) => {
    const res = await axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${text}`
    );
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
    this.setState({ text: '' });
  };

  render() {
    const { cards, text } = this.state;
    return (
      <div className="search-container">
        <div>
          <form className="search-rapid" onSubmit={this.onSubmit}>
            <input
              type="text"
              name="text"
              placeholder=" Rapid Card Search..."
              value={text}
              onChange={this.onChange}
            />
          </form>
          {cards.length > 0 && (
            <button
              type="button"
              className="btn-clear"
              onClick={this.clearCards}
            >
              Clear
            </button>
          )}
        </div>
        <div>
          <CardList cards={cards} />
        </div>
      </div>
    );
  }
}

export default SearchBarRapid;
