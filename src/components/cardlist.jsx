import CardItem from "./carditem";
import styled from "styled-components";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  justify-items: center;
`;

const CardList = ({ cards }) => {
  return (
    <Cards>
      {cards
        .filter((card, i) => {
          return i < 5;
        })
        .map((card) => {
          if (card.foreignNames.length === 0) {
            return null;
          }
          return <CardItem key={card.id} {...card} />;
        })}
    </Cards>
  );
};

export default CardList;
