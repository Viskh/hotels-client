import { useCallback, useEffect, useRef, useState } from "react";

export const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  const observer = useRef(new IntersectionObserver(handleObserver));

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return { cbRef: setLastElement, page };
};
