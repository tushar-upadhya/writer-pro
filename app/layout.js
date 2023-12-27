import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Writer Pro",
  description:
    "writer pro, templates, themes, formal templates, formal letter, cover letter, reference letter, informal letter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="mainBody"
        className="m-2 font-semibold bg-zinc-900 text-fuchsia-400 md:p-2 mon md:overflow-y-hidden"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
