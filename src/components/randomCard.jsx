import React from "react";
import axios from "axios";

class RandomCard extends React.Component {
constructor(props){
super(props)

}
    componentDidMount(){
    const url = 'https://api.magicthegathering.io/v1/cards';
    axios.get(url)
    .then(({data})=>{
      console.log(data)  
    })
}
  render() {
    return( 
    <div>
        <p>fffzf</p>
    </div>
    );
  }
}

export default RandomCard;