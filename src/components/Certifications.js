import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import {certifications} from "../portfolio";

export default function Certifications() {
  if (!certifications.display) return null;
  return (
    <Section
      id="certifications"
      eyebrow="Recognition"
      title={certifications.title}
    >
      <div className="cert-grid">
        {certifications.items.map((c, i) => {
          const content = (
            <>
              <img src={c.image} alt="" className="cert-img" loading="lazy" />
              <div className="cert-text">
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
              {c.url && (
                <i
                  className="fas fa-arrow-right cert-arrow"
                  aria-hidden="true"
                />
              )}
            </>
          );
          return (
            <Reveal key={c.title} delay={(i % 3) * 60}>
              {c.url ? (
                <a
                  className="cert card card--link"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View credential"
                >
                  {content}
                </a>
              ) : (
                <div className="cert card">{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
