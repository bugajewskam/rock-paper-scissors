import { useContext, useEffect } from "react";
import { ScoreContext } from "../pages/_app";
import Paper from "./image/Paper";
import Rock from "./image/Rock";
import Scissors from "./image/Scissors";

export const IconMaping = {
  paper: <Paper />,
  rock: <Rock />,
  scissors: <Scissors />,
};
interface PlayProps {
  handleReturn: () => void;
}
export default function Play({ handleReturn }: PlayProps) {
  const {
    choice,
    setChoice,
    computerChoice,
    setComputerChoice,
    winOrLost,
    setWinOrLost,
  } = useContext(ScoreContext);

  return (
    <>
      <div className="play">
        <div className="userChoice">{IconMaping[choice]}</div>
        <div className="computerChoice">{IconMaping[computerChoice]}</div>
        <div className="result">
          {winOrLost === "win" && <div>win</div>}
          {winOrLost === "lost" && <div>lost</div>}
          {winOrLost === "remis" && <div>remis</div>}
          <button className="return" onClick={handleReturn}>return</button>
        </div>
      </div>
    </>
  );
}
