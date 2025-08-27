"use client";

import React from "react";
import "@/styles/presentation.css";

type SlideProps = React.PropsWithChildren<{
  className?: string;
  active?: boolean;
  prev?: boolean;
}>;

export function Slide({ className = "", active, prev, children }: SlideProps) {
  const classes = ["slide", className, active ? "active" : "", prev ? "prev" : ""].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
