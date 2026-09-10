import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "./Background";
import { ShieldIcon } from "./icons";
import { ACCENT, FONT_FAMILY, FONT_FAMILY_MONO, TEXT_MUTED, TEXT_PRIMARY } from "./theme";

export const Conclusion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const line1 = spring({ frame, fps, config: { damping: 200 } });
  const line1Out = interpolate(frame, [55, 72], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const brand = spring({ frame: frame - 68, fps, config: { damping: 200 } });
  const thanks = spring({ frame: frame - 120, fps, config: { damping: 200 } });

  const exit = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 4],
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
          fontFamily: FONT_FAMILY,
          opacity: exit,
          padding: "0 140px",
        }}
      >
        {frame < 75 && (
          <div
            style={{
              position: "absolute",
              opacity: line1 * line1Out,
              textAlign: "center",
              transform: `translateY(${interpolate(line1, [0, 1], [20, 0])}px)`,
              maxWidth: 1300,
            }}
          >
            <div style={{ fontSize: 46, fontWeight: 700, color: TEXT_PRIMARY, lineHeight: 1.35 }}>
              BlackBerry no necesitaba dejar de ser segura.
              <br />
              Necesitaba hacer que la seguridad fuera{" "}
              <span style={{ color: ACCENT }}>moderna, sencilla y deseable.</span>
            </div>
          </div>
        )}

        {frame >= 65 && (
          <div
            style={{
              position: "absolute",
              opacity: brand,
              transform: `translateY(${interpolate(brand, [0, 1], [16, 0])}px) scale(${interpolate(brand, [0, 1], [0.92, 1])})`,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <ShieldIcon size={72} />
            <div style={{ fontSize: 64, fontWeight: 900, color: TEXT_PRIMARY, letterSpacing: 1 }}>
              BLACKBERRY <span style={{ color: ACCENT }}>ONE</span>
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY_MONO,
                color: TEXT_MUTED,
                fontSize: 24,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Seguridad sin límites
            </div>
            {frame >= 118 && (
              <div
                style={{
                  marginTop: 28,
                  fontSize: 26,
                  color: TEXT_MUTED,
                  opacity: thanks,
                  transform: `translateY(${interpolate(thanks, [0, 1], [10, 0])}px)`,
                }}
              >
                Muchas gracias · Grupo 1
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
