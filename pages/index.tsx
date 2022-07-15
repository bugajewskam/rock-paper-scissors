import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createContext, useState } from "react";
import AlertDialog from "../conponents/RulesDesktop";
import Start from "../conponents/start";
import styles from "../styles/Home.module.css";
export const ScoreContext = createContext({
  score: Number
});

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [score, setScore] = useState<Number>(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="open">
        <button className="btnRules" onClick={handleClickOpen}>
          Rules
        </button>
      </div>
      <AlertDialog handleClose={handleClose} open={open} />
      <Start />
    </>
  );
};

export default Home;
