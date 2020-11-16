import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CardSection = styled.div`
display : flex;
align-items:center;
margin-top: 24vh
`

const Button = styled.button`
display : flex;
align-items:center;
margin-top: 40vh;
padding: 14px 40px;
border-radius: 7px;
background-color: black;
color : orange;
font-weight : bold;
font-size: 3vh;
transition-duration: 0.4s;
&:hover {
  background-color: #e04b10;
  color: white;
}

`

const P = styled.p`
color: white;
font-weight : bold;
padding-left : 2vw;
font-size: 3vh;
`

const Img = styled.img`
height:40vh;
width:15vw;
`

class RandomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: "",
      cardImg: "",
      cardAuthor: "",
    };
  }

  card = async () => {
    axios
      .get("https://api.magicthegathering.io/v1/cards?pageSize=1&random=true")
      .then(({ data }) => {
        console.log(data.cards[0].name);
        console.log(data.cards[0].imageUrl);
        console.log(data.cards[0].artist);
        this.setState({
          cardName: data.cards[0].name,
          cardImg: data.cards[0].imageUrl,
          cardAuthor: data.cards[0].artist,
        });
      });
  };

  render() {
    return (
      <>
        <Div>
         
          <section>
            <Button type="button" onClick={this.card}>
              Découvrir une carte
            </Button>
          </section>
         <CardSection>
           <Img src={this.state.cardImg} alt="Carte Indisponible" />
           <section>
            <P>Nom : {this.state.cardName}</P>
            <P>Artiste :{this.state.cardAuthor}</P>
            </section>
            
          </CardSection>
        
        </Div>
      </>
    );
  }
}

export default RandomCard;

//4980 avec cards/id
