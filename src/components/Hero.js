import React from "react";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import {profile} from "../portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <Reveal className="hero-text">
          <p className="badge">
            <span className="badge-dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 className="hero-title">
            Hi, I'm {profile.shortName}.
            <span className="hero-title-accent">{profile.headline}</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="cta-row">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            {profile.resumeLink && (
              <a
                href={profile.resumeLink}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt" aria-hidden="true" /> Résumé
              </a>
            )}
          </div>
          <SocialLinks />
        </Reveal>
        <Reveal className="hero-portrait" delay={120}>
          <div className="hero-portrait-frame">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width="320"
              height="320"
            />
          </div>
          <p className="hero-meta">
            <i className="fas fa-map-marker-alt" aria-hidden="true" />{" "}
            {profile.location} · {profile.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
