import React from "react";

const Card = ({
  location: {
    state: { name, imageUrl, manaCost, text, cmc, type, rarity, artist },
  },
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt="card" />
      <p> {text} </p>
      <div>
        {manaCost
          .replace(/\//g, "")
          .split(/((?!^)\{.*?\})/)
          .filter(Boolean)
          .map((num) => (
            <img src={`/image/mana-icons/${num}.png`} alt="icon" />
          ))}
      </div>
    </div>
  );
};

export default Card;
