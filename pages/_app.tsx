import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { createContext } from "react";

export type ChoiceType= "paper" | "rock" | "scissors";
export const ScoreContext = createContext({
  score: Number as unknown as number, choice: String as unknown as ChoiceType | null, setChoice:(choice:ChoiceType | null) =>{ },
  computerChoice: String as unknown as string | null, setComputerChoice:(choice: string | null) =>{ }
});
function MyApp({ Component, pageProps }: AppProps) {
  const [score, setScore] = useState(9);
  const [choice, setChoice]= useState<ChoiceType | null>(null)
  const [computerChoice, setComputerChoice] = useState<string | null>(null)

  return (
    <ScoreContext.Provider value={{ score , choice, setChoice, computerChoice,setComputerChoice}}>
      <Component {...pageProps} />
    </ScoreContext.Provider>
  );
}

export default MyApp;
