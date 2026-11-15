import React from "react";
import Reveal from "./Reveal";

export default function Section({id, eyebrow, title, subtitle, children}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal>
          <header className="section-header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
