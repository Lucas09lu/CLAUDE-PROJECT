export const BG_DARK = "#0A0C10";
export const BG_DARK_2 = "#12151C";
export const ACCENT = "#3AD6FF";
export const ACCENT_WARM = "#FF5A36";
export const TEXT_PRIMARY = "#F5F7FA";
export const TEXT_MUTED = "#8A93A6";
export const FONT_FAMILY =
  "SF Pro Text, Helvetica, Arial, sans-serif";
export const FONT_FAMILY_MONO =
  "SF Mono, Menlo, Consolas, monospace";

export type Stage = {
  readonly number: number;
  readonly key: string;
  readonly title: string;
  readonly lines: readonly string[];
};

export const STAGES: readonly Stage[] = [
  {
    number: 1,
    key: "empathize",
    title: "Empatizar",
    lines: [
      "Escuchar antes de diseñar.",
      "Profesionales, estudiantes, empresas y devs ya esperaban más que solo correo seguro.",
    ],
  },
  {
    number: 2,
    key: "define",
    title: "Definir",
    lines: [
      "El reto correcto: no copiar al iPhone.",
      "Ofrecer seguridad y productividad en una experiencia atractiva para todos.",
    ],
  },
  {
    number: 3,
    key: "ideate",
    title: "Idear",
    lines: [
      "Nace BlackBerry One.",
      "Táctil + teclado opcional + modo trabajo/personal + apps.",
    ],
  },
  {
    number: 4,
    key: "prototype",
    title: "Prototipar",
    lines: [
      "De boceto a experiencia tangible.",
      "Interfaz simple, seguridad integrada, teclado como opción.",
    ],
  },
  {
    number: 5,
    key: "test",
    title: "Probar",
    lines: [
      "Aprender, iterar, mejorar.",
      "Nace BlackBerry One 2.0: más simple e intuitivo.",
    ],
  },
];
