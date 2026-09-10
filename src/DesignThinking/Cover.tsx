import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "./Background";
import { ACCENT, FONT_FAMILY, FONT_FAMILY_MONO, TEXT_MUTED, TEXT_PRIMARY } from "./theme";

export const Cover: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const kicker = spring({ frame, fps, config: { damping: 200 } });
  const title = spring({ frame: frame - 10, fps, config: { damping: 200 } });
  const subtitle = spring({ frame: frame - 25, fps, config: { damping: 200 } });

  const exit = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <>
      <Background />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          fontFamily: FONT_FAMILY,
          opacity: exit,
        }}
      >
        <div
          style={{
            fontFamily: FONT_FAMILY_MONO,
            letterSpacing: 6,
            fontSize: 26,
            color: ACCENT,
            opacity: kicker,
            transform: `translateY(${interpolate(kicker, [0, 1], [16, 0])}px)`,
            textTransform: "uppercase",
          }}
        >
          Grupo 1 · Design Thinking
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            color: TEXT_PRIMARY,
            opacity: title,
            transform: `translateY(${interpolate(title, [0, 1], [24, 0])}px)`,
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          El Design Thinking de{" "}
          <span style={{ color: ACCENT }}>BlackBerry</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: TEXT_MUTED,
            opacity: subtitle,
            transform: `translateY(${interpolate(subtitle, [0, 1], [16, 0])}px)`,
            textAlign: "center",
            maxWidth: 1100,
          }}
        >
          Cómo pudo reinventarse antes de perder el mercado
        </div>
      </div>
    </>
  );
};
