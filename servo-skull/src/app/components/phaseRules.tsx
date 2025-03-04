import { phaseRules } from "../db/rules";
import { useGameStore } from "../store/gameStore";
import { Card, CardContent, Typography } from "@mui/material";

const PhaseRules = () => {
  const { phase } = useGameStore();

  return (
    <Card style={{ maxWidth: 500, margin: "auto", marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5">Phase Rules</Typography>
        <Typography variant="body1">{phaseRules[phase]}</Typography>
      </CardContent>
    </Card>
  );
};

export default PhaseRules;
