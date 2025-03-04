import { create } from "zustand";

type Phase =
  | "Command Phase"
  | "Movement Phase"
  | "Psychic Phase"
  | "Shooting Phase"
  | "Charge Phase"
  | "Fight Phase"
  | "Morale Phase";

interface GameState {
  phase: Phase;
  nextPhase: () => void;
  prevPhase: () => void;
}

const phases: Phase[] = [
  "Command Phase",
  "Movement Phase",
  "Psychic Phase",
  "Shooting Phase",
  "Charge Phase",
  "Fight Phase",
  "Morale Phase",
];

export const useGameStore = create<GameState>((set, get) => ({
  phase: phases[0],
  nextPhase: () => {
    const currentIndex = phases.indexOf(get().phase);
    if (currentIndex < phases.length - 1) {
      set({ phase: phases[currentIndex + 1] });
    }
  },
  prevPhase: () => {
    const currentIndex = phases.indexOf(get().phase);
    if (currentIndex > 0) {
      set({ phase: phases[currentIndex - 1] });
    }
  },
}));
