import { useState, useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import { Button } from "@mui/material";

const CommandPointReminder = () => {
  const { phase } = useGameStore();
  const [cpUsed, setCpUsed] = useState(false);

  useEffect(() => {
    if (phase === "Command Phase") {
      setCpUsed(false); // Reset CP usage at the start of each turn
    }
  }, [phase]);

  return (
    <Button
      variant="contained"
      color={cpUsed ? "secondary" : "primary"}
      onClick={() => setCpUsed(!cpUsed)}
      style={{ marginTop: "20px" }}
    >
      {cpUsed ? "Free Command Point Used" : "Use Free Command Point"}
    </Button>
  );
};

export default CommandPointReminder;
