import { Card, FlipBack, FlipFront } from "./search-rapid/Style-search-bar";

const CardItem = ({ name, imageUrl, text }) => {
  return (
    <Card>
      <FlipFront>
        <img src={imageUrl} alt="card" />
      </FlipFront>

      <FlipBack className="info">
        <h1>{name}</h1>
        <p>{text} </p>
      </FlipBack>
    </Card>
  );
};
export default CardItem;
