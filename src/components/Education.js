import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import {education} from "../portfolio";

export default function Education() {
  if (!education.display) return null;
  return (
    <Section id="education" eyebrow="Background" title={education.title}>
      <div className="edu-grid">
        {education.items.map((e, i) => (
          <Reveal key={e.school} className="edu card" delay={i * 80}>
            <img src={e.logo} alt="" className="edu-logo" loading="lazy" />
            <div>
              <p className="edu-date">{e.date}</p>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-school">
                {e.school} · {e.detail}
              </p>
              <ul className="bullets">
                {e.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
