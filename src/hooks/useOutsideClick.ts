import { useRef, useEffect } from 'react';

export const useOutsideClick = <Element extends globalThis.Element>(callback: any) => {
  const ref = useRef<Element>(null);

  useEffect(() => {
    function handleOutclick(event: MouseEvent) {
      const target = event.target as Node;
      if (!ref.current!.contains(target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleOutclick);

    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  }, []);

  return ref;
};
