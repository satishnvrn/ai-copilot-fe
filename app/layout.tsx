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
  carousel: {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-600/30 group-hover:bg-gray-500/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white sm:h-6 sm:w-6",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-[500px] mx-5 flex-shrink-0 transform cursor-default snap-center",
        on: "w-[500px] mx-5 flex-shrink-0 transform cursor-grab snap-center",
      },
    },
  },
};

export const metadata: Metadata = {
  title: "Applix AI Copilot",
  description: "Spellchecker for manufacturing",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
