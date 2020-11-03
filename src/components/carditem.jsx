const CardItem = ({ name, imageUrl, text }) => {
  return (
    <div className="card ">
      <img src={imageUrl} alt="card" />
      <div className="info">
        <h1>{name}</h1>
        <p>{text} </p>
      </div>
    </div>
  );
};
export default CardItem;
