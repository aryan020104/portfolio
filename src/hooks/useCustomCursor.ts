"use client";

import { useState, useEffect } from "react";

export interface CursorState {
  x: number;
  y: number;
  hovered: boolean;
  text: string;
  variant: "default" | "button" | "card" | "project" | "hidden";
}

export function useCustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: -100,
    y: -100,
    hovered: false,
    text: "",
    variant: "default",
  });

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setCursorState((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const setCursor = (text: string = "", variant: CursorState["variant"] = "default", hovered: boolean = true) => {
    setCursorState((prev) => ({
      ...prev,
      text,
      variant,
      hovered,
    }));
  };

  const resetCursor = () => {
    setCursorState((prev) => ({
      ...prev,
      text: "",
      variant: "default",
      hovered: false,
    }));
  };

  return { cursorState, setCursor, resetCursor, isTouch };
}
