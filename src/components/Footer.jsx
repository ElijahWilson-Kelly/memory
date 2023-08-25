import { Flex, Stack, Text } from "@chakra-ui/react";
import { Cube } from "./Cube";
import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export const Footer = () => {
  const { theme } = useContext(themeContext);

  return (
    <Stack borderTop={"1px solid black"} w={"90%"} py={"100px"}>
      <Flex
        justify={"space-between"}
        align={"center"}
        fontWeight={600}
        fontSize={"1.2rem"}
        color={theme == "dark" ? "white" : "black"}
      >
        <Flex gap="30px" align={"center"}>
          <Text>Coded By</Text> <Cube />
        </Flex>
        <Text>&lt;SourceCode /&gt;</Text>
      </Flex>
    </Stack>
  );
};
