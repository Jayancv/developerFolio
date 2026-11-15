import React, {useEffect, useRef, useState} from "react";

/** Fades children in once they scroll into view. Reduced motion is handled in CSS. */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {rootMargin: "0px 0px -8% 0px"}
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""} ${className}`}
      style={delay ? {transitionDelay: `${delay}ms`} : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
