import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { createContext } from "react";
export const ScoreContext = createContext({
  score: Number as unknown as number,
});
function MyApp({ Component, pageProps }: AppProps) {
  const [score, setScore] = useState(9);

  return (
    <ScoreContext.Provider value={{ score }}>
      <Component {...pageProps} />
    </ScoreContext.Provider>
  );
}

export default MyApp;
