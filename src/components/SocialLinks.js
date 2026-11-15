import React from "react";
import {socialLinks} from "../portfolio";

export default function SocialLinks({className = ""}) {
  return (
    <ul className={`social ${className}`}>
      {socialLinks.map(s => {
        const external = s.url.startsWith("http");
        return (
          <li key={s.name}>
            <a
              href={s.url}
              className="icon-btn"
              aria-label={s.name}
              title={s.name}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <i className={s.icon} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
