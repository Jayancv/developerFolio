import React, {useEffect, useState} from "react";
import useTheme from "./useTheme";
import {
  profile,
  about,
  experience,
  projects,
  skills,
  certifications,
  education
} from "../portfolio";

const links = [
  {href: "#about", label: "About", show: about.display},
  {href: "#experience", label: "Experience", show: experience.display},
  {href: "#projects", label: "Projects", show: projects.display},
  {href: "#skills", label: "Skills", show: skills.display},
  {
    href: "#certifications",
    label: "Certifications",
    show: certifications.display
  },
  {href: "#education", label: "Education", show: education.display}
].filter(l => l.show);

export default function Nav() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`nav${scrolled ? " nav--scrolled" : ""}${
        open ? " nav--open" : ""
      }`}
    >
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={close}>
          <span className="nav-logo-mark" aria-hidden="true">
            {profile.shortName[0]}
          </span>
          <span className="nav-logo-text">{profile.name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <i
              className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <i
              className={open ? "fas fa-times" : "fas fa-bars"}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
