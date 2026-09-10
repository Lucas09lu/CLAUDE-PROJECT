import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "./Background";
import {
  BulbIcon,
  EnvelopeIcon,
  FlaskIcon,
  ShieldIcon,
  WrenchIcon,
} from "./icons";
import { ACCENT, FONT_FAMILY, FONT_FAMILY_MONO, STAGES, Stage, TEXT_MUTED, TEXT_PRIMARY } from "./theme";

const ICON_BY_KEY: Record<string, React.FC<{ size?: number; color?: string }>> = {
  empathize: EnvelopeIcon,
  define: ShieldIcon,
  ideate: BulbIcon,
  prototype: WrenchIcon,
  test: FlaskIcon,
};

const STAGE_DURATION = 240;

const ProgressDots: React.FC<{ readonly active: number }> = ({ active }) => (
  <div style={{ display: "flex", gap: 14, marginBottom: 44 }}>
    {STAGES.map((s) => (
      <div
        key={s.key}
        style={{
          width: s.number === active ? 40 : 14,
          height: 14,
          borderRadius: 7,
          background: s.number === active ? ACCENT : "#2A2F3A",
        }}
      />
    ))}
  </div>
);

export const StageScene: React.FC<{ readonly stage: Stage }> = ({ stage }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const Icon = ICON_BY_KEY[stage.key];

  const badge = spring({ frame, fps, config: { damping: 200 } });
  const title = spring({ frame: frame - 10, fps, config: { damping: 200 } });
  const line1 = spring({ frame: frame - 30, fps, config: { damping: 200 } });
  const line2 = spring({ frame: frame - 48, fps, config: { damping: 200 } });

  const exit = interpolate(
    frame,
    [STAGE_DURATION - 18, STAGE_DURATION - 4],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <>
      <Background />
      <div
        style={{
          position: "absolute",
          left: 130,
          top: 0,
          bottom: 0,
          fontSize: 340,
          fontWeight: 900,
          color: "#FFFFFF08",
          display: "flex",
          alignItems: "center",
          fontFamily: FONT_FAMILY,
        }}
      >
        0{stage.number}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 160,
          paddingRight: 200,
          fontFamily: FONT_FAMILY,
          opacity: exit,
        }}
      >
        <ProgressDots active={stage.number} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            opacity: badge,
            transform: `translateX(${interpolate(badge, [0, 1], [-30, 0])}px)`,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              background: `${ACCENT}18`,
              border: `2px solid ${ACCENT}55`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={48} color={ACCENT} />
          </div>
          <div
            style={{
              fontFamily: FONT_FAMILY_MONO,
              color: ACCENT,
              letterSpacing: 3,
              fontSize: 22,
            }}
          >
            ETAPA {stage.number} / 5
          </div>
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: TEXT_PRIMARY,
            opacity: title,
            transform: `translateY(${interpolate(title, [0, 1], [20, 0])}px)`,
            marginBottom: 28,
          }}
        >
          {stage.title}
        </div>

        <div
          style={{
            fontSize: 36,
            color: TEXT_PRIMARY,
            opacity: line1,
            transform: `translateY(${interpolate(line1, [0, 1], [16, 0])}px)`,
            marginBottom: 14,
            maxWidth: 1100,
          }}
        >
          {stage.lines[0]}
        </div>
        <div
          style={{
            fontSize: 30,
            color: TEXT_MUTED,
            opacity: line2,
            transform: `translateY(${interpolate(line2, [0, 1], [16, 0])}px)`,
            maxWidth: 1050,
          }}
        >
          {stage.lines[1]}
        </div>
      </div>
    </>
  );
};
