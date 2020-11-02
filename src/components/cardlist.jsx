import CardItem from './carditem';

const CardList = ({ cards }) => {
  return (
    <div className="cards">
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
    </div>
  );
};

export default CardList;
