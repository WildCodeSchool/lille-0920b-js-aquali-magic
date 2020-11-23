import React from "react";
import axios from "axios";
import ListCartes from "./listCartes";
import { ColorsContainer, CardName, Main, Form } from "./Cartes.style";

class Cartes extends React.Component {
  constructor() {
    super();
    this.state = {
      sets: [],
      setName: "",
      cartes: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
    console.log(this.state.sets);
  }

  handleChange = (e) => {
    this.setState({ setName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.setName);
    this.getCartes();
  };

  getCartes = async () => {
    const res = await axios.get(`https://api.magicthegathering.io/v1/cards?setName=${this.state.setName}`);
    this.setState({ cartes: res.data.cards });
    console.log(this.state.cartes);
  };

  render() {
    const { sets, setName, cartes } = this.state;
    return (
      <Main>
        <Form>
          <form onSubmit={this.handleSubmit}>
            <select value={setName} onChange={this.handleChange} style={{ width: "300px", height: "40px" }}>
              <option value="" selected disabled hidden>
                Choose Edition
              </option>
              {sets.map((set) => {
                if (!set.booster) {
                  return null;
                }
                return <option value={set.name}> {set.name} </option>;
              })}
            </select>
            <input type="submit" value="BOOSTER" />
          </form>
        </Form>

        <ColorsContainer>
          <CardName>
            <img src="/image/G.png" alt="icon" />
            {cartes.map((carte) => {
              if (!carte.imageUrl) {
                return null;
              }
              if (carte.colors.length === 1 && carte.colors[0] === "Green") {
                return <ListCartes {...carte} col={"#006400"} />;
              }
            })}
          </CardName>
          <CardName>
            <img src="/image/W.png" alt="icon" />
            {cartes.map((carte) => {
              if (!carte.imageUrl) {
                return null;
              }
              if (carte.colors.length === 1 && carte.colors[0] === "White") {
                return <ListCartes {...carte} col={"#695b49"} />;
              }
            })}
          </CardName>
          <CardName>
            <img src="/image/R.png" alt="icon" />
            {cartes.map((carte) => {
              if (!carte.imageUrl) {
                return null;
              }
              if (carte.colors.length === 1 && carte.colors[0] === "Red") {
                return <ListCartes {...carte} col={"#B22222"} />;
              }
            })}
          </CardName>
          <CardName>
            <img src="/image/B.png" alt="icon" />
            {cartes.map((carte) => {
              if (!carte.imageUrl) {
                return null;
              }
              if (carte.colors.length === 1 && carte.colors[0] === "Black") {
                return <ListCartes {...carte} col={"black"} />;
              }
            })}
          </CardName>
          <CardName>
            <img src="/image/U.png" alt="icon" />
            {cartes.map((carte) => {
              if (!carte.imageUrl) {
                return null;
              }
              if (carte.colors.length === 1 && carte.colors[0] === "Blue") {
                return <ListCartes {...carte} col={"#00008B"} />;
              }
            })}
          </CardName>
          <CardName>
            <img src="/image/M.png" alt="icon" />
            {cartes.map((carte) => {
              if (!carte.imageUrl) {
                return null;
              }
              if (carte.colors.length > 1) {
                return <ListCartes {...carte} col={"#8B008B"} />;
              }
            })}
          </CardName>
        </ColorsContainer>
      </Main>
    );
  }
}

export default Cartes;