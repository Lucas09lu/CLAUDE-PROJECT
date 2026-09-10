import React from "react";
import { ACCENT } from "./theme";

type IconProps = {
  readonly size?: number;
  readonly color?: string;
};

export const ShieldIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path
      d="M32 4L56 14V30C56 45 46 55 32 60C18 55 8 45 8 30V14L32 4Z"
      stroke={color}
      strokeWidth={3}
      fill="none"
    />
    <path
      d="M22 32L29 39L43 24"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="6" y="14" width="52" height="36" rx="3" stroke={color} strokeWidth={3} />
    <path d="M8 16L32 36L56 16" stroke={color} strokeWidth={3} strokeLinecap="round" />
  </svg>
);

export const KeyboardIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="4" y="18" width="56" height="28" rx="4" stroke={color} strokeWidth={3} />
    {[0, 1, 2].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={10 + col * 9.5}
          y={23 + row * 7}
          width={6}
          height={4}
          rx={1}
          fill={color}
        />
      )),
    )}
  </svg>
);

export const TouchIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="16" y="6" width="32" height="52" rx="6" stroke={color} strokeWidth={3} />
    <circle cx="32" cy="42" r="6" fill={color} opacity={0.85} />
  </svg>
);

export const AppsIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {[0, 1, 2].map((row) =>
      [0, 1, 2].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={8 + col * 18}
          y={8 + row * 18}
          width={12}
          height={12}
          rx={3}
          fill={color}
          opacity={0.9}
        />
      )),
    )}
  </svg>
);

export const BulbIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="26" r="16" stroke={color} strokeWidth={3} />
    <path d="M25 42H39" stroke={color} strokeWidth={3} strokeLinecap="round" />
    <path d="M27 50H37" stroke={color} strokeWidth={3} strokeLinecap="round" />
    <path d="M32 6V10" stroke={color} strokeWidth={3} strokeLinecap="round" />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path
      d="M46 10C40 10 36 15 37 21L18 40C15 43 15 47 18 50C21 53 25 53 28 50L47 31C53 32 58 28 58 22C58 20 57 18 56 16L48 24L40 22L38 14L46 6C46 6 46 10 46 10Z"
      stroke={color}
      strokeWidth={3}
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const FlaskIcon: React.FC<IconProps> = ({
  size = 64,
  color = ACCENT,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path
      d="M26 8H38V24L50 48C52 52 49 56 45 56H19C15 56 12 52 14 48L26 24V8Z"
      stroke={color}
      strokeWidth={3}
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M22 8H42" stroke={color} strokeWidth={3} strokeLinecap="round" />
    <path d="M19 40H45" stroke={color} strokeWidth={3} />
  </svg>
);
