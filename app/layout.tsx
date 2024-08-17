import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

const customTheme: CustomFlowbiteTheme = {
  dropdown: {
    floating: {
      target: "w-fit bg-blue-500 hover:bg-blue-600 hover:enabled:bg-blue-600",
    },
  },
  tabs: {
    tablist: {
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        icon: "mr-2 h-5 w-5",
      },
    },
    tabpanel: "hidden",
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
