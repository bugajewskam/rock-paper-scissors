import { setUncaughtExceptionCaptureCallback } from "process";
import * as React from "react";
import { useContext } from "react";
import { ChoiceType, ScoreContext } from "../pages/_app";
import Paper from "./image/Paper";
import Rock from "./image/Rock";
import Scissors from "./image/Scissors";
import Triangle from "./image/Triangle";

export const choice = ["paper", "rock", "scissors"];
export const getRandom = () => {
  return choice[Math.floor(Math.random() * 3)];
};

export default function Choice() {
  const { setChoice, setComputerChoice } = useContext(ScoreContext);

  const handelCompyterChoice = () => {
    setTimeout(() => {
      const result = getRandom();

      setComputerChoice(result);
    }, 1500);
  };
  const handlePaper = () => {
    setChoice("paper");
    handelCompyterChoice();
  };
  const handleRock = () => {
    setChoice("rock");
    handelCompyterChoice();
  };
  const handleScissors = () => {
    setChoice("scissors");
    handelCompyterChoice();
  };
  return (
    <div className="choice">
      <Triangle />
      <div className="paper" onClick={handlePaper}>
        <button className="btn paperColor">
          <Paper />
        </button>
      </div>
      <div className="rock">
        <button onClick={handleRock} className="btn rockColor">
          <Rock />
        </button>
      </div>
      <div className="scissors">
        <button onClick={handleScissors} className="btn scissorsColor">
          <Scissors />
        </button>
      </div>
    </div>
  );
}
