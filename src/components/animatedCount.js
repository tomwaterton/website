import React, { useEffect, useRef, useState } from "react";

const DURATION_MS = 800;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Displays a number that counts up from 0 on page load, and animates from its
 * previous value to `value` whenever `value` changes afterwards.
 * The server-rendered HTML contains the final value (no-JS safe), and the
 * animation is skipped when prefers-reduced-motion is set. The animated digits
 * are hidden from assistive tech; a static copy of the final value is exposed
 * instead so screen readers don't announce every intermediate number.
 */
const AnimatedCount = ({ value }) => {
  const [display, setDisplay] = useState(value);
  // Animation origin: 0 on first mount, then the last displayed number.
  const displayRef = useRef(0);

  useEffect(() => {
    const from = displayRef.current;
    if (from === value) return undefined;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      displayRef.current = value;
      setDisplay(value);
      return undefined;
    }

    let frameId;
    const start = window.performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const next = Math.round(from + (value - from) * easeOutCubic(progress));
      displayRef.current = next;
      setDisplay(next);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <>
      <span aria-hidden="true" className="animatedCount">
        {display}
      </span>
      <span className="visually-hidden">{value}</span>
    </>
  );
};

export default AnimatedCount;
