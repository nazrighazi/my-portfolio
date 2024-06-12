import { JetBrains_Mono, Lato, Montserrat } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
});

export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "800"],
  variable: "--font-jetbrainsmono",
});
