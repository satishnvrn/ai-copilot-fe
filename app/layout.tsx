import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

const customTheme: CustomFlowbiteTheme = {
  dropdown: {
    "floating": {
      "target": "w-fit bg-blue-500 hover:bg-blue-600 hover:enabled:bg-blue-600"
    },
  },
  button: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600",
    },
  },
};

export const metadata: Metadata = {
  title: "Applix AI Copilot",
  description: "Spellchecker for manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Flowbite>
  );
}
