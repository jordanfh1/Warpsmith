import { useGameStore } from "../store/gameStore";
import { Button } from "@mui/material";

const PhaseTracker = () => {
  const { phase, nextPhase, prevPhase } = useGameStore();

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Current Phase: {phase}</h2>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={prevPhase} 
        disabled={phase === "Command Phase"}
      >
        Previous Phase
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={nextPhase} 
        style={{ marginLeft: "10px" }}
      >
        Next Phase
      </Button>
    </div>
  );
};

export default PhaseTracker;
