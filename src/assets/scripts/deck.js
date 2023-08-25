/***
 * Playing Cards
 */

/***
 * Hearts
 */

import TWO_OF_HEARTS from "../playing_cards/hearts/2_of_hearts.svg";
import THREE_OF_HEARTS from "../playing_cards/hearts/3_of_hearts.svg";
import FOUR_OF_HEARTS from "../playing_cards/hearts/4_of_hearts.svg";
import FIVE_OF_HEARTS from "../playing_cards/hearts/5_of_hearts.svg";
import SIX_OF_HEARTS from "../playing_cards/hearts/6_of_hearts.svg";
import SEVEN_OF_HEARTS from "../playing_cards/hearts/7_of_hearts.svg";
import EIGHT_OF_HEARTS from "../playing_cards/hearts/8_of_hearts.svg";
import NINE_OF_HEARTS from "../playing_cards/hearts/9_of_hearts.svg";
import JACK_OF_HEARTS from "../playing_cards/hearts/jack_of_hearts.svg";
import QUEEN_OF_HEARTS from "../playing_cards/hearts/queen_of_hearts.svg";
import KING_OF_HEARTS from "../playing_cards/hearts/king_of_hearts.svg";
import ACE_OF_HEARTS from "../playing_cards/hearts/ace_of_hearts.svg";

const cards = [
  {
    image: TWO_OF_HEARTS,
    type: "two_of_hearts",
  },
  {
    image: THREE_OF_HEARTS,
    type: "three_of_hearts",
  },
  {
    image: FOUR_OF_HEARTS,
    type: "four_of_hearts",
  },
  {
    image: FIVE_OF_HEARTS,
    type: "five_of_hearts",
  },
  {
    image: SIX_OF_HEARTS,
    type: "six_of_hearts",
  },
  {
    image: SEVEN_OF_HEARTS,
    type: "seven_of_hearts",
  },
  {
    image: EIGHT_OF_HEARTS,
    type: "eight_of_hearts",
  },
  {
    image: NINE_OF_HEARTS,
    type: "nine_of_hearts",
  },
  {
    image: JACK_OF_HEARTS,
    type: "jack_of_hearts",
  },
  {
    image: QUEEN_OF_HEARTS,
    type: "queen_of_hearts",
  },
  {
    image: KING_OF_HEARTS,
    type: "king_of_hearts",
  },
];

const fisherYatesShuffle = (cardsToShuffle) => {
  const shuffledCards = [...cardsToShuffle];
  for (let i = cardsToShuffle.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    if (randomIndex == i) continue;

    const cardToMove = shuffledCards[i];
    shuffledCards[i] = shuffledCards[randomIndex];
    shuffledCards[randomIndex] = cardToMove;
  }
  return shuffledCards;
};

export const populateCards = (numberOfCards) => {
  let possibilities = [...cards]; // Create a list of cards to choose and remove cards from;
  let result = [];
  for (let i = 0; i < numberOfCards; i += 2) {
    const randIndex = Math.floor(Math.random() * possibilities.length);

    const { image, type } = possibilities[randIndex];
    result.push({
      image,
      type,
      id: i,
      found: false,
      flipped: false,
    });
    result.push({
      image,
      type,
      id: i + 1,
      found: false,
      flipped: false,
    });
    possibilities.splice(randIndex, 1); // remove choice so it cannot show up again;
    if (possibilities.length == 0) {
      possibilities = [...cards];
    }
  }
  return fisherYatesShuffle(result);
};

export const getDefaultCards = () => {
  const result = [];
  let i = 0;
  for (const card of cards) {
    const { image, type } = card;
    result.push({
      image,
      type,
      id: i++,
      found: false,
      flipped: false,
    });
    result.push({
      image,
      type,
      id: i++,
      found: false,
      flipped: false,
    });
    if (result.length >= 12) break;
  }

  return result;
};
