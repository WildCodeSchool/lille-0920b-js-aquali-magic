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

  onChange = (e) => {this.setState({ code: e.target.value })};
  onSubmit = (e) => {} 



  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
    console.log(this.state.sets);
  }


  
  render(){
   
    return (
      <div className="Booster"> 

        <h1>List of sets for booster</h1>

        <form onSubmit={this.onSubmit}>  
           <select value={this.state.value}>onChange={this.OnChange}
              <option selected value="booster">Select a set to generate booster</option> 
              {this.state.sets.map(set => (   
              <option key={set.id} value={set.code}>{set.name}</option>
              ))}  
           </select>
           <input type="submit" value="BOOSTER" />
        </form> 
          
        
      </div>
    );

  }
  
}

export default Booster;