import React from "react";
import axios from "axios";
import BossterCards from "./bosster-cards";

class Booster extends React.Component {
  constructor() {
    super();
    this.state = {
      sets: [],
      code: "",
      cards: [],
    };
  }
  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
    console.log(this.state.sets);
  }

  handleChange = (e) => {
    this.setState({ code: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.code);
    this.getBooster();
  };

  getBooster = async () => {
    const res = await axios.get(`https://api.magicthegathering.io/v1/sets/${this.state.code}/booster`);
    this.setState({ cards: res.data.cards });
    console.log(this.state.cards);
  };

  render() {
    const { sets, code, cards } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={code} onChange={this.handleChange}>
            {sets.map((nm) => {
              if (!nm.booster) {
                return null;
              }
              return <option value={nm.code}> {nm.name} </option>;
            })}
          </select>
          <input type="submit" value="Submit" />
        </form>
        {cards.map((card) => {
          return <BossterCards {...card} />;
        })}
      </div>
    );
  }
}
export default Booster;
