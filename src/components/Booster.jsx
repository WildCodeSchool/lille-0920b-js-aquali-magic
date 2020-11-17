import React from "react";
import axios from "axios";
import {
  CardBooster,
  Titre,
  SetForm,
  Select,
  Input,
  Option,
 
} from "./BoosterStyle";
class Booster extends React.Component {
  constructor() {
    super();
    this.state = {
      sets: [],
      cards: [],
      code: "",
      loading: false,
    };
  }

  handleChange = (e) => {
    this.setState({ code: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.code);
    this.getBosster();
  };

  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
   
  }

  getBosster = async () => {
    const res = await axios.get(
      `https://api.magicthegathering.io/v1/sets/${this.state.code}/booster`
    );
    this.setState({ cards: res.data.cards });
    console.log(this.state.cards);
  };

  render() {
    const { sets, code, cards } = this.state;
    return (
      <CardBooster>
        <Titre>Choose a set to get Booster</Titre>

        <SetForm onSubmit={this.handleSubmit}>
          <Select value={code} onChange={this.handleChange}>
            <Option selected disabled hidden value="">
              Select a set to generate booster
            </Option>
            {sets.map((set) => {
              {
                if (!set.booster) {
                  return null;
                }
              }
              return (
                <Option key={set.id} value={set.code}>
                  {set.name}
                </Option>
              );
            })}
          </Select>
          <Input type="submit" value="BOOSTER" />
        </SetForm>
        <div>
          {cards.map((card) => {
            return <img src={card.imageUrl} alt="" />;
          })}
        </div>
      </CardBooster>
    );
  }
}

export default Booster;
