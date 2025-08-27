"use client";

import React from "react";

type Props = { current: number; total: number };

export function SlideCounter({ current, total }: Props) {
  return (
    <div className="slide-counter">
      <span>{current + 1}</span> / <span>{total}</span>
    </div>
  );
}
