import { useEffect } from "react";

import { Box, Text } from "@chakra-ui/react";

const formatTime = (timeInMilliseconds) => {
  let milliseconds = timeInMilliseconds % 1000;
  let seconds = Math.floor(timeInMilliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  milliseconds = milliseconds.toString().slice(0, -2);
  seconds = seconds.toString();
  while (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  minutes = minutes.toString();
  while (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  return `${minutes}:${seconds}:${milliseconds || "0"}`;
};

export const Timer = ({ timer, setTimer }) => {
  useEffect(() => {
    if (!timer.running) {
      return;
    }
    const timoutId = setTimeout(() => {
      const newDate = new Date().getTime();
      const difference = newDate - timer.startTime;
      setTimer((prevTimer) => {
        return {
          ...prevTimer,
          currentTimeMilliseconds: difference,
        };
      });
    }, 100);
    return () => {
      clearTimeout(timoutId);
    };
  }, [timer]);
  return (
    <Box mt={"20px"}>
      <Text fontSize={"3rem"} color={"white"}>
        {formatTime(timer.currentTimeMilliseconds)}
      </Text>
    </Box>
  );
};
