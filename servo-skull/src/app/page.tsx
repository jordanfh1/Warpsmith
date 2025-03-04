'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import PhaseRules from "./components/phaseRules";
import { useGameStore } from "./store/gameStore";
import PhaseTracker from "./components/phaseTracker";
import StrategyAdvice from "./components/strategyAdvice";
import CommandPointReminder from "./components/hiveTyrantCP";
import GeneralAdvice from "./components/generalAdvice";





export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>



      <h1>The Hive Mind</h1>
      <h2>The Tyranid Companion</h2>
        
            
            <PhaseTracker />
            <PhaseRules />
            <StrategyAdvice />
            <CommandPointReminder />
            <GeneralAdvice />
        
      </main>
      
    </div>
  );
}
