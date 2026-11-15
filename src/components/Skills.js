import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import {skills} from "../portfolio";

export default function Skills() {
  if (!skills.display) return null;
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={skills.title}
      subtitle={skills.subtitle}
    >
      <div className="skills-grid">
        <Reveal className="card skills-focus">
          <h3 className="card-title">What I do</h3>
          <ul className="check-list">
            {skills.focus.map(f => (
              <li key={f}>
                <i className="fas fa-check" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="skill-groups">
          {skills.groups.map((g, i) => (
            <Reveal key={g.name} className="skill-group" delay={i * 80}>
              <h3 className="skill-group-name">{g.name}</h3>
              <ul className="tags">
                {g.items.map(item => (
                  <li key={item} className="tag tag--lg">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
