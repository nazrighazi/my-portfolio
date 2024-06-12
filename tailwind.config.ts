import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
        jetbrainsmono: ["var(--font-jetbrainsmono)"],
      },
      colors: {
        background: "#141314",
        header: "#1c1b1d",
        white: "#fff",
      },
      textShadow: {
        DEFAULT: "0 0px 25px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: PluginAPI["matchUtilities"];
      theme: PluginAPI["theme"];
    }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
