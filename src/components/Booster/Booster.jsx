import React from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import {
  Gallery,
  Title,
  BgImage,
  CallApi,
  SetForm,
  Select, 
  Input
} from "./Boosterstyled";

class Booster extends React.Component {
  constructor() {
    super();
    this.state = {
      sets: [],
      cards: [],
      code: "",
      loading: false,
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  handleChange = (e) => {
    this.setState({ code: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getBooster();
  };

  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
  }

  getBooster = async () => {
    const res = await axios.get(
      `https://api.magicthegathering.io/v1/sets/${this.state.code}/booster`
    );
    this.setState({ cards: res.data.cards });
  };

  render() {
    const { sets, code, cards } = this.state;
    return (
      <BgImage>
        <CallApi>
          <Title>List of sets for booster</Title>
          <SetForm onSubmit={this.handleSubmit}>
          <Select value={code} onChange={this.handleChange}>
            <option selected disabled hidden value="">
            Select a set to generate booster 
            </option>
            {sets.map((set) => {
              {
                if (!set.booster) {
                  return null;
                }
              }
              return (
                <option key={set.id} value={set.code}>
                  {set.name}
                </option>
              );
               
              })}
          </Select>
            <Input type="submit" value="BOOSTER" />
          </SetForm>
        </CallApi>

        <Gallery>
          {cards.map((card) => {
            return (
              <div>
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="vertical"
              >
                <img
                  src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg"
                  alt=""
                  onClick={this.handleClick}
                />
                <img src={card.imageUrl} alt="" />

              </ReactCardFlip>
              </div>
            );
          })}
        </Gallery>
      </BgImage>
    );
  }
}

export default Booster;
