import React from "react";
import {profile} from "../portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">
          Back to top <i className="fas fa-arrow-up" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
