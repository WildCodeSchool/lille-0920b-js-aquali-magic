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
      card: [],
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

  handleSubmit = (e) => {
    e.preventDefault();
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
          <select value={code} onChange={this.handleChange} style={{ width: "300px", height: "40px" }}>
            <option value="" selected disabled hidden>
              Choose Edition
            </option>
            {sets.map((set) => {
              if (!set.booster) {
                return null;
              }
              return <option value={set.code}> {set.name} </option>;
            })}
          </select>
          <input type="submit" value="BOOSTER" />
        </form>
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap", margin: "40px 40px" }}>
          {cards.map((card) => {
            return <BossterCards {...card} />;
          })}
        </div>
      </div>
    );
  }
}
export default Booster;
