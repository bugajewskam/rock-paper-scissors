import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import * as React from "react";
import { useContext, useState } from "react";
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
  const [isChange, setIsChange] = useState(false);

  const handleReturn = () => {
    setChoice(null);
    setComputerChoice(null);
    setWinOrLost("empty");
  };

  const handleWin = React.useCallback(
    (choice: ChoiceType, computerChoice: ChoiceType) => {
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
    },
    [setWinOrLost, setScore]
  );
  const handelComputerChoice = React.useCallback(() => {
    const interval = setInterval(() => {
      const result = getRandom();
      setComputerChoice(result);
      setIsChange(true);
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
      setIsChange(false);
    }, 2000);
  }, [setComputerChoice]);

  const handleUserChoice = React.useCallback(
    (value: ChoiceType) => () => {
      setChoice(value);
      handelComputerChoice();
    },
    [setChoice, handelComputerChoice]
  );
  React.useEffect(() => {
    if (choice && computerChoice && !isChange) {
      handleWin(choice, computerChoice);
    }
  }, [choice, computerChoice, isChange, handleWin]);
  console.log(choice, computerChoice, winOrLost);
  return (
    <div className="start">
      <Logo />
      {choice === null && (
        <Choice
          handlePaper={handleUserChoice("paper")}
          handleRock={handleUserChoice("rock")}
          handleScissors={handleUserChoice("scissors")}
        />
      )}
      {choice !== null && <Play handleReturn={handleReturn} />}
    </div>
  );
}
