import { Box, Image } from "@chakra-ui/react";

import cardBack from "../assets/playing_cards/card_back_blue.jpeg";

export const PlayingCard = ({ card, flipCard }) => {
  let style = {};

  if (card.found) {
    style = {
      transform: "rotateY(180deg)",
      opacity: 0.5,
    };
  } else if (card.flipped) {
    style = {
      transform: "rotateY(180deg)",
    };
  }

  return (
    <Box
      mx={"10%"}
      my={"5%"}
      className="playing-card"
      onClick={() => {
        if (card.flipped || card.found) {
          return;
        }
        flipCard(card.id);
      }}
      style={style}
    >
      <Image src={cardBack} className="back-face" />
      <Image src={card.image} className="front-face" />
    </Box>
  );
};
