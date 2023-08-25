import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Flex,
} from "@chakra-ui/react";

export const SelectDifficultyModal = ({ setDifficulty }) => {
  return (
    <Modal isOpen={true} blockScrollOnMount={false} isCentered>
      <ModalOverlay />
      <ModalContent border={"4px solid orange"} p={"30px"}>
        <ModalHeader color="red">Please Select Difficulty!</ModalHeader>

        <ModalBody>
          <Flex justify={"space-between"}>
            <Button
              h={"100px"}
              border={"2px solid orange"}
              bg="orange.100"
              fontSize={"1.4rem"}
              w={"100px"}
              onClick={() => setDifficulty("easy")}
            >
              6 x 3
            </Button>
            <Button
              h={"100px"}
              border={"2px solid orange"}
              bg="orange.100"
              fontSize={"1.4rem"}
              w={"100px"}
              onClick={() => setDifficulty("medium")}
            >
              8 x 4
            </Button>
            <Button
              h={"100px"}
              border={"2px solid orange"}
              bg="orange.100"
              fontSize={"1.4rem"}
              w={"100px"}
              onClick={() => setDifficulty("hard")}
            >
              12 x 6
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
