import PhaseTracker from "../components/phaseTracker";
import PhaseRules from "../components/phaseRules";
import StrategyAdvice from "../components/strategyAdvice";

const GamePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Warhammer 40K Companion</h1>
      <PhaseTracker />
      <PhaseRules />
      <StrategyAdvice />
    </div>
  );
};

export default GamePage;
