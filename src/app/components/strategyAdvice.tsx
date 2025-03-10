'use client';
import { strategyTips } from "../db/strategy";
import { useGameStore } from "../store/gameStore";
import { Card, CardContent, Typography } from "@mui/material";

const StrategyAdvice = () => {
  const { phase } = useGameStore();

  return (
    <Card style={{ maxWidth: 500, margin: "auto", marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5">Strategy Advice</Typography>
        <Typography variant="body1">{strategyTips[phase]}</Typography>
      </CardContent>
    </Card>
  );
};

export default StrategyAdvice;
