import { setUncaughtExceptionCaptureCallback } from "process";
import * as React from "react";
import { useContext } from "react";
import { ChoiceType, ScoreContext } from "../pages/_app";
import Paper from "./image/Paper";
import Rock from "./image/Rock";
import Scissors from "./image/Scissors";
import Triangle from "./image/Triangle";

interface ChoiceProps {
  handlePaper: (e: any) => void;
  handleRock: (e: any) => void;
  handleScissors: (e: any) => void;
}

export default function Choice({
  handlePaper,
  handleScissors,
  handleRock,
}: ChoiceProps) {
  const {
    setChoice,
    setComputerChoice,
    choice,
    computerChoice,
    setWinOrLost,
    winOrLost,
    score,
    setScore,
  } = useContext(ScoreContext);

  return (
    <div className="choice">
      <Triangle />
      <div className="paper">
        <button className="btn paperColor" onClick={handlePaper} value="paper">
          <Paper />
        </button>
      </div>
      <div className="rock">
        <button onClick={handleRock} value="rock" className="btn rockColor">
          <Rock />
        </button>
      </div>
      <div className="scissors">
        <button
          onClick={handleScissors}
          value="scissors"
          className="btn scissorsColor"
        >
          <Scissors />
        </button>
      </div>
    </div>
  );
}
