import React from "react";
import axios from "axios";


class Booster extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       sets: [],
       name: "",
       code:""
       
    };
}
componentDidMount(){
  axios.get("https://api.magicthegathering.io/v1/sets").then(({data})=>{
    console.log(data);
    console.log(data.sets[0].name);
    console.log(data.sets[0].code);
    this.setState({ 
      sets: data.sets
      
    
    });
  });
  
};



  
  render(){
   
    return (
      <div className="App">
        <h1>Liste des extensions pour booster</h1>
        <div>  
        <select value={this.state.value} > {this.state.sets.map(set => (   
            <option value={set.code}>{set.name}</option>
            ))}  
          </select>
          </div> 
          
        
      </div>
    );

  }
  
}

export default Booster;