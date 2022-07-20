import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SetStateAction, useState, Dispatch } from "react";
import { createContext } from "react";

export type ChoiceType = "paper" | "rock" | "scissors";
export type WinOrLost = "win" | "lost" | "remis" | "empty"
export const ScoreContext = createContext<{
    score: number,
    choice: ChoiceType | null,
    setChoice: (choice: ChoiceType | null) => void,
    computerChoice: ChoiceType | null,
    setComputerChoice: (choice: ChoiceType | null) => void,
  winOrLost: WinOrLost ,
  setWinOrLost: (result: WinOrLost) => void,
  setScore: Dispatch<SetStateAction<number>>;
}>({
  score: 0,
  choice: null,
  setChoice:(x)=>{},
  computerChoice: null,
  setComputerChoice:(x)=>{},
winOrLost: "empty" ,
setWinOrLost:(result)=>{},
setScore:()=>{}
});
function MyApp({ Component, pageProps }: AppProps) {
  const [score, setScore] = useState(9);
  const [choice, setChoice] = useState<ChoiceType | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoiceType| null>(null);
  const [winOrLost, setWinOrLost] = useState<WinOrLost>("empty");


  return (
    <ScoreContext.Provider
      value={{ score, choice, setChoice, computerChoice, setComputerChoice , winOrLost, setWinOrLost, setScore}}
    >
      <Component {...pageProps} />
    </ScoreContext.Provider>
  );
}

export default MyApp;
