
import { useContext } from "react";
import { ScoreContext } from "../pages/_app";
import Paper from "./image/Paper";
import Rock from "./image/Rock";
import Scissors from "./image/Scissors";

export const IconMaping = {
  paper: <Paper />,
  rock: <Rock />,
  scissors: <Scissors />,
};



export default function Play() {
  const { choice, setChoice, computerChoice, setComputerChoice } = useContext(ScoreContext);
  const handleReturn = () => {
    setChoice(null);
    setComputerChoice(null)
  };
  return (
    <>
      {IconMaping[choice]}
      {IconMaping[computerChoice]}
      <button onClick={handleReturn}>return</button>
    </>
  );
}
