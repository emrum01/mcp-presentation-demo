"use client";

import React from "react";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
};

export function Navigation({ onPrev, onNext, canPrev, canNext }: Props) {
  return (
    <div className="navigation">
      <button className="nav-btn" onClick={onPrev} disabled={!canPrev}>← 前へ</button>
      <button className="nav-btn" onClick={onNext} disabled={!canNext}>次へ →</button>
    </div>
  );
}
