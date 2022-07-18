
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
  const { choice, setChoice } = useContext(ScoreContext);
  const handleReturn = () => {
    setChoice(null);
  };
  return (
    <>
      {IconMaping[choice]}
      <button onClick={handleReturn}>return</button>
    </>
  );
}
