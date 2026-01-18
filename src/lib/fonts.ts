import localFont from "next/font/local";
import { Geist } from "next/font/google";

export const cmu = localFont({
  src: [
    {
      path: "../../public/fonts/cmunrm.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cmunbx.woff",
      weight: "700",
      style: "bold",
    },
  ],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
