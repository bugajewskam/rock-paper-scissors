import { setUncaughtExceptionCaptureCallback } from "process";
import * as React from "react";
import { useContext } from "react";
import { ScoreContext } from "../pages/_app";
import Paper from "./image/Paper";
import Rock from "./image/Rock";
import Scissors from "./image/Scissors";
import Triangle from "./image/Triangle";

export default function Choice() {
  const { setChoice } = useContext(ScoreContext);
  const handlePaper = () => {
    setChoice("paper");
  };
  const handleRock=()=>{
    setChoice("rock")
  }
  const handleScissors =()=>{
    setChoice("scissors")
  }
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
        <button onClick={handleScissors }className="btn scissorsColor">
          <Scissors />
        </button>
      </div>
    </div>
  );
}
