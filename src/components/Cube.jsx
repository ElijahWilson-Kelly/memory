import { useContext } from "react";
import "../styles/cube.css";
import { themeContext } from "../contexts/themeContext";

export const Cube = () => {
  const { theme } = useContext(themeContext);

  let cubeClass = "cube-face ";
  cubeClass += theme == "dark" ? "dark" : "light";

  return (
    <div className="hover-area">
      <div className="cube-container">
        <div className={cubeClass}></div>
        <div className={cubeClass}></div>
        <div className={cubeClass}></div>
        <div className={cubeClass}></div>
        <div className={cubeClass}></div>
        <div className={cubeClass}></div>
      </div>
    </div>
  );
};
