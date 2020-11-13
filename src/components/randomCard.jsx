import React from "react";
import axios from "axios";

class RandomCard extends React.Component {
constructor(props){
super(props);
this.state = {
    cardName : "",
    id : Math.floor(Math.random() * 4980)
}

}
    componentDidMount(){
    axios
    .get('https://api.magicthegathering.io/v1/cards')
    .then(({data})=>{
      console.log(data.cards[0].name)
      this.setState({
          cardName : data.cards[0].name,
      })  
    })
}
  render() {
    return( 
    <div>
        <p>{this.state.cardName}</p>
        <p>{this.state.id}</p>
    </div>
    );
  }
}

export default RandomCard;

//4980 avec cards/id