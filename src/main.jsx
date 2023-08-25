import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider.jsx";
import { App } from "./App.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
