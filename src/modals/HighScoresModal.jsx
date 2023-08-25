import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { formatTime } from "../assets/scripts/util";

export const HighScoresModal = ({ isOpen, onClose, highScores }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent border={"4px solid orange"} p={"30px"}>
        <ModalCloseButton color="green" fontSize={"1.2rem"} m={"20px"} />
        <ModalHeader color="green">HIGH SCORES</ModalHeader>
        <Text>
          Easy:{" "}
          {highScores.easy ? formatTime(highScores.easy) : "No score available"}
        </Text>
        <Text>
          Medium:{" "}
          {highScores.medium
            ? formatTime(highScores.medium)
            : "No score available"}
        </Text>
        <Text>
          Hard:{" "}
          {highScores.hard ? formatTime(highScores.hard) : "No score available"}
        </Text>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};
