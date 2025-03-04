'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import PhaseRules from "./components/phaseRules";
import { useGameStore } from "./store/gameStore";
import PhaseTracker from "./components/phaseTracker";
import StrategyAdvice from "./components/strategyAdvice";




export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>



      <Image src="/servoskull.png" 
      alt="Skull icon" 
      width={100} 
      height={100} 
      />

      <h1>Warhammer 40K Companion</h1>
        
            
            <PhaseTracker />
            <StrategyAdvice />
            <PhaseRules />
           


      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
