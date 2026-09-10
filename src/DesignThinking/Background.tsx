import React from "react";
import { AbsoluteFill } from "remotion";
import { BG_DARK, BG_DARK_2 } from "./theme";

export const Background: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(120% 120% at 15% 10%, ${BG_DARK_2} 0%, ${BG_DARK} 65%)`,
    }}
  >
    <AbsoluteFill
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </AbsoluteFill>
);
