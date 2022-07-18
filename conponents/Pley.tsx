import { useContext } from "react";
import { ScoreContext } from "../pages/_app";

export default function Play() {
  const { choice, setChoice } = useContext(ScoreContext);
  const handleReturn = () => {
    setChoice(null);
  };
  return (
    <>
      <h1> {choice} </h1>
      <button onClick={handleReturn}>return</button>
    </>
  );
}
