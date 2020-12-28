import { useState, useRef, useEffect } from "react";

const useInterceptor = (options) => {
  const ref = useRef();
  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry)
      setVisible(entry.isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, visible];
};

export default useInterceptor;