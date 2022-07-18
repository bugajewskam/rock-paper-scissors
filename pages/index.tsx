import { ThemeContext } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import AlertDialog from "../conponents/RulesDesktop";
import Start from "../conponents/Start";

import styles from "../styles/Home.module.css";
import { ScoreContext } from "./_app";


const Home: NextPage = () => {
  const {choice, setChoice}= useContext(ScoreContext)
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
  
    
        <><div className="open">
      <button className="btnRules" onClick={handleClickOpen}>
        Rules
      </button>
    </div><AlertDialog handleClose={handleClose} open={open} />
    <Start /></>
    
  );
};

export default Home;
