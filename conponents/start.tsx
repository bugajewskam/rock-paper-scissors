import * as React from "react";
import { useContext } from "react";
import { ScoreContext } from "../pages/_app";

import Logo from "./logo";

export default function Start() {
  const {score} = useContext(ScoreContext)
  return (
    <div className="start">
      <Logo/>
    </div>
  );
}
