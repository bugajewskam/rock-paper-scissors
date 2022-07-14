import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AlertDialog from '../conponents/RulesDesktop'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <><button onClick={handleClickOpen}>Rules</button>
    <AlertDialog handleClose={handleClose} open={open} /></>


  )
}

export default Home
