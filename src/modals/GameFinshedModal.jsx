import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import { formatTime } from "../assets/scripts/util";

export const GameFinishedModal = ({ startNewGame, time }) => {
  return (
    <>
      <Modal isOpen={true} blockScrollOnMount={false} isCentered>
        <ModalOverlay />
        <ModalContent border={"3px solid black"}>
          <ModalHeader color="blue">You Won!</ModalHeader>

          <ModalBody>
            <Text color="blue.600">Congratulations!</Text>
            <Text color="blue.600">Your score:</Text>
            <Text color="green.600">{formatTime(time)}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              variant={"ghost"}
              mr={3}
              onClick={() => startNewGame()}
            >
              Play Again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
