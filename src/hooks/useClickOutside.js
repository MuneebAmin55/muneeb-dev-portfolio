import { useEffect, useRef } from 'react';

/**
 * Hook to trigger callback when clicking outside the referenced element
 * @param {Function} handler - Callback to invoke on outside click
 * @returns {React.RefObject} ref to attach to target element
 */
export function useClickOutside(handler) {
  const domRef = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!domRef.current || domRef.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return domRef;
}
