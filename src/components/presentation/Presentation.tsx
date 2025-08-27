'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Slide } from './Slide';
import { Navigation } from './Navigation';
import { SlideCounter } from './SlideCounter';
import '@/styles/presentation.css';

type PresentationProps = { children: React.ReactNode };

export function Presentation({ children }: PresentationProps) {
  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const [index, setIndex] = useState(0);

  const total = slides.length;
  const canPrev = index > 0;
  const canNext = index < total - 1;

  const goto = useCallback(
    (next: number) => {
      setIndex(() => Math.max(0, Math.min(total - 1, next)));
    },
    [total]
  );

  const next = useCallback(() => goto(index + 1), [index, goto]);
  const prev = useCallback(() => goto(index - 1), [index, goto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    const active = document.querySelector('.slide.active');
    if (!active) return;
    const animated = active.querySelectorAll(
      '.card, .problem-item, .solution-item, .step'
    );
    animated.forEach((el) => {
      const anyEl = el as HTMLElement;
      anyEl.style.animation = 'none';
      // force reflow
      void anyEl.offsetHeight;
      anyEl.style.animation = '';
    });
  }, [index]);

  return (
    <div className="presentation-container">
      {slides.map((child, i) => {
        const className =
          React.isValidElement(child) &&
          typeof (child.props as any)?.className === 'string'
            ? (child.props as any).className
            : '';
        return (
          <Slide
            key={i}
            active={i === index}
            prev={i < index}
            className={className}
          >
            {child}
          </Slide>
        );
      })}
      <Navigation
        onPrev={prev}
        onNext={next}
        canPrev={canPrev}
        canNext={canNext}
      />
      <SlideCounter current={index} total={total} />
    </div>
  );
}
