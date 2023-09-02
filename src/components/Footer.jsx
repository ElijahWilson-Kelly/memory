import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Cube } from "./Cube";
import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

export const Footer = () => {
  const { theme } = useContext(themeContext);

  return (
    <Stack
      borderTop={"1px solid black"}
      w={"90%"}
      py={["30px", "50px", "100px"]}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        fontWeight={600}
        fontSize={["0.8rem", "1.2rem"]}
        color={theme == "dark" ? "white" : "black"}
      >
        <Flex gap={["15px", "30px"]} align={"center"}>
          <Text>Coded By</Text>{" "}
          <Link href="https://elijahwilsonkellyportfolio.netlify.app/">
            <Cube />
          </Link>
        </Flex>
        <Link
          href="https://github.com/ElijahWilson-Kelly/memory"
          border={"1px solid white"}
          p={"10px"}
          borderRadius={"5px"}
          _hover={{
            textDecoration: "none",
            transform: "scale(1.1)",
            color: "grey",
          }}
        >
          &lt;SourceCode /&gt;
        </Link>
      </Flex>
    </Stack>
  );
};
