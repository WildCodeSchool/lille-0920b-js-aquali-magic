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


  
async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
    console.log(this.state.sets);
  }


  
  render(){
   
    return (
      <div className="Booster">
        <h1>Liste des extensions pour booster</h1>
        <form>  
        <select value={this.state.value}> {this.state.sets.map(set => (   
            <option value={set.code}>{set.name}</option>
            ))}  
          </select>
          <input type="submit" value="Booster" />
          </form> 
          
        
      </div>
    );

  }
  
}

export default Booster;