import { Card, Info } from "./search-rapid/Style-search-bar";

const CardItem = ({ name, imageUrl, text }) => {
  return (
    <Card>
      <img src={imageUrl} alt="card" />
      <Info className="info">
        <h1>{name}</h1>
        <p>{text} </p>
      </Info>
    </Card>
  );
};
export default CardItem;
