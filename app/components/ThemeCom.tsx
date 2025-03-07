"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React, { type ReactNode } from "react";
interface ThemeComProps {
  children: ReactNode;
}

const ThemeCom = ({ children }: ThemeComProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={theme}>
      <div className=" text-gray-700 dark:text-gray-200 dark:bg-[rgb(16, 23, 42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeCom;
