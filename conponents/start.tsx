import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import * as React from "react";
import { useContext } from "react";
import { ChoiceType, ScoreContext } from "../pages/_app";
import Choice from "./Choice";
import Triangle from "./image/Triangle";
import Logo from "./Logo";
import Play from "./Pley";

export const choice: ChoiceType[] = ["paper", "rock", "scissors"];
export const getRandom = () => {
  return choice[Math.floor(Math.random() * 3)];
};

export default function Start() {
  const {
    score,
    setScore,
    choice,
    setChoice,
    computerChoice,
    setComputerChoice,
    setWinOrLost,
    winOrLost,
  } = useContext(ScoreContext);

  const handleReturn = () => {
    setChoice(null);
    setComputerChoice(null);
    setWinOrLost("empty");
  };

  
  const handelComputerChoice = () => {
    const result = getRandom();
    setComputerChoice(result);
    console.log(`Wybór komputer${computerChoice}`);
  };

  const handleWin = (choice: ChoiceType, computerChoice: ChoiceType) => {
    if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      setWinOrLost("win");
      setScore((prev) => prev + 1);
    } else if (choice == computerChoice) {
      setWinOrLost("remis");
    } else {
      setWinOrLost("lost");
    }
    console.log(winOrLost);
  };
  const handleUserChoice = React.useCallback((e: any) => {
    const newChoice = e.target.value;
    setChoice(newChoice);
  },[choice]);
  const handlePaper= (e:any) =>{
    setChoice("paper")
  }
  const handleScissors= (e:any) =>{
    setChoice("scissors")
  }
  const handleRock= (e:any) =>{
    setChoice("rock")
  }
  React.useEffect(() => {
    handelComputerChoice();
    handleWin(choice, computerChoice);
  }, [choice, computerChoice]);
  console.log(`wybor człowieka ${choice}`);
  
  console.log(
    `wybor człowieka ${choice} kompytera ${computerChoice} wynik ${winOrLost}`
    );
  return (
    <div className="start">
      <Logo />
      {choice === null && <Choice handleUserChoice={handleUserChoice} handlePaper={handlePaper}
      handleRock={handleRock} handleScissors={handleScissors} />}
      {choice !== null && <Play handleReturn={handleReturn} />}
    </div>
  );
}
