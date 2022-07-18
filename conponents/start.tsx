import * as React from "react";
import { useContext } from "react";
import { ScoreContext } from "../pages/_app";
import Choice from "./Choice";
import Triangle from "./image/Triangle";
import Logo from "./Logo";
import Play from "./Pley";


export default function Start() {
  const {score, choice, setChoice} = useContext(ScoreContext)
  return (
    <div className="start">
      <Logo/>
      {choice === null  &&
      <Choice/>}
      {choice !== null &&
      <Play/>}
      </div>

  );
}
