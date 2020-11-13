import React from "react";
import axios from "axios";

class RandomCard extends React.Component {
constructor(props){
super(props);
this.state = {
    cardName : "",
    cardImg : "",
 
}

}


  
    card = async ()=>{
    axios
    .get('https://api.magicthegathering.io/v1/cards?pageSize=1&random=true')
    .then(({data})=>{
      console.log(data.cards[0].name)
      console.log(data.cards[0].imageUrl)
      this.setState({
          cardName : data.cards[0].name,
          cardImg : data.cards[0].imageUrl
          
      })  
    })

  }


  render() {
    return( 
    <div>
        <p>{this.state.cardName}</p>
        <img src= {this.state.cardImg} alt="Indisponible"/>
        <button type="button" onClick={this.card}>Découvrir une carte</button>
    </div>
    );
  }
}

export default RandomCard;

//4980 avec cards/id