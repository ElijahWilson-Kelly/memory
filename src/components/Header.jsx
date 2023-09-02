import { useContext } from "react";
import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { themeContext } from "../contexts/themeContext";
import { MdOutlineLeaderboard } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

export const Header = ({ startNewGame, onOpen }) => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <Grid
      h={"200px"}
      borderBottom={"3px ridge black"}
      boxShadow={"0px 2px 4px black"}
      w={"100%"}
      textAlign={"center"}
      bg={theme == "dark" ? "#111133" : "#b55d21"}
      justify={"center"}
      alignItems={"center"}
      gridTemplateColumns={"150px 1fr 150px"}
    >
      <Flex justify={"center"}>
        {theme == "dark" ? (
          <BsLightbulb className="icon" onClick={() => toggleTheme()} />
        ) : (
          <BsLightbulbOff className="icon" onClick={() => toggleTheme()} />
        )}
      </Flex>

      <Heading
        fontSize={["2rem", null, "1.6rem", "4rem"]}
        color={"white"}
        textShadow={"0px 0px 1px black"}
        fontWeight={800}
        letterSpacing={"2rem"}
        display={["none", null, "block"]}
        gridColumn={"2 / 3"}
        justifySelf={"center"}
        className="horizontal-stripes"
      >
        MEMORY
      </Heading>
      <Flex justify={"space-evenly"} gridColumn={"3 / -1"}>
        <MdOutlineLeaderboard
          className="icon"
          onClick={() => {
            onOpen();
          }}
        />
        <AiOutlinePlusCircle
          className="icon"
          onClick={() => {
            startNewGame();
          }}
        />
      </Flex>
    </Grid>
  );
};
