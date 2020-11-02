const CardItem = ({ name, imageUrl, text }) => {
  return (
    <div className="card text-center">
      <img src={imageUrl} alt="card" style={{ width: '6Opx' }} />
      <h3 className="card-name">{name}</h3>
      <p className="card-text">{text} </p>
    </div>
  );
};
export default CardItem;
