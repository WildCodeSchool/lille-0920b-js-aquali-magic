import React from "react";
import { CardContainer, Name, Details, Image, Info, Mana, Text, Line } from "./carte-description.style";

const Card = ({
  location: {
    state: { name, imageUrl, manaCost, text, cmc, type, rarity, artist },
  },
}) => {
  return (
    <CardContainer>
      <Name>{name}</Name>
      <Details>
        <Image>
          <img src={imageUrl} alt="card" />
        </Image>
        <Info>
          <Mana>
            Cost:{" "}
            {manaCost
              .replace(/\//g, "")
              .split(/((?!^)\{.*?\})/)
              .filter(Boolean)
              .map((num) => (
                <img src={`/image/mana-icons/${num}.png`} alt="icon" />
              ))}
          </Mana>
          <Line>
            <p>
              CMC: <b>{cmc}</b>
            </p>
            <p>
              Type: <b>{type}</b>
            </p>
          </Line>
          <Line>
            <p>
              Rarity: <b>{rarity}</b>
            </p>
            <p>
              Artist: <b>{artist}</b>
            </p>
          </Line>
          <Text>
            Text: <br />
            {text}
          </Text>
        </Info>
      </Details>
    </CardContainer>
  );
};

export default Card;
