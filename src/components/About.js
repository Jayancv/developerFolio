import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import {about} from "../portfolio";

export default function About() {
  if (!about.display) return null;
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="about-grid">
        <Reveal className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="stats" delay={100}>
          {about.highlights.map(h => (
            <div key={h.label} className="stat card">
              <span className="stat-value">{h.value}</span>
              <span className="stat-label">{h.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
