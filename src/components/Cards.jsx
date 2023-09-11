import { Grid } from "@chakra-ui/react";
import { PlayingCard } from "./PlayingCard";
import { useEffect, useRef } from "react";

export const Cards = ({
  cards,
  flipCard,
  rows = 1,
  columns = 1,
  difficulty,
  allowMouseInteraction,
  startGame,
}) => {
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 1000);
  }, [difficulty]);

  return (
    <Grid
      ref={ref}
      gridTemplateColumns={`repeat(${columns}, auto)`}
      gridTemplateRows={`repeat(${rows}, auto)`}
      pointerEvents={allowMouseInteraction ? "auto" : "none"}
      width={[null, "90%", null, "60%"]}
      my={"40px"}
      mx={"10px"}
      onClick={() => {
        startGame();
      }}
    >
      {cards.map((card) => {
        return <PlayingCard card={card} key={card.id} flipCard={flipCard} />;
      })}
    </Grid>
  );
};
