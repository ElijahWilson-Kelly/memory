import { useContext, useEffect, useState } from "react";
import { Stack, useDisclosure } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Timer } from "./components/Timer";

import { populateCards } from "./assets/scripts/deck";
import { GameFinishedModal } from "./modals/GameFinshedModal";
import { SelectDifficultyModal } from "./modals/SelectDifficultyModal";
import { HighScoresModal } from "./modals/HighScoresModal";
import { Footer } from "./components/Footer";
import { themeContext } from "./contexts/themeContext";

const DELAY_BETWEEN_TURNS = 400;
const DIFFICULTIES = {
  easy: [6, 3],
  medium: [8, 4],
  hard: [12, 6],
};

export const App = () => {
  const [cards, setCards] = useState([]);
  const [allowMouseInteraction, setAllowMouseInteraction] = useState(true);
  const [difficulty, setDifficulty] = useState(undefined);
  const [gameFinished, setGameFinished] = useState(false);
  const [timer, setTimer] = useState({
    startTime: null,
    currentTimeMilliseconds: 0,
    running: false,
  });
  const [highScores, setHighScores] = useState({
    easy: null,
    medium: null,
    hard: null,
  });
  const { onClose, onOpen, isOpen } = useDisclosure();

  const { theme } = useContext(themeContext);

  useEffect(() => {
    if (cards.length == 0) return;

    if (cards.every((card) => card.found)) {
      finishGame();
    }
  }, [cards]);

  useEffect(() => {
    if (!difficulty) return;
    const numberOfCards =
      DIFFICULTIES[difficulty][0] * DIFFICULTIES[difficulty][1];
    setCards(populateCards(numberOfCards));
  }, [difficulty]);

  const startGame = () => {
    if (timer.running) return;
    setTimer({
      startTime: new Date().getTime(),
      currentTimeMilliseconds: 0,
      running: true,
    });
  };

  const finishGame = () => {
    setGameFinished(true);

    let timeTakenToComplete = timer.currentTimeMilliseconds;
    setTimer({
      startTime: null,
      currentTimeMilliseconds: timeTakenToComplete,
      running: false,
    });
    if (
      !highScores[difficulty] ||
      timeTakenToComplete < highScores[difficulty]
    ) {
      setHighScores((prevHighScores) => {
        return {
          ...prevHighScores,
          [difficulty]: timeTakenToComplete,
        };
      });
    }
  };

  const checkGuesses = () => {
    setCards((prevCards) => {
      const guesses = [];
      for (let card of prevCards) {
        if (card.flipped) {
          guesses.push(card);
        }
      }
      if (guesses.length != 2) {
        return prevCards;
      }
      if (guesses[0].type == guesses[1].type) {
        return prevCards.map((card) => {
          if (card.id == guesses[0].id || card.id == guesses[1].id) {
            return {
              ...card,
              flipped: false,
              found: true,
            };
          } else {
            return {
              ...card,
              flipped: false,
            };
          }
        });
      } else {
        return prevCards.map((card) => {
          return {
            ...card,
            flipped: false,
          };
        });
      }
    });
  };

  const flipCard = (cardId) => {
    setAllowMouseInteraction(false);
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id == cardId) {
          return {
            ...card,
            flipped: true,
          };
        }
        return card;
      });
    });

    setTimeout(() => {
      checkGuesses();
      setAllowMouseInteraction(true);
    }, DELAY_BETWEEN_TURNS);
  };

  const startNewGame = () => {
    setGameFinished(false);
    setDifficulty(undefined);
    setCards([]);
    setTimer((prevTimer) => {
      return {
        ...prevTimer,
        running: false,
      };
    });
  };
  return (
    <Stack
      bg={theme == "dark" ? "#38415e" : "#ffc8a1"}
      minH={"100vh"}
      align={"center"}
    >
      <Header startNewGame={startNewGame} onOpen={onOpen} />
      <Timer timer={timer} setTimer={setTimer} />
      <Cards
        cards={cards}
        columns={difficulty && DIFFICULTIES[difficulty][0]}
        rows={difficulty && DIFFICULTIES[difficulty][1]}
        allowMouseInteraction={allowMouseInteraction}
        flipCard={flipCard}
        startGame={startGame}
      />
      <Footer />

      <HighScoresModal
        isOpen={isOpen}
        onClose={onClose}
        highScores={highScores}
      />
      {difficulty || <SelectDifficultyModal setDifficulty={setDifficulty} />}
      {gameFinished && (
        <GameFinishedModal
          startNewGame={startNewGame}
          time={timer.currentTimeMilliseconds}
        />
      )}
    </Stack>
  );
};
