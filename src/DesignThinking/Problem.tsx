import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "./Background";
import { EnvelopeIcon, KeyboardIcon, ShieldIcon, TouchIcon, AppsIcon } from "./icons";
import {
  ACCENT,
  ACCENT_WARM,
  FONT_FAMILY,
  FONT_FAMILY_MONO,
  TEXT_MUTED,
  TEXT_PRIMARY,
} from "./theme";

const IconPill: React.FC<{
  readonly label: string;
  readonly delay: number;
  readonly color: string;
  readonly children: React.ReactNode;
}> = ({ label, delay, color, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 200 } });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px) scale(${interpolate(p, [0, 1], [0.85, 1])})`,
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 24,
          border: `2px solid ${color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `${color}14`,
        }}
      >
        {children}
      </div>
      <div style={{ color: TEXT_MUTED, fontSize: 22, fontFamily: FONT_FAMILY }}>
        {label}
      </div>
    </div>
  );
};

export const Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const headline1 = spring({ frame, fps, config: { damping: 200 } });
  const headline1Out = interpolate(frame, [95, 115], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const headline2 = spring({ frame: frame - 110, fps, config: { damping: 200 } });
  const headline2Out = interpolate(frame, [195, 215], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const challenge = spring({ frame: frame - 210, fps, config: { damping: 200 } });

  const exit = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames - 3],
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
          padding: "0 120px",
        }}
      >
        {frame < 115 && (
          <div style={{ opacity: headline1 * headline1Out, textAlign: "center" }}>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: TEXT_PRIMARY,
                marginBottom: 56,
                transform: `translateY(${interpolate(headline1, [0, 1], [20, 0])}px)`,
              }}
            >
              BlackBerry fue líder mundial en comunicación móvil
            </div>
            <div style={{ display: "flex", gap: 56, justifyContent: "center" }}>
              <IconPill label="Correo seguro" delay={12} color={ACCENT}>
                <EnvelopeIcon />
              </IconPill>
              <IconPill label="Seguridad" delay={22} color={ACCENT}>
                <ShieldIcon />
              </IconPill>
              <IconPill label="Teclado físico" delay={32} color={ACCENT}>
                <KeyboardIcon />
              </IconPill>
            </div>
          </div>
        )}

        {frame >= 100 && frame < 215 && (
          <div
            style={{
              position: "absolute",
              opacity: headline2 * headline2Out,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: FONT_FAMILY_MONO,
                color: ACCENT_WARM,
                fontSize: 26,
                letterSpacing: 4,
                marginBottom: 20,
                transform: `translateY(${interpolate(headline2, [0, 1], [16, 0])}px)`,
              }}
            >
              2007 — EL MERCADO CAMBIA
            </div>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: TEXT_PRIMARY,
                marginBottom: 56,
                transform: `translateY(${interpolate(headline2, [0, 1], [20, 0])}px)`,
              }}
            >
              El iPhone impone nuevas expectativas
            </div>
            <div style={{ display: "flex", gap: 56, justifyContent: "center" }}>
              <IconPill label="Pantalla táctil" delay={112} color={ACCENT_WARM}>
                <TouchIcon color={ACCENT_WARM} />
              </IconPill>
              <IconPill label="Apps y ecosistema" delay={122} color={ACCENT_WARM}>
                <AppsIcon color={ACCENT_WARM} />
              </IconPill>
            </div>
          </div>
        )}

        {frame >= 205 && (
          <div
            style={{
              position: "absolute",
              opacity: challenge,
              transform: `translateY(${interpolate(challenge, [0, 1], [20, 0])}px)`,
              textAlign: "center",
              maxWidth: 1300,
            }}
          >
            <div style={{ fontSize: 30, color: TEXT_MUTED, marginBottom: 16 }}>
              El reto:
            </div>
            <div style={{ fontSize: 48, fontWeight: 700, color: TEXT_PRIMARY, lineHeight: 1.3 }}>
              Ofrecer seguridad y productividad, en una experiencia{" "}
              <span style={{ color: ACCENT }}>moderna y deseable</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
