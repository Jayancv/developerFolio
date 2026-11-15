import React from "react";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import {contact, profile} from "../portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact card">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
          <div className="cta-row cta-row--center">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <i className="fas fa-envelope" aria-hidden="true" /> Email me
            </a>
            {profile.resumeLink && (
              <a
                className="btn btn-ghost"
                href={profile.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt" aria-hidden="true" /> Résumé
              </a>
            )}
          </div>
          <p className="contact-email">{profile.email}</p>
          <SocialLinks className="social--center" />
        </Reveal>
      </div>
    </section>
  );
}
