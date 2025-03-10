'use client'
import styles from "./page.module.css";
import PhaseRules from "./components/phaseRules";
import PhaseTracker from "./components/phaseTracker";
import StrategyAdvice from "./components/strategyAdvice";
import CommandPointReminder from "./components/hiveTyrantCP";
import GeneralAdvice from "./components/generalAdvice";





export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>



      <h1 style={{ margin: "20px 0", textAlign: "center" }}>40K Companion</h1>
      <h2 style={{ margin: "20px 0", textAlign: "center" }}>Servo Skull</h2>
        
            
            <PhaseTracker />
            <PhaseRules />
            <StrategyAdvice />
            <CommandPointReminder />
            <GeneralAdvice />
        
      </main>
      
    </div>
  );
}
