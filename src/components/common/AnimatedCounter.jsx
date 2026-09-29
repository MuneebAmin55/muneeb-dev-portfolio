import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Counts up smoothly from 0 to value when scrolled into view
 * @param {Object} props
 * @param {string | number} props.value - E.g. '15+', '1,200+', '3+'
 * @param {number} [props.duration=1500] - Duration in ms
 * @param {string} [props.className]
 */
export function AnimatedCounter({ value, duration = 1500, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric target and non-numeric suffix
    const strVal = String(value);
    const numericMatch = strVal.match(/[\d,]+/);
    const suffix = strVal.replace(/[\d,]+/, '');

    if (!numericMatch) {
      setDisplayValue(strVal);
      return;
    }

    const targetNumber = parseInt(numericMatch[0].replace(/,/g, ''), 10);
    const hasCommas = numericMatch[0].includes(',');
    let startTime = null;

    const easeOutQuad = (t) => t * (2 - t);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const current = Math.floor(easedProgress * targetNumber);

      const formatted = hasCommas
        ? current.toLocaleString('en-US')
        : String(current);

      setDisplayValue(`${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(strVal);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
