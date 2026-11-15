import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import {experience} from "../portfolio";

export default function Experience() {
  if (!experience.display) return null;
  return (
    <Section id="experience" eyebrow="Career" title={experience.title}>
      <ol className="timeline">
        {experience.items.map((job, i) => (
          <Reveal as="li" key={i} className="timeline-item">
            <div className="timeline-logo">
              <img src={job.logo} alt="" loading="lazy" />
            </div>
            <div className="timeline-body card">
              <div className="timeline-head">
                <div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                </div>
                <span className="timeline-date">{job.date}</span>
              </div>
              <ul className="bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
