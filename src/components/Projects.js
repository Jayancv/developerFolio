import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import {projects} from "../portfolio";

export default function Projects() {
  if (!projects.display) return null;
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title={projects.title}
      subtitle={projects.subtitle}
    >
      <div className="project-grid">
        {projects.items.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            className="project card"
            delay={(i % 2) * 80}
          >
            <div className="project-top">
              {p.image ? (
                <img
                  className="project-logo"
                  src={p.image}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <span
                  className="project-logo project-logo--icon"
                  aria-hidden="true"
                >
                  <i className="fas fa-code" />
                </span>
              )}
              <div className="project-links">
                {p.links.map(l => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={`${p.name}: ${l.name}`}
                    title={l.name}
                  >
                    <i
                      className={
                        l.name === "GitHub"
                          ? "fab fa-github"
                          : "fas fa-external-link-alt"
                      }
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
            <p className="project-context">{p.context}</p>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.description}</p>
            {p.bullets && p.bullets.length > 0 && (
              <details className="project-details">
                <summary>What I did</summary>
                <ul className="bullets">
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </details>
            )}
            <ul className="tags">
              {p.tags.map(t => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
