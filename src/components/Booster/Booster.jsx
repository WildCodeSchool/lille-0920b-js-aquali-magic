import React from "react";
import axios from "axios";
import {flipCardContainer, flipCard, flipCardFront, flipCardBack, Img} from "./Boosterstyled"


class Booster extends React.Component {
  constructor(){
    super();
    this.state = {
       sets: [],
       cards:[],
       code:"",
       loading: false,
       
       
    };
}

  handleChange = (e) => {this.setState({ code: e.target.value })};
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.code);
    this.getBosster()
  } 

  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
    console.log(this.state.sets);
  }

  getBosster = async ()=>{
    const res = await axios.get(`https://api.magicthegathering.io/v1/sets/${this.state.code}/booster`)
  this.setState({cards: res.data.cards})
  console.log(this.state.cards)
  }

  
  render(){
   const {sets, code, cards}= this.state
    return (
      <div className="Booster"> 

        <h1>List of sets for booster</h1>

        <form onSubmit={this.handleSubmit}>  
           <select value={code} onChange={this.handleChange} >
              <option selected disabled hidden value="">Select a set to generate booster</option> 
              {sets.map(set => {   
                {if (!set.booster){
                  return null}
                }
             return <option key={set.id} value={set.code}>{set.name}</option>
            })}  
           </select>
           <input type="submit" value="BOOSTER" />
        </form>
        <div>
          {cards.map((card)=>{
          return <img src={card.imageUrl} />
          })}
        </div>
      </div>
    );

  }
  
}

export default Booster;
